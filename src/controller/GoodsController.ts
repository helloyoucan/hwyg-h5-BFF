const Router = require('koa-router')
const router = new Router()
import Schema from '../schema/goods'
import { graphql } from 'graphql';
const ROOT_PATH = 'goods'

router.post('/list', async (ctx: any) => {
  const data = await graphql(Schema.list, ctx.request.body)
  ctx.body = data.data
})


export default {
  ROOT_PATH,
  router
}