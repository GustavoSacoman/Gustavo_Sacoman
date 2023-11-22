
    
    const form = document.getElementById('form');
    
    const cep = document.getElementById('cep');
    const rua = document.getElementById('rua');
    const bairro = document.getElementById('bairro');
    const cidade = document.getElementById('cidade');
    const uf = document.getElementById('estado');
    const rrr = document.getElementById('rrr')
    
        function cep_errado(msg) {
            
            const erro = document.createElement('label');
            erro.innerHTML += "<br>" + "*" + cep.value + " " + "É um CEP Inválido!" + msg;
            erro.style.color = "red";
            erro.style.fontSize = "13px";
            erro.id = "erro";
		    rrr.parentNode.insertBefore(erro, rrr.nextSibling);
		    form.reset();
        }
    
  
        function retorno(conteudo) {
            if(!("erro" in conteudo)) {
                cep.value = conteudo.cep;
                rua.value = conteudo.logradouro;
                bairro.value = conteudo.bairro;
                cidade.value = conteudo.localidade;
                uf.value = conteudo.uf;
                
            }
            else {
                cep_errado("Nao localizado");
            }
    
        }
       
    
        function search_cep(valor) {
            
            msg_error = document.getElementById('erro');
    
            if(msg_error){
                form.removeChild(msg_error);
                
            }
            var cep_valido = valor.replace(/\D/g, "");
            
            if(cep_valido != "") {
                
                var padrao_cep = /^[0-9]{8}$/;
                
                if(padrao_cep.test(cep_valido)){
                  
                    rua.value = "buscando";
                    bairro.value = "buscando";
                    cidade.value = "buscando";
                    uf.value = "buscando";
                    const script = document.createElement("script");
    
    
                    
                    script.src = "https://viacep.com.br/ws/"+ cep_valido +"/json/?callback=retorno";
    
                    document.body.appendChild(script);
                    
                }
                else {
                    cep_errado("invalido");
                }
            }
            else {
                cep_errado("Digite o CEP!!!! Corretamente");
            }
    
        }

    