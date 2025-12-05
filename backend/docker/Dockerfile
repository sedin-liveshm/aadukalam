FROM python:3.9-slim

WORKDIR /app

COPY python-server.py .

# Expose port (Render sets PORT env var, default 10000)
EXPOSE 10000

CMD ["python", "python-server.py"]
