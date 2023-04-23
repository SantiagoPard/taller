document.getElementById('accion1').addEventListener('click',()=>{
    document.getElementById('entrada22').classList.remove('hidden');
    let txOrNum ;
    txOrNum = document.getElementById('entrada').value;
    let texto = isNaN(txOrNum);
    
    
    if(txOrNum == ''){
        document.getElementById('entrada22').innerHTML = '<font color="red">no puede dejar el campo vacio</font>';
    }
    if(txOrNum!=''){
        if(texto ==true){
            document.getElementById('entrada22').innerText =  'texto';
        }else if(texto==false){
            document.getElementById('entrada22').innerText = 'numero';
        }
}
})