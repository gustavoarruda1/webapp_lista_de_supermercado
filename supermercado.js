var itens = [];

document.querySelector('input[type=submit').addEventListener('click', () => {
    var nomeProduto = document.querySelector('input[name=nome_produto]');
    var precoProduto = document.querySelector('input[name=valor_produto]');

    itens.push({
        nome: nomeProduto.value,
        valor: precoProduto.value
    });

    let listaProdutos = document.querySelector('.products-list');
    let soma = 0;

    listaProdutos.innerHTML = "";

    itens.map(function (val) {
        soma += parseFloat(val.valor);
        listaProdutos.innerHTML += `<div class="product-single">
        <h3>`+ val.nome + `</h3>
        <h3 class="price">R$`+ val.valor + `</h3>
    </div>`
    })

    soma = soma.toFixed(2);
    nomeProduto.value = "";
    precoProduto.value = "";

    let elementoSoma = document.querySelector('.soma-produto h1');

    elementoSoma.innerHTML = 'Total: R$' + soma;

});

document.querySelector('button[name=clear]').addEventListener('click', () => {
    itens = [];
    document.querySelector('.products-list').innerHTML = "";
    document.querySelector('.soma-produto h1').innerHTML = "Total: R$0";

})
