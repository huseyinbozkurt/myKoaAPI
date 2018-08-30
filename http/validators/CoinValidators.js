const Joi = require('joi');

const CoinValidators = {};

CoinValidators.searchValidator = async (ctx, next) => {
  const schema = Joi.object().keys({
    search: Joi.string().min(1).max(5).optional()
  });
  const result = Joi.validate(ctx.query, schema);
  if (result.error) {
    ctx.throw(406);
  }
  await next();
};


module.exports = CoinValidators;
