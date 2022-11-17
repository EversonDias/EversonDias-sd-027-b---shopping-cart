export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = async (props) => {
  if (props === undefined) {
    throw new Error('Termo de busca não informado'); ;
  }
  const listProducts = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${props}`).then(data => data.json());
  
  return listProducts.results;
};
