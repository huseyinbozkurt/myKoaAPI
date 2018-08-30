const router = require('koa-router')();
const CoinService = require('../../services/CoinService');
const CoinValidators = require('../validators/CoinValidators');

router.get('/coin', CoinValidators.searchValidator, async (ctx, next) => {
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
