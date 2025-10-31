document.addEventListener('DOMContentLoaded', function() {
    // Array com as imagens do carrossel do mapa
    const imagensMapa = [
        "img/fotocmapa1 (1).svg",
        "img/fotocmapa2 (1).svg", 
        "img/fotocmapa3 (1).svg"
    ];

    // Array com os textos para cada mapa
    const textosMapa = [
        "simples tarefa se transforma em uma jornada<br>incrivelmente viciante. Cada tentativa de fuga é única,<br>pois os salões do mundo inferior se reorganizam a cada<br>vez que você morre.",
        "explore paisagens exuberantes e descubra segredos<br>ancestrais escondidos nas florestas. Cada caminho<br>oferece novas aventuras e desafios únicos para<br>superar em sua jornada épica.",
        "navegue por oceanos profundos e ilhas misteriosas<br>cheias de tesouros e perigos. A cada nova descoberta,<br>o mundo se expande com possibilidades infinitas de<br>exploração e conquista."
    ];

    // Elementos
    const imagemAtual = document.querySelector('.fcfotos img');
    const textoAtual = document.querySelector('.pmapa p');
    const botaoDireita = document.querySelector('.seta1 img'); // seta direita
    const botaoEsquerda = document.querySelector('.seta2 img'); // seta esquerda

    let indiceAtual = 0;

    // Função para atualizar imagem E texto
    function atualizarMapa() {
        imagemAtual.src = imagensMapa[indiceAtual];
        textoAtual.innerHTML = textosMapa[indiceAtual];
    }

    // Botão DIREITA - próxima imagem
    botaoDireita.addEventListener('click', function() {
        indiceAtual++;
        if (indiceAtual >= imagensMapa.length) {
            indiceAtual = 0; // Volta para a primeira
        }
        atualizarMapa();
    });

    // Botão ESQUERDA - imagem anterior
    botaoEsquerda.addEventListener('click', function() {
        indiceAtual--;
        if (indiceAtual < 0) {
            indiceAtual = imagensMapa.length - 1; // Vai para a última
        }
        atualizarMapa();
    });

    // Iniciar com a primeira imagem e texto
    atualizarMapa();
});

