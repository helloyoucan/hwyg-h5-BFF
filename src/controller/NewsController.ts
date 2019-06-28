const Router = require('koa-router')
const router = new Router()
import Schema from '@/schema/news/List'
import { graphql } from 'graphql';


const ROOT_PATH = 'news'
router.post('/list',  async(ctx: any) => {
  console.log(ctx)
  const data = await graphql(Schema.list, ctx.request.body)
  ctx.body = data.data
})


export default {
  ROOT_PATH,
  router
}