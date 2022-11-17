import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList, fetchProduct } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import loading from './module/loading';
import popUp from './module/popUp';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);

loading.open();

try {
  const fullProductList = await fetchProductsList('computador');

  fullProductList.forEach((data) => {
    document.querySelector('.products')
      .appendChild(
        createProductElement(
          {
            id: data.id,
            title: data.title,
            thumbnail: data.thumbnail,
            price: data.price,
          },
        ),
      );
  });
} catch (error) {
  loading.close();
  popUp('Algum erro ocorreu, recarregue a página e tente novamente');
}

loading.close();
