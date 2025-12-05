FROM gcc:latest

WORKDIR /app

# Install gdb for debugging
RUN apt-get update && apt-get install -y \
    gdb \
    python3 \
    python3-pip \
    && rm -rf /var/lib/apt/lists/*

# Copy C/C++ execution scripts
COPY c-code/ ./c-code/
COPY cpp-code/ ./cpp-code/
COPY codeSubmission/C/ ./execution/c/
COPY codeSubmission/cpp/ ./execution/cpp/

# Create a simple health check server
RUN echo 'from http.server import HTTPServer, BaseHTTPRequestHandler\n\
import json\n\
import subprocess\n\
import os\n\
import tempfile\n\
\n\
class Handler(BaseHTTPRequestHandler):\n\
    def do_GET(self):\n\
        if self.path == "/health":\n\
            self.send_response(200)\n\
            self.send_header("Content-type", "application/json")\n\
            self.end_headers()\n\
            self.wfile.write(json.dumps({"status": "healthy"}).encode())\n\
    \n\
    def do_POST(self):\n\
        content_length = int(self.headers["Content-Length"])\n\
        post_data = self.rfile.read(content_length)\n\
        data = json.loads(post_data.decode())\n\
        \n\
        lang = data.get("language", "cpp")\n\
        code = data.get("code", "")\n\
        \n\
        try:\n\
            with tempfile.NamedTemporaryFile(mode="w", suffix=".cpp" if lang == "cpp" else ".c", delete=False) as f:\n\
                f.write(code)\n\
                source_file = f.name\n\
            \n\
            executable = source_file.replace(".cpp", "").replace(".c", "")\n\
            compiler = "g++" if lang == "cpp" else "gcc"\n\
            \n\
            # Compile\n\
            compile_result = subprocess.run(\n\
                [compiler, source_file, "-o", executable],\n\
                capture_output=True,\n\
                text=True,\n\
                timeout=10\n\
            )\n\
            \n\
            if compile_result.returncode != 0:\n\
                response = {\n\
                    "stdout": "",\n\
                    "stderr": compile_result.stderr,\n\
                    "returncode": compile_result.returncode,\n\
                    "error": "Compilation failed"\n\
                }\n\
            else:\n\
                # Execute\n\
                run_result = subprocess.run(\n\
                    [executable],\n\
                    capture_output=True,\n\
                    text=True,\n\
                    timeout=5\n\
                )\n\
                response = {\n\
                    "stdout": run_result.stdout,\n\
                    "stderr": run_result.stderr,\n\
                    "returncode": run_result.returncode\n\
                }\n\
            \n\
            # Cleanup\n\
            os.remove(source_file)\n\
            if os.path.exists(executable):\n\
                os.remove(executable)\n\
            \n\
            self.send_response(200)\n\
        except Exception as e:\n\
            response = {"error": str(e)}\n\
            self.send_response(500)\n\
        \n\
        self.send_header("Content-type", "application/json")\n\
        self.end_headers()\n\
        self.wfile.write(json.dumps(response).encode())\n\
\n\
port = int(os.getenv("PORT", 5002))\n\
server = HTTPServer(("0.0.0.0", port), Handler)\n\
print(f"C/C++ execution server running on port {port}")\n\
server.serve_forever()' > server.py

EXPOSE 5002

CMD ["python3", "server.py"]
