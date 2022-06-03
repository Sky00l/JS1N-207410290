import presentDrinks from "./src/presentDrinks_90.js";
const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=lto' ;

window,addEventListener('DOMContentLoaded', () => {
   presentDrinks(URL);
  });