import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import { loading } from './module/loading';
import './style.css';


document.querySelector('.cep-button').addEventListener('click', searchCep);

loading.open()

const fullProductList = await fetchProductsList('computador');

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

loading.close()
