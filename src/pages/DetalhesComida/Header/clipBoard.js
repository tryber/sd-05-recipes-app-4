import Clipboard from 'clipboard-copy';

const clipBoard = () => {
  document.getElementById('btn-share-id').innerHTML = 'Link copiado!';
  return Clipboard(window.location.href);
};

export default clipBoard;
