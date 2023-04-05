document.getElementById('accion').addEventListener('click',()=>{
    let texto = '';
    texto = document.getElementById('entrada').value;
    document.getElementById('entrada2')
    .innerHTML = texto.length+' caracteres';
})