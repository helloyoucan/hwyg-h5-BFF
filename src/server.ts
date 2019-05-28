import { graphql } from "graphql";

const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
const bodyParser = require('koa-bodyparser');
import schema from './schema'

const PORT = 3000
//Parse post content as text(将post内容解析为文本)
// app.use(bodyParser.text({type:'application/graphql'}));
app.use(bodyParser());
// app.use(bodyParser({
//     extendTypes: {
//       text: ['application/graphql'] // will parse application/x-javascript type body as a JSON string
//     }
//   }));

router.post('/graphql',async (ctx:any)=>{
    console.log(ctx.request.body)
    //GraphQL executor(GraphQL执行人)
    graphql(schema,ctx.request.body)
    .then((result)=>{
        ctx.body = JSON.stringify(result, null, 2)
    })
})


router.get('/', async (ctx: any) => {
    ctx.body = 'Hello World!';
});
app.use(router.routes());

app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
    console.log(`Server running on port ${PORT}`);
});
