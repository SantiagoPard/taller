document.getElementById('accion').addEventListener('click',()=>{
    document.getElementById('divEnt2').classList.remove('hidden');
    let texto = '';
    texto = document.getElementById('entrada').value;
    if(texto == ''){
        document.getElementById('entrada2')
        .innerHTML = '<font color="red">'+'no puede dejar el input vacio'+'</font>';
    }
    if(texto != ''){
        document.getElementById('entrada2')
        .innerHTML = texto.length+' caracteres';
    }
})