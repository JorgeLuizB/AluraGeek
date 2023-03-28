import { produtoService } from "./products-service.js";

const formulario = document.querySelector('[data-form]');
formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    try{
        const nome = evento.target.querySelector('[data-tipo="p_nome"]').value;
        const preco = evento.target.querySelector('[data-tipo="p_preco"]').value;
        const descricao = evento.target.querySelector('[data-tipo="p_descricao"]').value;
        const categoria = evento.target.querySelector('[data-tipo="p_categoria"]').value;
        const imagem = evento.target.querySelector('[data-tipo="p_url"]').value;
        if(preco == 'R$0,00'){
            throw new Error('insira um preço válido');
        }
        produtoService.criaProduto(nome, preco, descricao, categoria, imagem)
        window.location.href = "../html/produtos.html";

    } catch(erro){
        console.log(erro);
    }
});