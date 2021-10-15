let axios = require('axios').default;

const getCoinPrice = (currency) => {
  let options = {
    method: 'POST',
    url: 'https://coinbasestefan-skliarovv1.p.rapidapi.com/getSellPrice',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'x-rapidapi-host': 'Coinbasestefan-skliarovV1.p.rapidapi.com',
      'x-rapidapi-key': 'SIGN-UP-FOR-KEY',
    },
    data: { currencyPair: '<REQUIRED>', accessToken: 'Authorization: Bearer ' },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};
