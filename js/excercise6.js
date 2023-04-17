document.getElementById('buscar').addEventListener('click', () => {

    let parrafo = '';
    let palBusc = '';
    
    parrafo = document.getElementById('texto').value;
    palBusc = document.getElementById('palBus').value;

    if(parrafo==''||palBusc==''){
        document.getElementById('output').innerHTML = '<font color="red">no puede dejar vacio la cadena a buscar o el parrafo</font>';
    }else{
        let parrafo2 = parrafo.replaceAll(palBusc, '<font color="red">' + palBusc + '</font>');
        document.getElementById('output').innerHTML = parrafo2;
    }
});