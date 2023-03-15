import { getRandomCocktail, renderCocktails, getCocktailMarkup } from "./renderCocktails";

export function viewportWidthCheck({ tablet, desktop }) {
    const currentVpWidth = document.body.clientWidth;
    if (currentVpWidth < tablet) return 3;
    if (currentVpWidth >= tablet && currentVpWidth < desktop) return 6;
    if (currentVpWidth >= desktop) return 9;
};

export function accumulateCocktails(setSize) {
    const cocktailsSet = [];
    for (let i = 0; i < setSize; i++) {
        cocktailsSet.push(getRandomCocktail());
    };
    return cocktailsSet;
};

export function pourCocktails(cocktailSetSize) {
    Promise.all(cocktailSetSize).then(data => renderCocktails(data.map(getCocktailMarkup).join("")));
};