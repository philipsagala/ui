const baseUrl = 'http://localhost:7001' // Admin UI base URL
const apiBaseUrl = process.env.API_URL || 'http://localhost:3000'

const config = {
  locale: 'en-US', // en-US, zh-CN
  url: baseUrl,
  ajaxUploadUrl: `${apiBaseUrl}files`,
  debug: {
    mock: false, // enable mock
    http: true // http request log
  },
  api: apiBaseUrl,
  grid: {
    limit: 10
  }
  // locale: 'en', //en
  // api: 'http://192.168.1.108:3333/admin/api'
}

global.config = config

export default config
