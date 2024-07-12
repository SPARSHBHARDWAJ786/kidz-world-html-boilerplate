document.addEventListener("DOMContentLoaded", function() {
    let cartCount = 0;
    const cart = {};
    const cartValueElement = document.getElementById('cart-value');
  
    const bookPrices = {
      book1: 7.49,
      book2: 4.59,
      book3: 6.80,
      book4: 10.00,
      book5: 7.29,
      book6: 4.99
    };
  
    const gamePrices = {
      game1: 17.49,
      game2: 19.99,
      game3: 20.99,
      game4: 19.49
    };
  
    const craftPrices = {
      craft1: 12.49,
      craft2: 19.99,
      craft3: 15.99,
      craft4: 18.49
    };
  
    const updateCart = (itemId, itemName, itemPrice) => {
      if (!cart[itemId]) {
        cart[itemId] = { name: itemName, price: itemPrice, quantity: 0 };
      }
      cart[itemId].quantity += 1;
      cartCount += 1;
      cartValueElement.textContent = cartCount;
    };
  
    document.querySelectorAll('.button').forEach(button => {
      button.addEventListener('click', function() {
        const itemId = this.id;
        if (itemId.startsWith('book')) {
          updateCart(itemId, this.parentElement.parentElement.querySelector('h3').textContent, bookPrices[itemId]);
        } else if (itemId.startsWith('game')) {
          updateCart(itemId, this.parentElement.parentElement.querySelector('h3').textContent, gamePrices[itemId]);
        } else if (itemId.startsWith('craft')) {
          updateCart(itemId, this.parentElement.parentElement.querySelector('h3').textContent, craftPrices[itemId]);
        }
      });
    });
  
    document.getElementById('cart').addEventListener('click', function() {
      let totalAmount = 0;
      console.log("Order Details:");
      for (let itemId in cart) {
        const item = cart[itemId];
        console.log(`${item.name} - Quantity: ${item.quantity} - Price per item: $${item.price.toFixed(2)}`);
        totalAmount += item.price * item.quantity;
      }
      console.log(`Total Amount: $${totalAmount.toFixed(2)}`);
    });
  });
  