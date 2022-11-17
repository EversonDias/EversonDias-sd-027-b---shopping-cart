import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  it('fetchProduct é uma função', () => {
    expect(typeof fetchProduct).toBe('function');
  });

  it('ao chamar a função fetchProduct com o argumento do produto "MLB1405519561", a função fetch utiliza o endpoint', async () => {
    await fetchProduct("MLB1405519561");
    const endpoint = "https://api.mercadolibre.com/items/MLB1405519561";
    expect(fetch).toHaveBeenCalledWith(endpoint)
  })

  it('o retorno da função fetchProduct com o argumento do produto "MLB1405519561" é uma estrutura de dados igual ao objeto produto que já está importado no arquivo.', async () => {
    expect(await fetchProduct("MLB1405519561")).toEqual(product);
  })

  it('ao chamar a função fetchProduct sem argumento, retorna um erro com a mensagem: "ID não informado"', () => {
     expect(fetchProduct()).rejects.toThrow(/^ID não informado$/);
  })
});
