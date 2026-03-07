const noticias = [
    {
        titulo: 'Novo reforço anunciado',
        texto: 'O defensor Sandro Quimarães chega ao clube para somar',
        imagem: '/assets/imagens/foto1.png'
    },
    {
        titulo: 'Novo reforço anunciado',
        texto: 'O lateral Junior Morando chega para se titular',
        imagem: '/assets/imagens/foto1.png'
    },
    {
        titulo: 'Treino da semana',
        texto: 'Equipe focada no próximo jogo.',
        imagem: '/assets/imagens/foto1.png'
    },
    {
        titulo: 'Base em destaque',
        texto: 'Sub-20 vence amistoso contra o flamengo por 12 x 8',
        imagem: '/assets/imagens/foto1.png'
    },
    {
        titulo: 'Técnico sobre pressão?',
        texto: 'Equipe não vence a 5 jogos',
        imagem: '/assets/imagens/foto1.png'
    },
    {
        titulo: 'Jogadores sem raça',
        texto: 'Torcida xinga os jogadores os chamando de merdas',
        imagem: '/assets/imagens/foto1.png'
    },
    {
        titulo: 'Reforço de peso?',
        texto: 'Anunciado o atacante Aleison (40 anos) que chega do rival Trem',
        imagem: '/assets/imagens/foto1.png'
    },
]

const container = window.document.getElementById('container-noticias')

function criarCard(noticia){
    var card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <img src="${noticia.imagem}">
        <h3>${noticia.titulo}</h3>
        <p>${noticia.texto}</p>
    `;

    return card
}

function mostrarNoticia(qtd){
    for(var i = 0; i < qtd && i < noticias.length; i++){
    
        var card = criarCard(noticias[i])

        container.appendChild(card)

    }
}

if(container){
    if(window.location.pathname.includes('noticias')){
        mostrarNoticia(noticias.length)
    }else {
        mostrarNoticia(4)
    }
}

