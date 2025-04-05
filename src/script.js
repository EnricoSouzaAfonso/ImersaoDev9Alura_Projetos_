// PARTE 1: Lista de perguntas e respostas (COM 20 PERGUNTAS)
const perguntas = [
  // Perguntas Originais
  {
    pergunta: "Qual Apollo pousou na lua pela primeira vez?",
    respostas: [ { opcao: "Apollo 11", correto: true }, { opcao: "Apollo 10", correto: false }, { opcao: "Apollo 9", correto: false }, { opcao: "Apollo 12", correto: false } ]
  },
  {
    pergunta: "Qual é o maior planeta do nosso Sistema Solar?",
    respostas: [ { opcao: "Terra", correto: false }, { opcao: "Júpiter", correto: true }, { opcao: "Saturno", correto: false }, { opcao: "Netuno", correto: false } ]
  },
  {
    pergunta: "O que causa as fases da Lua que vemos da Terra?",
    respostas: [ { opcao: "A sombra da Terra cobrindo a Lua", correto: false }, { opcao: "A posição relativa da Lua, Terra e Sol", correto: true }, { opcao: "Nuvens na atmosfera da Terra", correto: false }, { opcao: "A rotação da própria Lua", correto: false } ]
  },
  {
    pergunta: "Qual o nome da nossa galáxia?",
    respostas: [ { opcao: "Andrômeda", correto: false }, { opcao: "Galáxia do Triângulo", correto: false }, { opcao: "Via Láctea", correto: true }, { opcao: "Galáxia do Sombreiro", correto: false } ]
  },
  {
    pergunta: "O que é um ano-luz?",
    respostas: [ { opcao: "Uma unidade de tempo equivalente a 365 dias terrestres no espaço", correto: false }, { opcao: "A velocidade com que a luz viaja", correto: false }, { opcao: "O tempo que a luz do Sol leva para chegar à Terra", correto: false }, { opcao: "A distância que a luz percorre no vácuo em um ano", correto: true } ]
  },
  {
    pergunta: "Qual planeta é conhecido como 'Planeta Vermelho'?",
    respostas: [ { opcao: "Vênus", correto: false }, { opcao: "Marte", correto: true }, { opcao: "Júpiter", correto: false }, { opcao: "Mercúrio", correto: false } ]
  },
  {
    pergunta: "O que é um buraco negro?",
    respostas: [ { opcao: "Uma estrela extremamente fria e escura", correto: false }, { opcao: "Um tipo de nebulosa sem estrelas", correto: false }, { opcao: "Uma região no espaço com gravidade tão forte que nem a luz pode escapar", correto: true }, { opcao: "Um planeta composto inteiramente de matéria escura", correto: false } ]
  },
  {
    pergunta: "Qual força fundamental é a principal responsável por manter os planetas em órbita ao redor do Sol?",
    respostas: [ { opcao: "Força Eletromagnética", correto: false }, { opcao: "Força Nuclear Forte", correto: false }, { opcao: "Força Gravitacional", correto: true }, { opcao: "Força Nuclear Fraca", correto: false } ]
  },
   {
    pergunta: "O que são nebulosas?",
    respostas: [ { opcao: "Aglomerados de galáxias distantes", correto: false }, { opcao: "Nuvens interestelares de gás e poeira, muitas vezes berçários de estrelas", correto: true }, { opcao: "Estágios finais explosivos de estrelas massivas (Supernovas)", correto: false }, { opcao: "Pequenos corpos rochosos que orbitam o Sol, principalmente entre Marte e Júpiter", correto: false } ]
  },
  {
    pergunta: "Qual famoso telescópio espacial, lançado em 1990, forneceu imagens icônicas do universo?",
    respostas: [ { opcao: "Telescópio Espacial James Webb", correto: false }, { opcao: "Telescópio Espacial Hubble", correto: true }, { opcao: "Observatório de Raios-X Chandra", correto: false }, { opcao: "Telescópio Espacial Kepler", correto: false } ]
  },
  // Novas Perguntas Adicionadas
  {
    pergunta: "Qual objeto transnetuniano, anteriormente classificado como planeta, reside no Cinturão de Kuiper?",
    respostas: [ { opcao: "Ceres", correto: false }, { opcao: "Plutão", correto: true }, { opcao: "Vesta", correto: false }, { opcao: "Makemake", correto: false } ]
  },
  {
    pergunta: "Qual é o sistema estelar mais próximo do nosso Sol?",
    respostas: [ { opcao: "Sirius", correto: false }, { opcao: "Estrela de Barnard", correto: false }, { opcao: "Alpha Centauri", correto: true }, { opcao: "Wolf 359", correto: false } ]
  },
  {
    pergunta: "Onde se localiza o Olympus Mons, o maior vulcão conhecido no Sistema Solar?",
    respostas: [ { opcao: "Vênus", correto: false }, { opcao: "Terra (Havaí)", correto: false }, { opcao: "Marte", correto: true }, { opcao: "Lua Io (de Júpiter)", correto: false } ]
  },
  {
    pergunta: "Além do ano-luz, qual outra unidade é comumente usada por astrônomos para medir grandes distâncias interestelares (aproximadamente 3,26 anos-luz)?",
    respostas: [ { opcao: "Unidade Astronômica (UA)", correto: false }, { opcao: "Parsec (pc)", correto: true }, { opcao: "Quilômetro (km)", correto: false }, { opcao: "Milha Náutica", correto: false } ]
  },
  {
    pergunta: "Qual método de detecção de exoplanetas mede a pequena diminuição no brilho de uma estrela quando um planeta passa na frente dela (do nosso ponto de vista)?",
    respostas: [ { opcao: "Método da Velocidade Radial", correto: false }, { opcao: "Método de Trânsito", correto: true }, { opcao: "Microlente Gravitacional", correto: false }, { opcao: "Astrometria", correto: false } ]
  },
  {
    pergunta: "Qual tipo de galáxia, como a Via Láctea, é caracterizada por braços em forma de disco que se originam de um bojo central?",
    respostas: [ { opcao: "Galáxia Elíptica", correto: false }, { opcao: "Galáxia Irregular", correto: false }, { opcao: "Galáxia Espiral", correto: true }, { opcao: "Galáxia Lenticular", correto: false } ]
  },
  {
    pergunta: "O que resta de uma estrela de baixa a média massa (como o Sol) após esgotar seu combustível nuclear e ejetar suas camadas externas?",
    respostas: [ { opcao: "Estrela de Nêutrons", correto: false }, { opcao: "Buraco Negro", correto: false }, { opcao: "Supernova Tipo II", correto: false }, { opcao: "Anã Branca", correto: true } ]
  },
  {
    pergunta: "Qual lua de Saturno é a única lua conhecida no Sistema Solar com uma atmosfera densa e evidências de corpos líquidos (hidrocarbonetos) em sua superfície?",
    respostas: [ { opcao: "Europa (Júpiter)", correto: false }, { opcao: "Titã", correto: true }, { opcao: "Ganimedes (Júpiter)", correto: false }, { opcao: "Encélado", correto: false } ]
  },
  {
    pergunta: "O que é a Radiação Cósmica de Fundo em Micro-ondas (CMB)?",
    respostas: [ { opcao: "O brilho remanescente observável do Big Bang", correto: true }, { opcao: "Emissão de rádio de pulsares distantes", correto: false }, { opcao: "Luz de fundo de todas as estrelas da Via Láctea", correto: false }, { opcao: "Interferência de satélites de comunicação", correto: false } ]
  },
  {
    pergunta: "Qual o termo para um padrão reconhecível de estrelas no céu que *não* é uma das 88 constelações oficialmente reconhecidas (ex: 'As Três Marias' ou 'Grande Carro')?",
    respostas: [ { opcao: "Aglomerado Estelar", correto: false }, { opcao: "Grupo Local", correto: false }, { opcao: "Asterismo", correto: true }, { opcao: "Nebulosa Difusa", correto: false } ]
  }
];

// PARTE 2: Pegando os elementos do HTML
const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim > span:first-of-type"); // Span da pontuação
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");
const btnReiniciar = document.getElementById("btnReiniciar");
const listaErrosElemento = document.getElementById("lista-erros");
const listaAcertosElemento = document.getElementById("lista-acertos");

// PARTE 3: Variáveis para controle do jogo
let indiceAtual = 0;
let acertos = 0;
let perguntasErradas = [];
let perguntasCertas = [];

// Função auxiliar para sanitizar HTML (evita XSS básico)
function sanitizarHTML(texto) {
    const temp = document.createElement('div');
    temp.textContent = texto;
    return temp.innerHTML;
}

// === NOVA FUNÇÃO: Embaralhar Array (Fisher-Yates shuffle) ===
function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // Escolhe um índice aleatório de 0 até i
        const j = Math.floor(Math.random() * (i + 1));
        // Troca os elementos array[i] e array[j]
        [array[i], array[j]] = [array[j], array[i]];
    }
}
// ===========================================================

// PARTE 4: Função para carregar uma nova pergunta
function carregarPergunta() {
  // Verifica se ainda há perguntas a serem exibidas
  if (indiceAtual < perguntas.length) {
      progressoElemento.innerHTML = `Pergunta ${indiceAtual + 1} de ${perguntas.length}`;
      const perguntaAtual = perguntas[indiceAtual];
      perguntaElemento.innerHTML = sanitizarHTML(perguntaAtual.pergunta);
      respostasElemento.innerHTML = "";

      // Embaralha as opções de resposta da pergunta atual também (opcional, mas bom!)
      const respostasEmbaralhadas = [...perguntaAtual.respostas]; // Cria cópia para não alterar original
      embaralharArray(respostasEmbaralhadas);

      respostasEmbaralhadas.forEach(resposta => {
        const botao = document.createElement("button");
        botao.classList.add("botao-resposta");
        botao.innerHTML = sanitizarHTML(resposta.opcao);

        botao.onclick = () => {
          const acertou = resposta.correto;
          // Usamos a pergunta do objeto original `perguntaAtual` para consistência nos resultados
          const perguntaTexto = perguntaAtual.pergunta;

          if (acertou) {
            acertos++;
            perguntasCertas.push(perguntaTexto);
          } else {
            // Encontra a resposta correta no array *original* da pergunta
            const respostaCorretaObj = perguntaAtual.respostas.find(r => r.correto === true);
            if (respostaCorretaObj) {
                 perguntasErradas.push({
                     pergunta: perguntaTexto,
                     respostaCorreta: respostaCorretaObj.opcao
                 });
            }
          }

          indiceAtual++;

          // Chama a próxima pergunta ou finaliza
          if (indiceAtual < perguntas.length) {
            carregarPergunta();
          } else {
            finalizarJogo();
          }
        };
        respostasElemento.appendChild(botao);
      });
  } else {
      // Caso algo inesperado ocorra e não haja perguntas
      console.error("Índice atual fora dos limites do array de perguntas.");
      finalizarJogo(); // Vai para a tela final mesmo assim
  }
}

// PARTE 5: Função para mostrar a tela final
function finalizarJogo() {
  textoFinal.innerHTML = `Fim de jogo! Você acertou ${acertos} de ${perguntas.length} perguntas.`;
  conteudo.style.display = "none";
  conteudoFinal.style.display = "flex";

  listaErrosElemento.innerHTML = "";
  listaAcertosElemento.innerHTML = "";

  // --- Preenche a lista de ERROS ---
  if (perguntasErradas.length > 0) {
    let htmlErros = "<h3>Perguntas Erradas:</h3><ul>";
    perguntasErradas.forEach((item, index) => {
      const perguntaSanitizada = sanitizarHTML(item.pergunta);
      const btnId = `ver-resposta-${index}`;
      const spanId = `resposta-${index}`;

      htmlErros += `
        <li>
          <span>${perguntaSanitizada}</span>
          <button class="ver-resposta-btn" id="${btnId}">Ver Resposta</button>
          <span class="resposta-correta-span" id="${spanId}"></span>
        </li>`;
    });
    htmlErros += "</ul>";
    listaErrosElemento.innerHTML = htmlErros;

    perguntasErradas.forEach((item, index) => {
      const btn = document.getElementById(`ver-resposta-${index}`);
      const span = document.getElementById(`resposta-${index}`);
      const respostaSanitizada = sanitizarHTML(item.respostaCorreta);

      if (btn && span) {
        btn.onclick = () => {
          span.textContent = ` ${respostaSanitizada}`;
          btn.disabled = true;
          btn.textContent = '✓ Vista';
        };
      }
    });
  } else {
    listaErrosElemento.innerHTML = "<h3>Perguntas Erradas:</h3><p style='text-align:center; padding:10px;'>Nenhuma! Ótimo trabalho!</p>";
  }

  // --- Preenche a lista de ACERTOS ---
  if (perguntasCertas.length > 0) {
    let htmlAcertos = "<h3>Perguntas Certas:</h3><ul>";
    perguntasCertas.forEach(perguntaTexto => {
      htmlAcertos += `<li>${sanitizarHTML(perguntaTexto)}</li>`;
    });
    htmlAcertos += "</ul>";
    listaAcertosElemento.innerHTML = htmlAcertos;
  } else {
     listaAcertosElemento.innerHTML = "<h3>Perguntas Certas:</h3><p style='text-align:center; padding:10px;'>Nenhuma pergunta acertada.</p>";
  }
}

// PARTE 6: Função para reiniciar o jogo (MODIFICADA)
function reiniciarJogo() {
  acertos = 0;
  indiceAtual = 0;
  perguntasErradas = [];
  perguntasCertas = [];
  listaErrosElemento.innerHTML = "";
  listaAcertosElemento.innerHTML = "";

  // === EMBARALHA AS PERGUNTAS ANTES DE RECOMEÇAR ===
  embaralharArray(perguntas);
  // =================================================

  conteudoFinal.style.display = "none";
  conteudo.style.display = "flex";
  carregarPergunta(); // Carrega a primeira pergunta (agora aleatória)
}

// PARTE 7: Adicionando o evento ao botão Reiniciar
btnReiniciar.addEventListener('click', reiniciarJogo);

// PARTE 8: Iniciando o jogo pela primeira vez
// === EMBARALHA AS PERGUNTAS ANTES DO PRIMEIRO JOGO ===
embaralharArray(perguntas);
// ====================================================
carregarPergunta(); // Carrega a primeira pergunta (aleatória)