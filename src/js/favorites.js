'use strict'

const favoritesList = document.querySelector('.fav-cocktails__list');
const loadCocktailsBtn = document.querySelector('.loadCocktails');

// loadCocktailsBtn added to demonstrate render by click for header menu
loadCocktailsBtn.addEventListener('click', updateSize);
favoritesList.addEventListener('click', getCocktailId);

//unfinished
//function should get element ID and fetch data for modal window
//currently shows clicked element id
function getCocktailId(event){
    // console.log(event)
    console.log(event.target.attributes.drinkid.value);


}

//function watches viewport size and load limited for current viewport amount of elements 
//debounce for listener will be added after push
window.addEventListener("resize", updateSize);

function updateSize(){
    let windowWidth = window.innerWidth;
    if(windowWidth < 767){
        console.log('300px - 768px');
        favoritesMarkup(0, 3);
    } else if(windowWidth < 1280){
        console.log('768px - 1023px');
        favoritesMarkup(0, 6);
    } else {
        console.log('1280px');
        favoritesMarkup(0, 9);
    }
}

//gets objects from storage and renders elements
//markup adds "drinkId" attribute with element id for modal window fetch
//"start", "end" arguments for pagination
function favoritesMarkup(start, end){
    const cocktailsTest = JSON.parse(localStorage.getItem("coctailsTest"));
    let arr = cocktailsTest.slice(start, end);
    console.log(cocktailsTest);

    favoritesList.innerHTML = arr.map(e=>{
        return `<li class="fav-cocktails__item">
                    <img src="${e.strDrinkThumb}" class="fav-cocktails__img" alt=${e.strDrink}>
                    <h3 class="fav-cocktails__item-title">${e.strDrink}</h3>
                    <div class="fav-cocktails__buttons">
                        <button type="button" class="fav-cocktails__learn-more-btn" drinkId=${e.idDrink}>Learn more</button>
                        <button type="button" class="fav-cocktails__remove-btn">Remove</button>
                    </div>
                </li>`;
    }).join('');
}