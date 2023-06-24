var Order = require('../src/order');

function createRestaurant(name, menus=['breakfast', 'lunch', 'dinner']) {
  let restaurant = { 'name': name, 'menus': {} }

  for (menu of menus) {
    restaurant.menus[menu] = [];
  }

  return restaurant;
}

function menuHasItem(menu, menuItemName) {
  for (let item of menu) {
    if (item.name == menuItemName) {
      return true;
    }
  }

  return false;
}

function addMenuItem(restaruant, menuItem) {
  let menu = restaruant.menus[menuItem.type]
  if (!menuHasItem(menu, menuItem.name)) {
    restaruant.menus[menuItem.type].push(menuItem);
  }
}

function removeMenuItem(restaruant, menuItemName, menuName) {
  let menu = restaruant.menus[menuName]

  if (menuHasItem(menu, menuItemName)) {
    let newMenu = [];

    for (let item of menu) {
      if (item.name != menuItemName) {
        newMenu.push(item);
      }
    }

    menu.splice(0, menu.length);

    for (let item of newMenu) {
      menu.push(item);
    }

    return `No one is eating our ${menuItemName} - it has been removed from the ${menuName} menu!`;
  } else {
    return `Sorry, we don't sell ${menuItemName}, try adding a new recipe!`;
  }
}

function checkForFood(restaruant, menuItem) {
  let menu = restaruant.menus[menuItem.type];
  if (menuHasItem(menu, menuItem.name)) {
    return `Yes, we're serving ${menuItem.name} today!`;
  } else {
    return `Sorry, we aren't serving ${menuItem.name} today.`;
  }
}

module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem,
  checkForFood
}