const { createProxyMiddleware } = require('http-proxy-middleware')
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://39.104.136.10:23500/',
      changeOrigin: true,
    })
  )
}
