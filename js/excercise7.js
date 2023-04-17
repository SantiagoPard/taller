document.getElementById('accion').addEventListener('click', () => {
    
    let Num1 = parseFloat(document.getElementById('Num1').value);
    let Num2 = parseFloat(document.getElementById('Num2').value);
    
    if(isNaN(Num1)==true||isNaN(Num2)==true){
        document.getElementById('resultado').innerHTML = '<font color = "red">no puede dejar vacio ningun espacio</font>';
    }else{
        let valPos = validarPositivo(Num1, Num2);
        let valNeg = validarNegativo(Num1, Num2);
        if(valPos == true){
            validarNegativo(Num1, Num2);
        }
        if(valNeg == true){
            validarDivisibilidad(Num1, Num2);
        }
    }
})

function validarPositivo(Num1, Num2) {
    if (Num1 >= 0 && Num2 >= 0 && Number.isInteger(Num1) == false && Number.isInteger(Num2) == false) {
         document.getElementById('resultado').innerText = 'Los números ' + Num1 + ' y ' + Num2 + ' no son enteros.';
         return false;
    } else if (Num2 >= 0 && Number.isInteger(Num2) == false) {
         document.getElementById('resultado').innerText = 'El número ' + Num2 + ' no es entero';
         return false;
    } else if (Num1 >= 0 && Number.isInteger(Num1) == false) {
         document.getElementById('resultado').innerText = 'El número ' + Num1 + ' no es entero';
        return false;
    }
    return true;
}

function validarNegativo(Num1, Num2) {
    if (Num1 < 0 && Num2 < 0 && Number.isInteger(Num1) == false && Number.isInteger(Num2) == false) {

         document.getElementById('resultado').innerText = 'Los números ' + Num1 + ' y ' + Num2 + ' no son enteros positivos.';
         return false;
    } else if (Num2 < 0 && Number.isInteger(Num2) == false) {

         document.getElementById('resultado').innerText = 'El número ' + Num2 + ' no es entero positivo';
         return false;
    } else if (Num2 < 0 && Number.isInteger(Num2) == true) {

         document.getElementById('resultado').innerText = 'El número ' + Num2 + ' no es positivo';
         return false;
    } else if (Num1 < 0 && Number.isInteger(Num1) == false) {

         document.getElementById('resultado').innerText = 'El número ' + Num1 + ' no es entero positivo';
         return false;
    } else if (Num1 < 0 && Number.isInteger(Num1) == true) {

         document.getElementById('resultado').innerText = 'El número ' + Num1 + ' no es positivo';
         return false;
    }
    return true;
}
function validarDivisibilidad(Num1, Num2) {
    if (Num1 % Num2 == 0 && (Num1 && Num2) >= 0) {
        document.getElementById('resultado').innerText = 'El numero ' + Num1 + ' es divisible por el numero ' + Num2;
    } else if (Num1 % Num2 != 0 && (Num1 && Num2) >= 0) {
        document.getElementById('resultado').innerText = 'El numero ' + Num1 + ' no es divisible por el numero ' + Num2;
    }
}