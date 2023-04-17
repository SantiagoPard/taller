document.getElementById('accion').addEventListener('click', () => {
    let numeros = '';

    numeros = document.getElementById('numeros').value;
    if (numeros == '') {
        document.getElementById('resultado').innerHTML = '<font color="red">no puede dejar el campo vacio</font>';
    } else {
        let array = numeros.split(',');
        let cont = array.length - 1;
        let html = '';
        let validar = 0;

        for (let i = 0; i <= cont; i++) {
            let numero1 = '';
            numero1 = array[i];
            let match = numero1.match(/[a-z]/);

            if (Boolean(match) == true) {
                validar = 1;
            }
            let numeroVal = parseFloat(numero1);
            if (Number.isInteger(numeroVal) == false) {
                validar = validar + 1;
            }
        }
        for (let j = 0; j <= cont; j++) {

            if (validar > 0) {

                let numero = '';
                numero = array[j];
                let match = numero.match(/[a-z]/);

                if (Boolean(match) == true) {

                    validarTexYNoEnt(numero);
                    html += '<div>' + validarTexYNoEnt(numero) + '</div>';

                } else if (Boolean(match) == false) {

                    let numero1 = parseFloat(numero);
                    html += '<div>' + parImpar(numero1) + '</div>';

                }
            } else if (validar == 0) {

                let numero = '';
                numero = array[j];
                let numero1 = parseFloat(numero);
                html += '<li>' + parImpar(numero1) + '</li>';

            }
            
            document.getElementById('resultado').innerHTML = html;
        }
    }
})

function parImpar(numero) {

    if (numero % 2 == 0 && Number.isInteger(numero) == true) {

        return numero + '<font color="blue"> es numero par </font>';

    } else if (numero % 2 != 0 && Number.isInteger(numero) == true) {

        return numero + '<font color="green"> es numero impar </font>';

    } else {

        return numero + '<font color="red"> no es un numero entero</font>';

    }

}
function validarTexYNoEnt(numero) {

    return numero + '<font color="red"> no es un numero entero</font>';

}