document.getElementById('accion').addEventListener('click', () => {

    document.getElementById('resultado').classList.remove('hidden');

    let nota1 = document.getElementById('Nota1').value;
    let nota2 = document.getElementById('Nota2').value;
    let nota3 = document.getElementById('Nota3').value;

    nota1 = parseFloat(nota1);
    nota2 = parseFloat(nota2);
    nota3 = parseFloat(nota3);

    let prom = (nota1 + nota2 + nota3) / 3;
    let nomPer = document.getElementById('Nombre').value;
    let materia = document.getElementById('Materia').value;

    
    if (nota1 == 0 || nota2 == 0 || nota3 == 0 || nomPer == '' || materia == '') {

        document.getElementById('resultado').innerHTML = '<font color="red">' + 'ningun espacio de nota,nombre o materia puede estar vacio' + '</font>';
    
    } else {

        calcularProm(nota1, nota2, nota3, prom, nomPer, materia);
    
    }


})

function calcularProm(nota1, nota2, nota3, prom, nomPer, materia) {

    if (nota1 > 5 || nota2 > 5 || nota3 > 5) {

        return document.getElementById('resultado').innerHTML = '<font color="red">' + 'las notas tienen un valor maximo de 5' + '</font>';

    } else if (nota1 < 0 || nota2 < 0 || nota3 < 0) {

        return document.getElementById('resultado').innerHTML = '<font color="red">' + 'las notas tienen un valor minimo de 0' + '</font>';

    }

    if (prom >= 3) {

        return document.getElementById('resultado').innerHTML =
            'Felicitaciones ' + nomPer +
            '<font color="green">,su nota es ' + prom + '</font>' + ',pasaste la materia ' + materia + '</font>';

    } else {

        return document.getElementById('resultado').innerHTML =
            'Lo siento ' + nomPer +
            '<font color="red">,su nota es ' + prom + '</font>' + ' ' + ',No pasaste la materia ' + materia;
    }
}
