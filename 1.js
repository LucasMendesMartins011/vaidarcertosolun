document.addEventListener('DOMContentLoaded', function() {

    const personagens = {
        elis: {
            nome: "Elis",
            textoCurto: "A salvação do mundo",
            textoLongo: "Ela é uma jovem baixinha, de óculos e cabelos rosas, movida por uma <br> paixão pela Terra. Sua missão é combater a poluição e restaurar a natureza, <br> sonhando com um mundo onde as pessoas vivam em harmonia com o planeta.",
            icone: "img/vector.png",
            foto: "img/elis 2.svg",
            carrossel: "img/quaqua.svg"
        },
        jobim: {
            nome: "Jobim",
            textoCurto: "O pombo companheiro",
            textoLongo: "Jobim é um pombo cego, dedicado a voar pelos céus e florestas. <br> Com seu amor por Elis e coragem, enfrenta a poluição <br> para viver livre e feliz em meio à natureza.",
            icone: "img/vector.png", 
            foto: "img/jobim.png",
            carrossel: "img/qua.svg"
        },
        mario: {
            nome: "Mario",
            textoCurto: "O robo publicitário", 
            textoLongo: "Mário é um robô da Tibi, responsável pelas propagandas, mas mesmo<br> sendo carismático e alegre, ele não gosta de seu trabalho e gostaria de<br> ajudar os humanos, embora pareça preso a salvar o planeta em vão.",
            icone: "img/vector.png", 
            foto: "img/mariop.png", 
            carrossel: "img/q.svg"
        }
    };

    // Elementos que vão ser atualizados
    const elementos = {
        nome: document.querySelector('.nome_personagem p'),
        textoCurto: document.querySelector('.textoo p'),
        textoLongo: document.querySelector('.texto_personagem p'),
        icone: document.querySelector('.icone1 img'),
        foto: document.querySelector('.p_elis img'),
        carrossel: document.querySelectorAll('.fotosp img')
    };

    // Função para trocar personagem
    function trocarPersonagem(personagem) {
        const dados = personagens[personagem];
        
        // Atualizar conteúdo
        elementos.nome.textContent = dados.nome;
        elementos.textoCurto.textContent = dados.textoCurto;
        elementos.textoLongo.innerHTML = dados.textoLongo;
        elementos.icone.src = dados.icone;
        elementos.foto.src = dados.foto;
    }

    // Adicionar eventos de clique nas fotos do carrossel
    elementos.carrossel.forEach((img, index) => {
        img.addEventListener('click', function() {
            const personagem = Object.keys(personagens)[index];
            trocarPersonagem(personagem);
        });
    });

    // Iniciar com a Elis ativa
    trocarPersonagem('elis');
});