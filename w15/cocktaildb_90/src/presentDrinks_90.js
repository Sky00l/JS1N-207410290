import fetchDrinks from "./fetchDrinks_90.js";
import displayDrinks from "./displayDrinks_90.js";

const presentDrinks = async (url) => {
  const data = await fetchDrinks(url);
  console.log('drinks data', data);
  const section = await displayDrinks(data);
  
  // console.log('presentDrinks');
}

export default presentDrinks;