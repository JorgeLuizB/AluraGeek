import { produtoService } from "./products-service.js";
const formulario = document.querySelector('[data-form]');

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    try{
        const email = evento.target.querySelector('[data-tipo="email"]').value;
        const senha = evento.target.querySelector('[data-tipo="senha"]').value;

        produtoService.logaUsuario(email, senha);

    } catch(erro){
        console.log('deu erro')
    }
});