document.getElementById('accion').addEventListener('click', () => {

    document.getElementById('output').classList.remove('hidden');

    let nomPer = document.getElementById('nombre').value;
    let edadPer = document.getElementById('edad').value;

    if (nomPer == "" && edadPer == "") {
        document.getElementById('output').innerHTML = '<font color="red">Hola ' + ',ingresa un nombre </font>';
    } else {
        if (edadPer >= 18) {
            document.getElementById('output').innerText = 'Hola ' + nomPer + ',eres mayor de edad';
        } else if (edadPer < 18 && edadPer > 0) {
            document.getElementById('output').innerText = 'Hola ' + nomPer + ',no eres mayor de edad';
        } else {
            document.getElementById('output').innerHTML = '<font color="red">Hola ' + ',ingresa una edad valida </font>';
        }
    }

})