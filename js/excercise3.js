document.getElementById('accion').addEventListener('click',()=>{
    let nomPer = document.getElementById('nombre').value;
    let edadPer = document.getElementById('edad').value;
    if(edadPer>=18){
        document.getElementById('output').innerText = 'Hola '+nomPer+',eres mayor de edad';
    }else if(edadPer<18 && edadPer>0){
        document.getElementById('output').innerText = 'Hola '+nomPer+',no eres mayor de edad';    
    }else{
        document.getElementById('output').innerHTML = '<font color="red">Hola '+',ingresa una edad valida </font>';
    }
})