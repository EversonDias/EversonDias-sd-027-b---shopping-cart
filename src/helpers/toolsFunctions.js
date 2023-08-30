import { saveCartID, getSavedCartIDs, handleTotalPrice } from './cartFunctions';
import { fetchProduct } from './fetchFunctions';
import { createCartProductElement } from './shopFunctions';

const tools = {
  createObject: (data, key) => (
    {
      [key[0]]: data[key[0]],
      [key[1]]: data[key[1]],
      [key[2]]: data[key[2]],
      [key[3]]: data[key[3]],
    }
  ),
  addCart: (item) => {
    const itemId = item.innerHTML;
    saveCartID(itemId);
    fetchProduct(itemId)
      .then((data) => {
        handleTotalPrice(data.price, 'add');
        document.querySelector('.cart__products')
          .appendChild(
            createCartProductElement(
              tools.createObject(data, ['id', 'title', 'price', 'pictures']),
            ),
          );
      });
  },
  getSavedAndCreate: () => {
    const saveCard = getSavedCartIDs();
    const CartProducts = document.querySelector('.cart__products');
    saveCard.forEach((item) => {
      fetchProduct(item)
        .then((data) => {
          handleTotalPrice(data.price, 'add');
          CartProducts.appendChild(
            createCartProductElement(
              tools.createObject(data, ['id', 'title', 'price', 'pictures']),
            ),
          );
        });
    });
  },
};

export default tools;
