const router = require('koa-router')();
const CoinService = require('../../services/CoinService');

router.get('/coin', async (ctx, next) => {
  await CoinService.search(ctx.query.search)
    .then((response) => {
      if (!Array.isArray(response) || response.length === 0) {
        ctx.throw(404);
      }
      ctx.response.body = response;
    });
  await next();
});


module.exports = router.routes();
