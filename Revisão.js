# class Produto {
  constructor(nome, preco, categoria) {
    this.nome = nome;
    this.preco = preco;
    this.categoria = categoria;
  }

  exibirDetalhes() {
    return `${this.nome} - R$${this.preco.toFixed(2)} (${this.categoria})`;
  }
}

let produtos = [];

function adicionarProduto(nome, preco, categoria) {
  const novoProduto = new Produto(nome, preco, categoria);
  produtos.push(novoProduto);
  console.log("Produto adicionado com sucesso.");
}

function listarProdutos() {
  if (produtos.length === 0) {
    console.log("Nenhum produto cadastrado.");
  } else {
    produtos.forEach(produto => {
      console.log(produto.exibirDetalhes());
    });
  }
}

function buscarProduto(nomeBusca) {
  const produto = produtos.find(p => p.nome.toLowerCase() === nomeBusca.toLowerCase());
  if (produto) {
    console.log("Produto encontrado:");
    console.log(produto.exibirDetalhes());
  } else {
    console.log("Produto não encontrado.");
  }
}

function filtrarPorCategoria(categoriaBusca) {
  const filtrados = produtos.filter(p => p.categoria.toLowerCase() === categoriaBusca.toLowerCase());
  if (filtrados.length > 0) {
    console.log("Produtos da categoria:", categoriaBusca);
    filtrados.forEach(p => console.log(p.exibirDetalhes()));
  } else {
    console.log("Nenhum produto encontrado nessa categoria.");
  }
}

function resumoEstatistico() {
  if (produtos.length === 0) {
    console.log("Nenhum produto para calcular.");
    return;
  }
  const total = produtos.reduce((soma, p) => soma + p.preco, 0);
  console.log(`Total em produtos: R$${total.toFixed(2)}`);
}

while (true) {
  let acao = prompt("Escolha uma ação: adicionar, listar, buscar, filtrar, resumo ou sair").toLowerCase();
  if (acao === "sair") break;

  if (acao === "adicionar") {
    let nome = prompt("Nome do produto:");
    let preco = parseFloat(prompt("Preço do produto:"));
    let categoria = prompt("Categoria do produto:");
    adicionarProduto(nome, preco, categoria);
  } else if (acao === "listar") {
    listarProdutos();
  } else if (acao === "buscar") {
    let nomeBusca = prompt("Digite o nome do produto para buscar:");
    buscarProduto(nomeBusca);
  } else if (acao === "filtrar") {
    let categoriaBusca = prompt("Digite a categoria para filtrar:");
    filtrarPorCategoria(categoriaBusca);
  } else if (acao === "resumo") {
    resumoEstatistico();
  } else {
    console.log("Ação inválida.");
  }
}
