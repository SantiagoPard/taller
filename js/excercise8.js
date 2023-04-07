document.getElementById('accion').addEventListener('click', () => {
    let numeros = '';

    numeros = document.getElementById('numeros').value;

    let array = numeros.split(',');
    let cont = array.length - 1;
    let html = '';

    for (let i = 0; i <= cont; i++) {

        numero = array[i];
        let match = numero.match(/[a-z]/);

        if (Boolean(match) == true) {
            validarTexYNoEnt(numero);
            html += '<li>' + validarTexYNoEnt(numero) + '</li>';
        } else if (Boolean(match) == false) {
            let numero1 = parseFloat(numero);
            html += '<li>' + parImpar(numero1) + '</li>';
        }
    }
    document.getElementById('resultado').innerHTML = html;

})

function parImpar(numero) {

    if (numero % 2 == 0 && Number.isInteger(numero) == true) {
        return numero + '<font color="blue"> es numero par </font>';
    } else if (numero % 2 != 0 && Number.isInteger(numero) == true) {
        return numero + '<font color="green"> es numero impar </font>';
    }else{
        return numero + '<font color="red"> no es un numero entero</font>';
    }

}
function validarTexYNoEnt(numero) {
    return numero + '<font color="red"> no es un numero entero</font>';
}