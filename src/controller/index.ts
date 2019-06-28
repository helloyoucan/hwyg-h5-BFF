const Router = require('koa-router');
const fs = require('fs')
const path = require('path')
const router = new Router()
const files = fs.readdirSync(__dirname)
const context = require.context('/', true, /\.ts$/)
// files.filter((file:string) => file.search(/^[^\.].*\.ts$/))
files
    .filter((file: string) => file.search(/[index.ts]/))
    .forEach((file: string) => {
        // const file_entity = require(path.join(__dirname, file)).default;
        const module = context(path.join(__dirname, file));
        const file_entity = module.default;
        console.log(module)
        console.log(file_entity)
        router.use(`/${file_entity.ROOT_PATH}`, file_entity.router.routes())
    })
router.get('/', (ctx: any) => {
    console.log(router)
    ctx.body = 'hello world'
})
export default router

