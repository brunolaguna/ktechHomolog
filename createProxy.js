const { createProxyMiddleware } = require('http-proxy-middleware');

// Proxy was created, because we were receiving access danied by CORS in production host.
const sae1_apiProxy = createProxyMiddleware({
  target: 'https://api.sae1.pure.cloud',
  changeOrigin: true,
  pathRewrite: {
    '^/apiSae1': ''  // Altere '/api' para o caminho desejado para o proxy
  },
  secure: true  // Define como 'true' se a API for acessada via HTTPS
});

module.exports = { sae1_apiProxy }