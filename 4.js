document.addEventListener('DOMContentLoaded', function() {
    // Array com as imagens do carrossel do diário
    const imagensDiario = [
        "img/imgd1.png",
        "img/imgd2.png", 
        "img/imgd3.png"
    ];

    // Array com os textos para cada diário (MESMO NÚMERO DE LINHAS)
    const textosDiario = [
        "leia o diário de Elis e descubra cada<br>momento perdido em suas memórias.<br>Entenda o que houve, quem ela foi e<br>por que suas palavras ecoam sempre<br>neste mundo de lembranças e segredos.",
        "[ER#404] ▓diário▒de▐Elis▌não▞carregou▚<br>┤dados≠inválidos▒memórias∿perdidas┐ <br> ╬falha▰na▯leitura▢do▣arquivo▒br-001<br>tentativa⇔recuperação✶falhou⋇repetir<br>◈dados⟟fragmentados▤origem▒desconhecida.",
        "mergulhe na história magnífica de Solum<br>e descubra os mistérios do tempo.<br>Cada viagem revela novos destinos<br>e escolhas que moldam o universo<br>nesta aventura além da realidade.",
    ];

    // Elementos
    const imagemAtual = document.querySelector('.imgd img');
    const textoAtual = document.querySelector('.pdiario p');
    const botaoDireita = document.querySelector('.seta11');
    const botaoEsquerda = document.querySelector('.seta22');

    let indiceAtual = 0;

    // Função para atualizar imagem E texto
    function atualizarDiario() {
        imagemAtual.src = imagensDiario[indiceAtual];
        textoAtual.innerHTML = textosDiario[indiceAtual];
    }

    // Botão DIREITA - próxima imagem (CLIQUE NA DIV INTEIRA)
    botaoDireita.addEventListener('click', function() {
        indiceAtual++;
        if (indiceAtual >= imagensDiario.length) {
            indiceAtual = 0;
        }
        atualizarDiario();
    });

    // Botão ESQUERDA - imagem anterior (CLIQUE NA DIV INTEIRA)
    botaoEsquerda.addEventListener('click', function() {
        indiceAtual--;
        if (indiceAtual < 0) {
            indiceAtual = imagensDiario.length - 1;
        }
        atualizarDiario();
    });

    // Iniciar com a primeira imagem e texto
    atualizarDiario();
});

// Adicione este código no seu arquivo JavaScript existente
document.addEventListener('DOMContentLoaded', function() {
    // Configuração dos botões e suas seções
    const botoes = [
        { botao: 'img/b_home.svg', seletor: '.casaa' },
        { botao: 'img/b_personagens.svg', seletor: '.persona' },
        { botao: 'img/b_sobre.svg', seletor: '.sobreojogo' },
        { botao: 'img/b_mapa.svg', seletor: '.teste' }, // ou a classe da seção mapa
        { botao: 'img/b_diario.svg', seletor: '.tdiario' } // ou a classe da seção diário
    ];

    botoes.forEach(({ botao, seletor }) => {
        const botaoImg = document.querySelector(`img[src="${botao}"]`);
        const secao = document.querySelector(seletor);
        
        if (botaoImg && secao) {
            botaoImg.style.cursor = 'pointer';
            botaoImg.addEventListener('click', function() {
                secao.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        }
    });
});