const Router = require('koa-router')
const router = new Router()
import * as BrannersServise from '../../service/brannersService'


const ROOT_PATH = 'branners'
router.get('/',  (ctx: any) => {
  return BrannersServise
    .getBrannerList()
    .then((res: any) => {
      ctx.body = res
    })
})


export default {
  ROOT_PATH,
  router
}