import { saveCartID } from './cartFunctions';
import { fetchProduct } from './fetchFunctions';
import { createCartProductElement } from './shopFunctions';

const tools = {
  addCart: async (item) => {
    const itemId = item.path[1].firstChild.innerHTML;
    saveCartID(itemId);
    fetchProduct(itemId)
      .then((data) => {
        document.querySelector('.cart__products').appendChild(
          createCartProductElement(
            {
              id: data.id,
              title: data.title,
              pictures: data.pictures,
              price: data.price,
            },
          ),
        );
      });
  },
};

export default tools;
