export const getAddress = (cep) => {
  const endpointCepApi = 'https://cep.awesomeapi.com.br/json/';
  const endpointBrasilApi = 'https://brasilapi.com.br/api/cep/v2/';
  const promiseCepApi = fetch(endpointCepApi + cep);
  const promiseBrasilApi = fetch(endpointBrasilApi + cep);
  const promises = [promiseCepApi, promiseBrasilApi];

  const res = Promise.any(promises)
    .then((data) => data.json())
    .then((data) => `${data.address} - ${data.district} - ${data.city} - ${data.state}`);
  return res;
};

export const searchCep = async (event) => {
  event.preventDefault();
  const getCep = document.querySelector('.cep-input');
  const labelAddress = document.querySelector('.cart__address');
  const msg = 'CEP não encontrado';
  if (!Number(getCep.value)) {
    labelAddress.innerHTML = msg;
    return;
  }

  const cep = await getAddress(getCep.value);

  if (cep === 'undefined - undefined - undefined - undefined') {
    labelAddress.innerHTML = msg;
    throw new Error(msg);
  }
  labelAddress.innerHTML = cep;
};
