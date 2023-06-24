function takeOrder(order, orders) {
  if (orders.length < 3) {
    orders.push(order);
  }
}

function refundOrder(orderNumber, orders) {
  let newOrderArray = [];

  for (let order of orders) {
    if (orderNumber != order.orderNumber) {
      newOrderArray.push(order);
    }
  }

  orders.splice(0, orders.length)
  
  for (order of newOrderArray) {
    orders.push(order);
  }
}

function listItems(orders) {
  let ordersString = '';

  for (let i = 0; i < orders.length; i++) {
    if (i + 1 != orders.length) {
      ordersString += orders[i].item + ', ';
    } else {
      ordersString += orders[i].item
    }
  }

  return ordersString
}

function searchOrder(orders, item) {
  for (order of orders) {
    if (order.item == item) {
      return true;
    }
  }
  return false;
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}