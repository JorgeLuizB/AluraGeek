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
    msg: input => validaMensagem(input)
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
    } else{
        input.classList.remove('erro');
    }
    if(input.validity.typeMismatch){
        mensagem = 'Verifique seu endereço de email.';
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