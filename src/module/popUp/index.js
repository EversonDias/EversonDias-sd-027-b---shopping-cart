import './popup.css';

function popUp(text) {
  const container = document.querySelector('.container');
  const div = document.createElement('div');
  div.classList.add('error');
  div.innerHTML = `<p>${text}</p>`;
  container.appendChild(div);
}

export default popUp;
