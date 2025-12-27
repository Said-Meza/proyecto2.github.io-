function hiddenmenu() {
    
    document.getElementById("checkbox").checked = false;

}

const btn = document.querySelector('.figure_arrows');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    btn.classList.add('show');
  } else {
    btn.classList.remove('show');
  }
});