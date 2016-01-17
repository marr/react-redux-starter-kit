import Router from 'koa-router'
import counterApi from './counter'

const api = new Router({
  prefix: '/api'
})

api.use('/counter', counterApi.routes())

export default api
