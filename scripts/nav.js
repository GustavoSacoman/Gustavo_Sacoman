const btn_nav = document.getElementById('options_btn');
const modal = document.getElementById('sair');
const body = document.getElementById('body');
 function option_bar(){
  
    const body = document.getElementById('body');
    body.classList.add('teste');
    

}

    btn_nav.addEventListener('click', option_bar);
    
  
    const btn_sair = document.getElementById('exit-modal');


    function exit_modal(){
        body.classList.remove('teste');

    }
    btn_sair.addEventListener('click', exit_modal);