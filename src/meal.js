function nameMenuItem(name) {
  return `Delicious ${name}`;
}

function createMenuItem(itemName, price, type) {
  return { 'name': itemName, 'price': price, 'type': type };
}

function addIngredients(item, array) {
  if (!array.includes(item)) {
    array.push(item);
  }
}

function formatPrice(nonNormalizedPrice) {
  return '$' + nonNormalizedPrice;
}

function decreasePrice(menuItem) {
  return menuItem * .9;
}

function createRecipe(menuItem, ingredients, menuItemType) {
  return { 'title': menuItem, 'ingredients': ingredients, 'type': menuItemType };
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


