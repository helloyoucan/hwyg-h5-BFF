import { graphql } from "graphql";
const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
const bodyParser = require('./bodyparser')
import schema from './schema'
import goodsSchema from './goodsSchema'
const PORT = 3000
//Parse post content as text(将post内容解析为文本)
app.use(bodyParser({
    enableTypes: ['json','form','text']
  }));
const ql = `
query ItemQuery{
    item(id:1234,aa:213){
     id
    title
    price
    pic
    }
  }
`
router.post('/graphql',async (ctx:any)=>{
    console.log(ctx.request.body)
    //GraphQL executor(GraphQL执行人)
    // graphql(schema,ctx.request.body)
    // graphql(goodsSchema,ctx.request.body)
    graphql(goodsSchema,ql)
    .then((result)=>{
        ctx.body = JSON.stringify(result, null, 2)
    })
})


router.get('/', async (ctx: any) => {
    ctx.body = 'Hello World!';
});
app.use(router.routes());

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}/graphql`);
});
