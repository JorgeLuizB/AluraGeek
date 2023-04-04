import { produtoService } from "./products-service.js";

const criaNovoProduto = (nome, preco, img, categoria, id) => {
    const itemNovoProduto = document.createElement('div');
    const conteudo =`   <img class="produto__imagem" src="${img}" alt="Categoria: ${categoria}">
                        <h3 class="produto__titulo">${nome}</h3>
                        <p class="produto__preco">${preco}</p>
                        <a class="produto__link" href="">Ver produto</a>`;
    
    itemNovoProduto.classList.add('produto__item');
    itemNovoProduto.innerHTML = conteudo;
    itemNovoProduto.dataset.id = id;
    return itemNovoProduto;

}

const modeloCategoria = `
        <div class="categoria__cabecalho">
        <h2 class="categoria__titulo"></h2>
        <a href="" class="categoria__link">Ver tudo <i class="fa-solid fa-arrow-right"></i></a>
        </div>

        <section class="produtos"></section>
`;

const modeloProduto = `
    <img class="produto__imagem" src="" alt="">
    <h3 class="produto__titulo"></h3>
    <p class="produto__preco"></p>
    <a class="produto__link" href="">Ver produto</a>
`;


const render = async () =>{
    try{
        const produtosPorCategoria = {};
        const itens = await produtoService.listaProdutos()

        itens.forEach(produto => {
            if (produtosPorCategoria[produto.categoria]) {
                produtosPorCategoria[produto.categoria].push(produto);
            } else {
                produtosPorCategoria[produto.categoria] = [produto];
            }
          });

        const categorias = Object.keys(produtosPorCategoria);


        const container = document.querySelector('section.lista-de-produtos .container');

        categorias.forEach(categoria => {
        const secaoCategoria = document.createElement('div');
        secaoCategoria.classList.add('categoria');
        secaoCategoria.innerHTML = modeloCategoria;

        const cabecalhoCategoria = secaoCategoria.querySelector('.categoria__cabecalho');
        cabecalhoCategoria.querySelector('.categoria__titulo').textContent = categoria;

        const secaoProdutos = secaoCategoria.querySelector('.produtos');
        const produtosDaCategoria = produtosPorCategoria[categoria];

        produtosDaCategoria.forEach(produto => {
        const produtoItem = document.createElement('div');
        produtoItem.classList.add('produto__item');
        produtoItem.innerHTML = modeloProduto;

        produtoItem.querySelector('.produto__imagem').src = produto.imagem;
        produtoItem.querySelector('.produto__imagem').alt = `Categoria: ${categoria} - ${produto.nome}`;
        produtoItem.querySelector('.produto__titulo').textContent = produto.nome;
        produtoItem.querySelector('.produto__preco').textContent = `${produto.preco}`;

        secaoProdutos.appendChild(produtoItem);
        });

        container.appendChild(secaoCategoria);
        });



    } catch(erro){
        console.log(erro + 'Não foi possível adicionar o produto');
        //window.location.href = '../erro.html';
    }
}


render();