const catalogo = [
  {
    codigo: 1,
    titulo: "Avatar",
    ano: 2009,
    atores: ["James", "Cameron"],
    duracao: 2.04,
    emCartaz: false,
  },
  {
    codigo: 2,
    titulo: "Homem - Formiga",
    ano: 2015,
    atores: ["Paul Rudd", "Michael Douglas", "Michael Penã"],
    duracao: 1.58,
    emCartaz: true,
  },
];

function adicionaFilme(catalogo, filme) {
  return catalogo.push(filme);
}

adicionaFilme(catalogo, {
  codigo: 3,
  titulo: "Doutor Estranho no Multiverso da Loucura",
  ano: 2022,
  atores: ["Benedict Cumberbatch", "Xochitl Gomez", "Elizabeth Olsen"],
  duracao: 2.06,
  emCartaz: true,
});

function buscarFilme(catalogo, codigo) {
  return catalogo.find((filme) => filme.codigo === codigo);
}

function alterarStatusEmCartaz(catalogo, codigo) {
  let filme = catalogo.find((filme) => filme.codigo === codigo);

  if (filme.emCartaz == true) {
    filme.emCartaz = false;
  } else {
    filme.emCartaz = true;
  }

  return;
}

alterarStatusEmCartaz(catalogo, 2);
