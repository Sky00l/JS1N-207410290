import fetchRrinks from "./fetchDrinks_90.js";
const presentDrinks = async (url) => {
  const data = await fetchRrinks(url);
  console.log('drinks data', data);
  // console.log('presentDrinks');
}

export default presentDrinks;