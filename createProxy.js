const { createProxyMiddleware } = require('http-proxy-middleware');

// Proxy was created, because we were receiving access danied by CORS in production host.
const apiProxy = createProxyMiddleware({
    target: 'https://api.mypurecloud.com',
    changeOrigin: true,
    pathRewrite: {
      '^/api': ''  // Altere '/api' para o caminho desejado para o proxy
    },
    secure: true  // Define como 'true' se a API for acessada via HTTPS
});

module.exports = { apiProxy }