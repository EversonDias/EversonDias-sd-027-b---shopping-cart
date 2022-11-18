import './loading.css';

const loading = {
  open: () => {
    const div = document.createElement('div');
    div.classList.add('loader');
    div.innerHTML = '<p class="loading">Carregando...</p><span class="iconLoader"></span>';
    document.querySelector('.container').appendChild(div);
  },
  close: () => {
    document.querySelector('.loader').style.display = 'none';
  },
};

export default loading;
