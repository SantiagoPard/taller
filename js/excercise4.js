document.getElementById('accion').addEventListener('click',()=>{
    let nota1 = document.getElementById('Nota1').value;
    let nota2 = document.getElementById('Nota2').value;
    let nota3 = document.getElementById('Nota3').value;
    nota1 = parseFloat(nota1);
    nota2 = parseFloat(nota2);
    nota3 = parseFloat(nota3);
    let prom = (nota1+nota2+nota3)/3 
    let nomPer = document.getElementById('Nombre').value;
    let materia = document.getElementById('Materia').value;
    
    if(prom>=3){
        document.getElementById('resultado').innerHTML=
        '<div class="contetx-resultado">'+'Felicitaciones '+' '+nomPer+
        '<div class="green">,su nota es '+prom+ '</div>'+',pasaste la materia '+materia+'</div>';
    }else{
        document.getElementById('resultado').innerHTML=
        '<div class="contetx-resultado">'+'Lo siento '+' '+nomPer+
        '<div class=" red contetx-resultado">,su nota es '+prom+ '</div>'+' '+',No pasaste la materia '+materia+'</div>';    
    }
})

