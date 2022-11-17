import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';
import { Loader } from './tools/loader';

document.querySelector('.cep-button').addEventListener('click', searchCep);

Loader.open()

const fullProductList = await fetchProductsList('computador');

Loader.close()

fullProductList.forEach(data => {
  document.querySelector('.products')
    .appendChild(
      createProductElement(
        {
          id: data.id,
          title: data.title,
          thumbnail: data.thumbnail,
          price: data.price,
        }
      ));
})

