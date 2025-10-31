document.addEventListener('DOMContentLoaded', function() {
    // Array com as imagens e textos do carrossel
    const conteudoCarrossel = [
        {
            imagem: "img/imgdaelisc.svg",
            texto: "Um mundo aberto onde cada montanha esconde um segredo.<br>Das cidades movimentadas às ruínas ancestrais, você é livre<br>ser um herói, um ladrão ou um arqueiro furtivo. Com a ameaça<br>dos dragões renascendo, sua lenda está por ser escrita na terra<br>gélida de Skyrim.<br><br>Um mundo aberto onde cada montanha esconde um segredo.<br>Das cidades movimentadas às ruínas ancestrais, você é livre<br>ser um herói, um ladrão ou um arqueiro furtivo. Com a ameaça<br>dos dragões renascendo, sua lenda está por ser escrita na terra<br>gélida de Skyrim."
        },
        {
            imagem: "img/imgdomarioc.svg",
            texto:  "Um mundo aberto onde cada montanha esconde um segredo.<br>Das cidades movimentadas às ruínas ancestrais, você é livre<br>ser um herói, um ladrão ou um arqueiro furtivo. Com a ameaça<br>dos dragões renascendo, sua lenda está por ser escrita na terra<br>gélida de Skyrim.<br><br>Um mundo aberto onde cada montanha esconde um segredo.<br>Das cidades movimentadas às ruínas ancestrais, você é livre<br>ser um herói, um ladrão ou um arqueiro furtivo. Com a ameaça<br>dos dragões renascendo, sua lenda está por ser escrita na terra<br>gélida de Skyrim."
        },
        {
            imagem: "img/imgdotomc.svg", 
            texto:  "Um mundo aberto onde cada montanha esconde um segredo.<br>Das cidades movimentadas às ruínas ancestrais, você é livre<br>ser um herói, um ladrão ou um arqueiro furtivo. Com a ameaça<br>dos dragões renascendo, sua lenda está por ser escrita na terra<br>gélida de Skyrim.<br><br>Um mundo aberto onde cada montanha esconde um segredo.<br>Das cidades movimentadas às ruínas ancestrais, você é livre<br>ser um herói, um ladrão ou um arqueiro furtivo. Com a ameaça<br>dos dragões renascendo, sua lenda está por ser escrita na terra<br>gélida de Skyrim."
        }
    ];

    // Elementos
    const imagemAtual = document.querySelector('.imgca img');
    const textoAtual = document.querySelector('.textoc p');
    const botaoEsquerdo = document.querySelector('.bc img:nth-child(1)');
    const botaoDireito = document.querySelector('.bc img:nth-child(2)');

    let indiceAtual = 0;

    // Função para atualizar imagem E texto
    function atualizarConteudo() {
        imagemAtual.src = conteudoCarrossel[indiceAtual].imagem;
        textoAtual.innerHTML = conteudoCarrossel[indiceAtual].texto;
    }

    // Botão direito - próxima imagem
    botaoDireito.addEventListener('click', function() {
        indiceAtual++;
        if (indiceAtual >= conteudoCarrossel.length) {
            indiceAtual = 0;
        }
        atualizarConteudo();
    });

    // Botão esquerdo - imagem anterior
    botaoEsquerdo.addEventListener('click', function() {
        indiceAtual--;
        if (indiceAtual < 0) {
            indiceAtual = conteudoCarrossel.length - 1;
        }
        atualizarConteudo();
    });

    // Iniciar com o primeiro conteúdo
    atualizarConteudo();
});