// copy.js
function copyToClipboard(element) {
    const codeBlock = element.parentElement.querySelector('code');
    const text = codeBlock.textContent;
    navigator.clipboard.writeText(text).then(() => {
      element.innerHTML = '<i class="fas fa-check"></i>';
      element.classList.add('copied');
      setTimeout(() => {
        element.innerHTML = '<i class="far fa-copy"></i>';
        element.classList.remove('copied');
      }, 2000);
    });
  }
  