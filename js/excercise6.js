document.getElementById('buscar').addEventListener('click', () => {

    let parrafo = '';
    let palBusc = '';
    
    parrafo = document.getElementById('texto').value;
    palBusc = document.getElementById('palBus').value;


    let parrafo2 = parrafo.replaceAll(palBusc, '<font color="red">' + palBusc + '</font>');



    document.getElementById('output').innerHTML = parrafo2;
});