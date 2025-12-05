from http.server import HTTPServer, BaseHTTPRequestHandler
import json
import subprocess
import sys
import os

class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path == "/health":
            self.send_response(200)
            self.send_header("Content-type", "application/json")
            self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()
            self.wfile.write(json.dumps({"status": "healthy", "service": "python-executor"}).encode())
        else:
            self.send_response(404)
            self.end_headers()
    
    def do_POST(self):
        if self.path == "/execute":
            try:
                content_length = int(self.headers["Content-Length"])
                post_data = self.rfile.read(content_length)
                data = json.loads(post_data.decode())
                
                code = data.get("code", "")
                input_data = data.get("input", "")
                
                # Execute Python code with input
                result = subprocess.run(
                    [sys.executable, "-c", code],
                    input=input_data,
                    capture_output=True,
                    text=True,
                    timeout=10
                )
                
                response = {
                    "stdout": result.stdout,
                    "stderr": result.stderr,
                    "returncode": result.returncode
                }
                self.send_response(200)
                
            except subprocess.TimeoutExpired:
                response = {
                    "stdout": "",
                    "stderr": "Time limit exceeded (10 seconds)",
                    "returncode": -1
                }
                self.send_response(200)
                
            except Exception as e:
                response = {
                    "stdout": "",
                    "stderr": str(e),
                    "returncode": -1
                }
                self.send_response(500)
            
            self.send_header("Content-type", "application/json")
            self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()
            self.wfile.write(json.dumps(response).encode())
        else:
            self.send_response(404)
            self.end_headers()
    
    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

port = int(os.getenv("PORT", 10000))
server = HTTPServer(("0.0.0.0", port), Handler)
print(f"Python execution server running on port {port}")
print(f"Endpoints: /health (GET), /execute (POST)")
server.serve_forever()
