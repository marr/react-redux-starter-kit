import Router from 'koa-router'
import counterApi from './counter'

const counter = new Router()

counter.get('/random-increment', (ctx, next) => {
  ctx.body = {
    increment: Math.floor((Math.random() * 25) + 1)
  }
})

export default counter
