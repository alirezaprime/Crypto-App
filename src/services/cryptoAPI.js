const BASE_URL = "https://api.coingecko.com/api/v3";
const API_KEY = "CG-GxtEHPJSLkAFWbbbEtFrdedw";

const getCoinList = (page, currency) => {
  return `${BASE_URL}/coins/markets?vs_currency=${currency}&ids=bitcoin&category=layer-1&order=market_cap_desc&per_page=20&page=${page}&locale=en&x_cg_demo_api_key=${API_KEY}`;
};
export { getCoinList };
