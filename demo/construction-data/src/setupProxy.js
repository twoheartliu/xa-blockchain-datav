const { createProxyMiddleware } = require('http-proxy-middleware')
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://111.63.97.237:23510',
      changeOrigin: true,
    })
  )
}
