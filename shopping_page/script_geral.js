var i = 0;

const btn_comprar = document.getElementById('car_bts');

    function add_num() {
        const comprar = document.getElementById('aaa');
        comprar.classList.add('add');
        i++;
        if(i == 1) {
            alert('aa');
            const span = document.getElementById('notific');
            span.innerHTML += i;
        }
        
    }

    
/*
    const key = new URLSearchParams(window.location.search).get('chave');
    var dados = JSON.parse(localStorage.getItem('dados')) || [];

    function save(){
     
        let not = 1;

        if(key){
            dados[key] = {valor: not};

        }else{
            dados.push({valor: not});
        }
        localStorage.setItem('dados', JSON.stringify(dados));
        window.localStorage.href = "../shopping_page/index.html";
    
    }*/