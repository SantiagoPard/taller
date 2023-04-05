document.getElementById('accion1').addEventListener('click',()=>{
    let txOrNum ;
    txOrNum = document.getElementById('entrada').value;
    let texto = isNaN(txOrNum);
    if(texto ==true){
        document.getElementById('entrada22').innerText =  'texto';
    }else{
        document.getElementById('entrada22').innerText = 'numero';
    }
})