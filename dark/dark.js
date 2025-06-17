const btn = document.getElementById('toggle')

btn.addEventListener('click',  () => {
    document.body.classList.toggle('dark')

    if (document.body.classList.constains('dark')) {
      btn.innerText = 'Light Mode';
    }else{
      btn.innerText = 'Dark Mode'
    }
});