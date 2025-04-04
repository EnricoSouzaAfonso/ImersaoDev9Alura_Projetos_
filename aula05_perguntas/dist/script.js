// PARTE 1: Lista de perguntas e respostas
const perguntas = [
  {
    pergunta: "Qual Apollo pousou na lua pela primeira vez?",
    respostas: [
      { opcao: "Apollo 11", correto: true },
      { opcao: "Apollo 10", correto: false },
      { opcao: "Apollo 9", correto: false },
      { opcao: "Apollo 12", correto: false}
    ]
  },
  {
    pergunta: "Qual é o maior planeta do nosso Sistema Solar?",
    respostas: [
      { opcao: "Terra", correto: false },
      { opcao: "Júpiter", correto: true },
      { opcao: "Saturno", correto: false },
      { opcao: "Netuno", correto: false }
    ]
  },
  {
    pergunta: "O que causa as fases da Lua que vemos da Terra?",
    respostas: [
      { opcao: "A sombra da Terra cobrindo a Lua", correto: false },
      { opcao: "A posição relativa da Lua, Terra e Sol", correto: true },
      { opcao: "Nuvens na atmosfera da Terra", correto: false },
      { opcao: "A rotação da própria Lua", correto: false }
    ]
  },
  {
    pergunta: "Qual o nome da nossa galáxia?",
    respostas: [
      { opcao: "Andrômeda", correto: false },
      { opcao: "Galáxia do Triângulo", correto: false },
      { opcao: "Via Láctea", correto: true },
      { opcao: "Galáxia do Sombreiro", correto: false }
    ]
  },
  {
    pergunta: "O que é um ano-luz?",
    respostas: [
      { opcao: "Uma unidade de tempo equivalente a 365 dias terrestres no espaço", correto: false },
      { opcao: "A velocidade com que a luz viaja", correto: false },
      { opcao: "O tempo que a luz do Sol leva para chegar à Terra", correto: false },
      { opcao: "A distância que a luz percorre no vácuo em um ano", correto: true }
    ]
  },
  {
    pergunta: "Qual planeta é conhecido como 'Planeta Vermelho'?",
    respostas: [
      { opcao: "Vênus", correto: false },
      { opcao: "Marte", correto: true },
      { opcao: "Júpiter", correto: false },
      { opcao: "Mercúrio", correto: false }
    ]
  },
  {
    pergunta: "O que é um buraco negro?",
    respostas: [
      { opcao: "Uma estrela extremamente fria e escura", correto: false },
      { opcao: "Um tipo de nebulosa sem estrelas", correto: false },
      { opcao: "Uma região no espaço com gravidade tão forte que nem a luz pode escapar", correto: true },
      { opcao: "Um planeta composto inteiramente de matéria escura", correto: false }
    ]
  },
  {
    pergunta: "Qual força fundamental é a principal responsável por manter os planetas em órbita ao redor do Sol?",
    respostas: [
      { opcao: "Força Eletromagnética", correto: false },
      { opcao: "Força Nuclear Forte", correto: false },
      { opcao: "Força Gravitacional", correto: true },
      { opcao: "Força Nuclear Fraca", correto: false }
    ]
  },
   {
    pergunta: "O que são nebulosas?",
    respostas: [
      { opcao: "Aglomerados de galáxias distantes", correto: false },
      { opcao: "Nuvens interestelares de gás e poeira, muitas vezes berçários de estrelas", correto: true },
      { opcao: "Estágios finais explosivos de estrelas massivas (Supernovas)", correto: false },
      { opcao: "Pequenos corpos rochosos que orbitam o Sol, principalmente entre Marte e Júpiter", correto: false }
    ]
  },
  {
    pergunta: "Qual famoso telescópio espacial, lançado em 1990, forneceu imagens icônicas do universo?",
    respostas: [
      { opcao: "Telescópio Espacial James Webb", correto: false },
      { opcao: "Telescópio Espacial Hubble", correto: true },
      { opcao: "Observatório de Raios-X Chandra", correto: false },
      { opcao: "Telescópio Espacial Kepler", correto: false }
    ]
  }
];

// PARTE 2: Pegando os elementos do HTML
const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");
const btnReiniciar = document.getElementById("btnReiniciar");

// PARTE 3: Variáveis para controle do jogo
let indiceAtual = 0;
let acertos = 0;

// PARTE 4: Função para carregar uma nova pergunta
function carregarPergunta() {
  progressoElemento.innerHTML = `Pergunta ${indiceAtual + 1} de ${perguntas.length}`;
  const perguntaAtual = perguntas[indiceAtual];
  perguntaElemento.innerHTML = perguntaAtual.pergunta;
  respostasElemento.innerHTML = "";

  perguntaAtual.respostas.forEach(resposta => {
    const botao = document.createElement("button");
    botao.classList.add("botao-resposta");
    botao.innerText = resposta.opcao;

    botao.onclick = () => {
      if (resposta.correto) {
        acertos++;
      }
      indiceAtual++;
      if (indiceAtual < perguntas.length) {
        carregarPergunta();
      } else {
        finalizarJogo();
      }
    };
    respostasElemento.appendChild(botao);
  });
}

// PARTE 5: Função para mostrar a tela final
function finalizarJogo() {
  textoFinal.innerHTML = `Fim de jogo! Você acertou ${acertos} de ${perguntas.length} perguntas.`;
  conteudo.style.display = "none";
  conteudoFinal.style.display = "flex";
}

// PARTE 6: Função para reiniciar o jogo
function reiniciarJogo() {
  acertos = 0;
  indiceAtual = 0;
  conteudoFinal.style.display = "none";
  conteudo.style.display = "flex";
  carregarPergunta();
}

// PARTE 7: Adicionando o evento ao botão Reiniciar
btnReiniciar.addEventListener('click', reiniciarJogo);

// PARTE 8: Iniciando o jogo pela primeira vez
carregarPergunta();