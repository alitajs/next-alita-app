const Koa = require('koa');
const compress = require('koa-compress');
const mount = require('koa-mount');
const router = require('@koa/router')();
const { join, extname } = require('path');
const { parseCookie, parseNavLang } = require('./serverHelper');
const koaBody = require('koa-body');
const root = join(__dirname, 'dist');

const app = new Koa();
app.use(
  koaBody({
    jsonLimit: '1kb',
  }),
);

app.use(
  compress({
    threshold: 2048,
    gzip: {
      flush: require('zlib').constants.Z_SYNC_FLUSH,
    },
    deflate: {
      flush: require('zlib').constants.Z_SYNC_FLUSH,
    },
    br: false, // 禁用br解决https gzip不生效加载缓慢问题
  }),
);

router
  .post('/api/list', (ctx) => {
    const dataSource = [
      {
        id: 1,
        title: 'Ant Design Title 1',
      },
      {
        id: 2,
        title: 'Ant Design Title 2',
      },
      {
        id: 3,
        title: 'Ant Design Title 3',
      },
      {
        id: 4,
        title: 'Ant Design Title 4',
      },
      {
        id: 5,
        title: 'Ant Design Title 5',
      },
      {
        id: 6,
        title: 'Ant Design Title 6',
      },
      {
        id: 7,
        title: 'Ant Design Title 7',
      },
      {
        id: 8,
        title: 'Ant Design Title 8',
      },
      {
        id: 9,
        title: 'Ant Design Title 9',
      },
      {
        id: 10,
        title: 'Ant Design Title 10',
      },
      {
        id: 11,
        title: 'Ant Design Title 11',
      },
      {
        id: 12,
        title: 'Ant Design Title 12',
      },
      {
        id: 13,
        title: 'Ant Design Title 13',
      },
      {
        id: 14,
        title: 'Ant Design Title 14',
      },
      {
        id: 15,
        title: 'Ant Design Title 15',
      },
      {
        id: 16,
        title: 'Ant Design Title 16',
      },
      {
        id: 17,
        title: 'Ant Design Title 17',
      },
      {
        id: 18,
        title: 'Ant Design Title 18',
      },
      {
        id: 19,
        title: 'Ant Design Title 19',
      },
      {
        id: 20,
        title: 'Ant Design Title 20',
      },
    ];
    const { pageSize, offset } = ctx.request.body;

    ctx.body = {
      total: dataSource.length,
      data: dataSource.slice(offset, offset + pageSize),
    };
  })
  .post('/api/hello', (ctx) => {
    ctx.body = {
      text: 'Alita',
    };
  });

app.use(router.routes());

let render;
app.use(async (ctx, next) => {
  /**
   *  扩展global对象
   *
   *  这里是在服务端处理好cookie，
   *  会把所有cookie处理成{}形式
   *  赋值到global上面，方便客户端使用
   *
   *  同时获取浏览器的默认语言，处理好
   */
  global._cookies = parseCookie(ctx);
  global._navigatorLang = parseNavLang(ctx);

  const ext = extname(ctx.request.path);

  // 符合要求的路由才进行服务端渲染，否则走静态文件逻辑
  if (!ext && !ctx.request.path.includes('/api')) {
    if (!render) {
      render = require('./dist/umi.server');
    }
    // 这里默认是字符串渲染
    ctx.type = 'text/html';
    ctx.status = 200;
    const { html, error } = await render({
      path: ctx.request.url,
    });
    if (error) {
      console.log('----------------服务端报错-------------------', error);
      ctx.throw(500, error);
    }
    ctx.body = html;
  } else {
    await next();
  }
});

/**
 *  注意这里的静态目录设置，需要和umi打包出来的目录是同一个
 *  这里最好是用nginx配置静态目录，如果是用cdn方式部署，这里可以忽略
 *
 */
app.use(mount('/dist', require('koa-static')(root)));

app.listen(7001);
console.log('http://localhost:7001');

module.exports = app.callback();
