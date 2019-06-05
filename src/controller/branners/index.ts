const Router = require('koa-router')
const router = new Router()
import DataSchema from '../../schema/branners'
import { graphql } from 'graphql';


const ROOT_PATH = 'branners'
router.post('/',  async(ctx: any) => {
  const data = await graphql(DataSchema, ctx.request.body)
  ctx.body = data
})


export default {
  ROOT_PATH,
  router
}