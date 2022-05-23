const btn = document.querySelectorAll('button')

const delete1 = (e) =>{
let block = e.target.closest('div')
    block.classList.add('hide')
    alert("Usunięto dane")
}

btn.forEach(element => {
    element.addEventListener('click', delete1)
});
