FROM amazoncorretto:17

WORKDIR /app

# Install Python for the server
RUN yum install -y python3 python3-pip && yum clean all

# Copy Java execution scripts
COPY java-code/ ./java-code/
COPY codeSubmission/java/ ./execution/

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
        code = data.get("code", "")\n\
        class_name = data.get("className", "Main")\n\
        \n\
        try:\n\
            with tempfile.TemporaryDirectory() as tmpdir:\n\
                java_file = os.path.join(tmpdir, f"{class_name}.java")\n\
                with open(java_file, "w") as f:\n\
                    f.write(code)\n\
                \n\
                # Compile\n\
                compile_result = subprocess.run(\n\
                    ["javac", java_file],\n\
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
                        ["java", "-cp", tmpdir, class_name],\n\
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
                self.send_response(200)\n\
        except Exception as e:\n\
            response = {"error": str(e)}\n\
            self.send_response(500)\n\
        \n\
        self.send_header("Content-type", "application/json")\n\
        self.end_headers()\n\
        self.wfile.write(json.dumps(response).encode())\n\
\n\
port = int(os.getenv("PORT", 5003))\n\
server = HTTPServer(("0.0.0.0", port), Handler)\n\
print(f"Java execution server running on port {port}")\n\
server.serve_forever()' > server.py

EXPOSE 5003

CMD ["python3", "server.py"]
