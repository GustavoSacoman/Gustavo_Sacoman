

const nome = document.getElementById('nome');
const cpf = document.getElementById('cpf');
const data_nas = document.getElementById('data-nas');
const telefone = document.getElementById('telefone');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const confirm_senha = document.getElementById('confirm-senha');
const key = new URLSearchParams(window.location.search).get('chave');
var dados = JSON.parse(localStorage.getItem('dados')) || [];





function salvar(){
    
    if(senha.value === confirm_senha.value){
        
   
      
    let novo_nome = nome.value;
    let novo_cpf = cpf.value;
    let novo_data_nasc = data_nas.value;
    let novo_telefone = telefone.value;
    let novo_email = email.value;
    let novo_cep = cep.value;
    let novo_rua = rua.value;
    let novo_bairro = bairro.value;
    let novo_cidade = cidade.value;
    let novo_estado = uf.value;
    let novo_senha = senha.value;


    if(key){
        dados[key] = {nome: novo_nome, cpf: novo_cpf, dataNascimento: novo_data_nasc, telefone: novo_telefone, email: novo_email, cep: novo_cep, rua: novo_rua, bairro: novo_bairro, cidade: novo_cidade, estado: novo_estado, senha: novo_senha};
    }
    else{
        dados.push({nome: novo_nome, cpf: novo_cpf, dataNascimento: novo_data_nasc, telefone: novo_telefone, email: novo_email, cep: novo_cep, rua: novo_rua, bairro: novo_bairro, cidade: novo_cidade, estado: novo_estado, senha: novo_senha});
    }
    localStorage.setItem('dados', JSON.stringify(dados));

    window.location.href = "../register_page/index.html";

    alert('Seus dados foram salvos');
    
}
else{
    alert('Senhas diferentes! Corrija');
    
}
}

    if(key){
        nome.value = dados[key].nome;
        cpf.value = dados[key].cpf;
        data_nas.value = dados[key].data_nas;
        telefone.value = dados[key].telefone;
        email.value = dados[key].email;
        cep.value = dados[key].cep;
        rua.value = dados[key].rua;
        bairro.value = dados[key].bairro;
        cidade.value = dados[key].cidade;
        uf.value = dados[key].uf;
        senha.value = dados[key].senha;
        
    }
