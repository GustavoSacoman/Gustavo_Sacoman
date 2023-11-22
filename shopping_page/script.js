

var i = 0;

const btn_comprar = document.getElementById('car_bts');

    function add_num() {
        const comprar = document.getElementById('cell');
        comprar.classList.add('add');
        i++;
        if(i == 1) {
            
            const span = document.getElementById('notific');
            span.innerHTML += i;
        }
        
    }
    btn_comprar.addEventListener('click', add_num);
    
