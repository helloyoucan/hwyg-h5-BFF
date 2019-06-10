const Router = require('koa-router')
const router = new Router()
import Schema from '@/schema/order'
import { graphql } from 'graphql';


const ROOT_PATH = 'order'
router.post('/traded',  async(ctx: any) => {
  const data = await graphql(Schema.tradedList, ctx.request.body)
  ctx.body = data.data
})


export default {
  ROOT_PATH,
  router
}