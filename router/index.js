const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();
const cors = require('koa-cors');
const wechatRouters = require('./wechatRouters');
const ebkRouters = require('./ebkRouters');
wechatRouters(router);
ebkRouters(router);
app.use(cors());
app
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(3000, () => {
        console.log('server is listening on port 3000');
    });
