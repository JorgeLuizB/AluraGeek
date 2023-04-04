const criaProduto = (nome, preco, descricao, categoria, imagem) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({  
            nome,
            preco,
            descricao,
            categoria,
            imagem,
        })
    }

    return fetch('http://localhost:3000/produtos', options)
    .then(resposta => {
        if(resposta.ok){
            return resposta.body;
        }
        throw new Error('Não foi possível criar o produto');
    });
}

const logaUsuario = async (email, senha) => {
    try{
        const resposta = await fetch(`http://localhost:3000/usuarios?email=${email}&senha=${senha}`);
        const usuario = await resposta.json();
        if (usuario.email === email && usuario.senha === senha) {
            window.location.href = '../html/cadastro-produto.html';
        } else {
            throw new Error('Usuário ou senha inválidos');
        }
    }   
    catch(erro){
            throw new Error('Ops! Algo deu errado, tente novamente mais tarde. Erro: ' + erro);
    }
}

const listaProdutos = () => {
    return fetch('http://localhost:3000/produtos')
    .then(resposta => {
        if (resposta.ok){
        return resposta.json();
        }
        throw new Error('Não foi possível listar os produtos');
    });
}

export const produtoService = {
    criaProduto,
    logaUsuario,
    listaProdutos
}