import './loading.css';

const loading = {
  open: () => {
    const div = document.createElement('div');
    div.classList.add('loader');
    const text = '<p class="loading">carregando...</p><span class="iconLoader"></span>';
    div.innerHTML = text;
    document.querySelector('.container').appendChild(div);
  },
  close: () => {
    document.querySelector('.loader').remove();
  },
};

export default loading;
