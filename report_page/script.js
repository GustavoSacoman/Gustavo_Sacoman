
    const dados_r = JSON.parse(localStorage.getItem('dados')) || [];
    const tabela = document.getElementById('table');

    function exibir_itens(){
        dados_r.forEach((item, key) => {
            tabela.innerHTML += `
        <tr>
            <td class="data_color_one">${key}</td>
            <td class="data_color_one">${item.nome}</td>
            <td class="data_color_one">${item.cpf}</td>
            <td class="data_color_one">${item.dataNascimento}</td>
            <td class="data_color_one">${item.telefone}</td>
            <td class="data_color_one">${item.email}</td>
            <td class="data_color_one">${item.cep}</td>
            <td class="data_color_one">${item.rua}</td>
            <td class="data_color_one">${item.bairro}</td>
            <td class="data_color_one">${item.cidade}</td>
            <td class="data_color_one">${item.estado}</td>
            <td class="data_color_one">${item.senha}</td>
            <td><a href="#" onclick="remover(${key})">Excluir</a>
            </td>
        </tr>`;
        });
    }
    
    function remover(){
        dados_r.splice(key,1);
        localStorage.setItem('dados', JSON.stringify(dados_r));
        window.location.href = "../report_page/index.html";
    }
    exibir_itens();

