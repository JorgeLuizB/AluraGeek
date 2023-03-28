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

const logaUsuario = (email, senha) => {
    return fetch(`http://localhost:3000/usuarios?email=${email}&senha=${senha}`)
    .then(resposta => resposta.json())
    .then(usuario => {
        if(usuario.email === email && usuario.senha === senha){
            window.location.href = '../html/cadastro-produto.html';
        }else{
            
            throw new Error('Usuário ou senha inválidos');
        }
    });
}

export const produtoService = {
    criaProduto,
    logaUsuario
}