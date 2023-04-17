document.getElementById('accion').addEventListener('click',()=>{
    let numero = '';
    numero = document.getElementById('Numero').value;
    if(numero==''){
        document.getElementById('output').innerHTML = '<font color="red">Debe ingresar un numero</font>'
    }else{
        numero = parseFloat(numero);
        let validacion = Number.isInteger(numero);
        
        if(numero<0){
            document.getElementById('output').innerHTML = '<font color="red">Debe ingresar números enteros positivos</font>'
        }else if(validacion == false){
            document.getElementById('output').innerHTML = '<font color="red">Debe ingresar números enteros</font>'    
        }else{
        parImpar(numero); 
        }
    }
})

function parImpar (numero){
    if(numero%2 == 0){
        document.getElementById('output').innerHTML = 'el numero es par'
    }else{
        document.getElementById('output').innerHTML = 'el numero es impar'    
    }
}