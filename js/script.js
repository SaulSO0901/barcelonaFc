const switchButton = document.getElementById('switch');
switchButton.addEventListener('click',()=>{
    document.body.classList.toggle('o');
    document.body.classList.toggle('dark');
    switchButton.classList.toggle('active')
})