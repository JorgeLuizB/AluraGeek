export function valida(input){
    const tipoDeInput = input.dataset.tipo;

    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input);
    }

    if(!input.validity.valid){
        input.style.border = '1px solid red';
    } else if(input.dataset.tipo){
        input.style.border = 'none';
        input.style.borderBottom = '1px solid #C8C8C8';
    }

}

const validadores = {
    nome: input => validaNome(input),
    email: input => validaEmail(input),
    senha: input => validaSenha(input),
    msg: input => validaMensagem(input),
    p_url: input => validaURL(input),
    p_categoria: input => validaCategoria(input),
    p_nome: input => validaProdutoNome(input),
    p_preco: input => validaPreco(input),
    p_descricao: input => validaDescricao(input)
}


function validaNome(input){
    let mensagem = '';

    if(input.validity.valueMissing){
        mensagem = 'O nome não pode estar vazio.';
        input.classList.add('erro');
    } else{
        input.classList.remove('erro');
    }
    input.placeholder = mensagem;
}

function validaEmail(input){
    let mensagem = '';

    if(input.validity.valueMissing){
        mensagem = 'O email não pode estar vazio.';
        input.classList.add('erro');
    } else if(input.validity.typeMismatch){
        mensagem = 'Endereço de email inválido.';
        input.classList.add('erro');
        input.value = '';
    } else{
        input.classList.remove('erro');
    }
    input.placeholder = mensagem;
}
function validaSenha(input){
    let mensagem = '';

    if(input.validity.valueMissing){
        mensagem = 'A senha não pode estar vazia.';
        input.classList.add('erro');
    } else{
        input.classList.remove('erro');
    } 
    input.placeholder = mensagem;
}

function validaMensagem(input){
    let mensagem = '';

    if(input.validity.valueMissing){
        mensagem = 'A mensagem não pode estar vazia.';
        input.classList.add('erro');
    } else{
        input.classList.remove('erro');
    } 
    input.placeholder = mensagem;
}

function validaURL(input){
    let mensagem = '';
    let url = input.value.trim();
    if((url.startsWith('http://') || url.startsWith('https://')) && (url.endsWith('.jpg') || url.endsWith('.png'))){
        input.classList.remove('erro');
        //!Faz alguma coisa se estiver tudo ok
    } else if(input.validity.valueMissing){
            mensagem = 'A URL não pode estar vazia.';
            input.classList.add('erro');
    } else{
        mensagem = 'Insira o link de uma imagem (.jpg ou .png)';
        input.value='';
        input.classList.add('erro');
    }
    
    input.placeholder = mensagem;
}

function validaCategoria(input){
    let mensagem = '';

    if(input.validity.valueMissing){
        mensagem = 'A categoria não pode estar vazia.';
        input.classList.add('erro');
    } else{
        input.classList.remove('erro');
    } 
    input.placeholder = mensagem;
}

function validaProdutoNome(input){
    let mensagem = '';

    if(input.validity.valueMissing){
        mensagem = 'O nome do produto não pode estar vazio.';
        input.classList.add('erro');
    } else{
        input.classList.remove('erro');
    } 
    input.placeholder = mensagem;
}

function validaPreco(input){
    let mensagem = '';

    if(input.validity.valueMissing){
        mensagem = 'O preço não pode estar vazio.';
        input.classList.add('erro');
    } else{
        input.classList.remove('erro');
    } 
    input.placeholder = mensagem;
}

function validaDescricao(input){
    let mensagem = '';

    if(input.validity.valueMissing){
        mensagem = 'A descrição não pode estar vazia.';
        input.classList.add('erro');
    } else{
        input.classList.remove('erro');
    } 
    input.placeholder = mensagem;
}