import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import tools from './helpers/toolsFunctions';
import loading from './module/loading';
import popUp from './module/popUp';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);

loading.open();

try {
  const fullProductList = await fetchProductsList('computador');
  loading.close();
  tools.getSavedAndCreate();
  fullProductList.forEach((data) => {
    const products = document.querySelector('.products');
    products.appendChild(
      createProductElement(
        tools.createObject(data, ['id', 'title', 'price', 'thumbnail']),
      ),
    );
  });
} catch (error) {
  loading.close();
  popUp('Algum erro ocorreu, recarregue a página e tente novamente');
}

const btnAddCart = document.getElementsByClassName('product__add');
for (let index = 0; index < btnAddCart.length; index += 1) {
  const productId = document.getElementsByClassName('product__id');
  btnAddCart[index].addEventListener('click', () => tools.addCart(productId[index]));
}

const getCep = document.querySelector('.cep-input');
const btn = document.querySelector('.cep-button');
btn.disabled = true;
const number = 8;
getCep.addEventListener('input', (litter) => {
  if (litter.target.value.length === number) {
    btn.disabled = false;
  } else btn.disabled = true;
});
