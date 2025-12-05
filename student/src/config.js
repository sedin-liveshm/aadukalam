export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

export const CODE_EXECUTION_URLS = {
  python: import.meta.env.VITE_PYTHON_URL || 'http://localhost:5001',
  cpp: import.meta.env.VITE_CPP_URL || 'http://localhost:5002',
  c: import.meta.env.VITE_CPP_URL || 'http://localhost:5002',
  java: import.meta.env.VITE_JAVA_URL || 'http://localhost:5003',
};

export const config = {
  apiUrl: API_URL,
  codeExecution: CODE_EXECUTION_URLS,
  environment: import.meta.env.MODE || 'development',
  isProd: import.meta.env.PROD || false,
};

export default config;
