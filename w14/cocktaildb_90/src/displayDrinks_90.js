import get from "./getElement.js";

const displayDrinks = async ({drinks}) => {
  console.log('drinks', drinks);
  const title = get('.title');
  const section = get('.section-center');
  console.log('title', title);
  console.log('section', section);
  if(!drinks) {
    title.textContent = 'Sorry no drinks matched your search';
    section.innerHTML = null;
    
  }
  const newDrinks = drinks.map( (drink) => {
    const { isDrink:id, strDrink:name, strDrinkThumb:image, } = drink;
    return`
    <a href="drink_90.html">
            <article class="cocktail" data-id="${id}">
              <img src="${image}" alt="cocktail">
              <h3>${name}</h3>
            </article>
          </a>
          `;
  }).join('');
  //  console.log('newDrinks', newDrinks);
  title.textContent = '';
  section.innerHTML = newDrinks;
  
  };
  
  export default displayDrinks;