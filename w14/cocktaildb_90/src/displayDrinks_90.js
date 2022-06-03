import get from './getElement.js';
const displayDrinks = async ({drinks}) => {
  console.log('drinks', drinks);
  const title = get('.title');
  const section = get('.section-center');
  // console.log('title', title);
  // console.log('section', section);
  if(!drinks) {
    title.textContent = 'Sorry no drinks matched your search';
    section.innerHTML = null;
    return;
  }
  return section;
  }
  
  export default displayDrinks;