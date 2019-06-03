const Router = require('koa-router');
const fs = require('fs')
const path = require('path')
const router = new Router()
const files = fs.readdirSync(__dirname)
files.filter((file:string) => file.search(/^[^\.].*\.ts$/))
.forEach((file:string) => {
    const file_entity = require(path.join(__dirname,file)).default;
    router.use(`/${file_entity.ROOT_PATH}`, file_entity.router.routes())
})

export default router