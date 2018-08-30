const axios = require('axios');

const CoinService = {};

CoinService.search = async (searchKey) => {
  const result = await axios.get('https://api.coinmarketcap.com/v1/ticker/')
    .then((response) => {
      if (response && response.data && Array.isArray(response.data)) {
        if (searchKey) {
          return response.data.filter(item => item.symbol.match(new RegExp(searchKey, 'i')))
            .map((item) => {
              return {
                status: 'success',
                price: item.price_usd,
                symbol: item.symbol
              };
            });
        }
        return response.data.map((item) => {
          return {
            status: 'success',
            price: item.price_usd,
            symbol: item.symbol
          };
        });
      }
      return [];
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
  return result;
};

module.exports = CoinService;
