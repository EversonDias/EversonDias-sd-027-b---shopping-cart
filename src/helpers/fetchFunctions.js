export const fetchProduct = async (props) => {
  if (props === undefined) {
    throw new Error('ID não informado');
  }
  const endpoint = 'https://api.mercadolibre.com/items/';
  const product = await fetch(endpoint + props).then((data) => data.json());
  return product;
};

export const fetchProductsList = async (props) => {
  if (props === undefined) {
    throw new Error('Termo de busca não informado');
  }
  const listProducts = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${props}`).then((data) => data.json());
  return listProducts.results;
};
