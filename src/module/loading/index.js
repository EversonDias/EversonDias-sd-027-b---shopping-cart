import './loading.css';
export const loading = {

  open: () => {
    const div = document.createElement('div');
    div.classList.add('loading');
    div.innerHTML = '<p>Carregando...</p><span class="loader"></span>';
    document.querySelector('.container').appendChild(div);
  },
  close: () => {
    document.querySelector('.loading').style.display = 'none'
  }
}