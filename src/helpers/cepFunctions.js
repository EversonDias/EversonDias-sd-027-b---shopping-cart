export const getAddress = (cep) => {
  const endpointCepApi = 'https://cep.awesomeapi.com.br/json/';
  const endpointBrasilApi = 'https://brasilapi.com.br/api/cep/v2/';
  const promiseCepApi = fetch(endpointCepApi + cep);
  const promiseBrasilApi = fetch(endpointBrasilApi + cep);
  const promises = [promiseCepApi, promiseBrasilApi];

  const res = Promise.any(promises)
    .then((data) => data.json());
  return res;
};

export const searchCep = async (event) => {
  event.preventDefault();
  const getCep = document.querySelector('.cep-input');
  const labelAddress = document.querySelector('.cart__address');
  const cep = await getAddress(getCep.value);

  if (Object.keys(cep).includes('code')) {
    labelAddress.innerHTML = 'CEP não encontrado';
    throw new Error(cep.message);
  }
  const message = `${cep.address} - ${cep.district} - ${cep.city} - ${cep.state}`;
  labelAddress.innerHTML = message;
};
