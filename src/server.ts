import { graphql } from "graphql";
const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
// const router = new Router();
const bodyParser = require('./utils/bodyparser')
import router from './controller/index'
const PORT = 9090
//Parse post content as text(将post内容解析为文本)
app.use(bodyParser({
    enableTypes: ['json', 'form', 'text']
}));
app.use(router.routes());

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
