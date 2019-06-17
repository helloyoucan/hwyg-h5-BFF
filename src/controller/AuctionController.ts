const Router = require('koa-router')
const router = new Router()
import Schema from '@/schema/auction/index'
import { graphql } from 'graphql';
const ROOT_PATH = 'auction'

router.post('/seal/list', async (ctx: any) => {
  const data = await graphql(Schema.sealAuctionList, ctx.request.body)
  ctx.body = data.data
})
router.post('/scene/list', async (ctx: any) => {
  const data = await graphql(Schema.sceneList, ctx.request.body)
  ctx.body = data.data
})
export default {
  ROOT_PATH,
  router
}