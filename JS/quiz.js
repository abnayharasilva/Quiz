// quiz.js

// 🎓 Banco de perguntas divididas por tema
const temas = {
 ciencias: [
  {
    pergunta: "🌡️ Qual é a unidade de medida da temperatura no sistema internacional?",
    respostas: { a: "Celsius", b: "Kelvin", c: "Fahrenheit" },
    correta: "b"
  },
  {
    pergunta: "🌪️ O que causa os tornados?",
    respostas: { a: "Correntes de vento que colidem", b: "Erupções vulcânicas", c: "Ondas sísmicas" },
    correta: "a"
  },
  {
    pergunta: "🔬 O que é uma célula?",
    respostas: { a: "Um átomo com carga negativa", b: "A menor unidade da vida", c: "Um tipo de vírus" },
    correta: "b"
  },
  {
    pergunta: "🧪 Qual dos seguintes é um gás nobre?",
    respostas: { a: "Oxigênio", b: "Hélio", c: "Nitrogênio" },
    correta: "b"
  },
  {
    pergunta: "🪐 Qual planeta é conhecido como o 'planeta vermelho'?",
    respostas: { a: "Júpiter", b: "Marte", c: "Saturno" },
    correta: "b"
  },
  {
    pergunta: "⚡ O que é eletricidade?",
    respostas: { a: "Movimento de elétrons", b: "Movimento de prótons", c: "Movimento de nêutrons" },
    correta: "a"
  },
  {
    pergunta: "🌿 Qual gás as plantas absorvem durante a fotossíntese?",
    respostas: { a: "Oxigênio", b: "Nitrogênio", c: "Dióxido de carbono" },
    correta: "c"
  },
  {
    pergunta: "💧 Qual é a fórmula da água?",
    respostas: { a: "CO₂", b: "H₂O", c: "O₂" },
    correta: "b"
  },
  {
    pergunta: "🧬 Qual é o nome da molécula que carrega a informação genética?",
    respostas: { a: "DNA", b: "RNA", c: "ATP" },
    correta: "a"
  },
  {
    pergunta: "☀️ Qual é a principal fonte de energia para a Terra?",
    respostas: { a: "Eletricidade", b: "Sol", c: "Vento" },
    correta: "b"
  },
  {
    pergunta: "🔭 Quem formulou a teoria da gravidade?",
    respostas: { a: "Galileu Galilei", b: "Isaac Newton", c: "Albert Einstein" },
    correta: "b"
  },
  {
    pergunta: "🌋 O que é magma?",
    respostas: { a: "Terra derretida", b: "Gelo vulcânico", c: "Rocha fundida" },
    correta: "c"
  },
  {
    pergunta: "🌌 O que é uma galáxia?",
    respostas: { a: "Um tipo de estrela", b: "Um conjunto de planetas", c: "Um conjunto de estrelas, gás e poeira" },
    correta: "c"
  },
  {
    pergunta: "🧠 Qual órgão controla todas as funções do corpo humano?",
    respostas: { a: "Coração", b: "Pulmões", c: "Cérebro" },
    correta: "c"
  },
  {
    pergunta: "🧫 Qual é o nome do processo de divisão celular?",
    respostas: { a: "Meiose", b: "Mitose", c: "Fagocitose" },
    correta: "b"
  },
  {
    pergunta: "🧯 Qual dos seguintes é usado para apagar fogo?",
    respostas: { a: "Ácido", b: "Areia", c: "Extintor de CO₂" },
    correta: "c"
  },
  {
    pergunta: "🌬️ Qual gás é mais abundante na atmosfera da Terra?",
    respostas: { a: "Oxigênio", b: "Nitrogênio", c: "Gás carbônico" },
    correta: "b"
  },
  {
    pergunta: "🌎 Qual camada da Terra é sólida e externa?",
    respostas: { a: "Núcleo", b: "Manto", c: "Crosta" },
    correta: "c"
  },
  {
    pergunta: "🧮 Qual destas partículas é negativa?",
    respostas: { a: "Próton", b: "Nêutron", c: "Elétron" },
    correta: "c"
  },
  {
    pergunta: "🪰 Qual organismo é considerado decompositor?",
    respostas: { a: "Cogumelo", b: "Abelha", c: "Formiga" },
    correta: "a"
  }
],
  cultura: [
  {
    pergunta: "🎨 Quem pintou a obra 'Guernica'?",
    respostas: { a: "Salvador Dalí", b: "Pablo Picasso", c: "Claude Monet" },
    correta: "b"
  },
  {
    pergunta: "🎶 Qual é o gênero musical originado no estado da Bahia, Brasil?",
    respostas: { a: "Forró", b: "Axé", c: "Samba" },
    correta: "b"
  },
  {
    pergunta: "🎬 Qual diretor é conhecido pelos filmes 'A Origem' e 'Interestelar'?",
    respostas: { a: "Steven Spielberg", b: "James Cameron", c: "Christopher Nolan" },
    correta: "c"
  },
  {
    pergunta: "📚 Quem escreveu 'Dom Casmurro'?",
    respostas: { a: "Machado de Assis", b: "José de Alencar", c: "Clarice Lispector" },
    correta: "a"
  },
  {
    pergunta: "🗿 Onde estão localizadas as famosas estátuas Moai?",
    respostas: { a: "Ilha de Páscoa", b: "Stonehenge", c: "Egito" },
    correta: "a"
  },
  {
    pergunta: "🎭 O que é o Teatro Kabuki?",
    respostas: { a: "Dança tradicional da Índia", b: "Ópera chinesa", c: "Teatro clássico japonês" },
    correta: "c"
  },
  {
    pergunta: "🍷 Em que país foi criado o vinho do Porto?",
    respostas: { a: "Espanha", b: "Portugal", c: "Itália" },
    correta: "b"
  },
  {
    pergunta: "🕌 Qual cidade é considerada sagrada por três grandes religiões: judaísmo, cristianismo e islamismo?",
    respostas: { a: "Jerusalém", b: "Meca", c: "Roma" },
    correta: "a"
  },
  {
    pergunta: "📺 Qual série apresenta o personagem Sheldon Cooper?",
    respostas: { a: "Friends", b: "The Big Bang Theory", c: "How I Met Your Mother" },
    correta: "b"
  },
  {
    pergunta: "🕺 Quem é considerado o 'Rei do Pop'?",
    respostas: { a: "Elvis Presley", b: "Michael Jackson", c: "Justin Timberlake" },
    correta: "b"
  },
  {
    pergunta: "📖 Qual obra de literatura brasileira traz a personagem Capitu?",
    respostas: { a: "O Cortiço", b: "Senhora", c: "Dom Casmurro" },
    correta: "c"
  },
  {
    pergunta: "🎥 Qual filme ganhou o Oscar de Melhor Filme em 1994?",
    respostas: { a: "Pulp Fiction", b: "Forrest Gump", c: "O Rei Leão" },
    correta: "b"
  },
  {
    pergunta: "🌍 Em qual continente nasceu o tango?",
    respostas: { a: "América do Sul", b: "Europa", c: "Ásia" },
    correta: "a"
  },
  {
    pergunta: "📷 Quem é conhecido por desenvolver a técnica de fotografia com luz e sombra chamada 'chiaroscuro'?",
    respostas: { a: "Leonardo da Vinci", b: "Rembrandt", c: "Caravaggio" },
    correta: "c"
  },
  {
    pergunta: "🎼 Em que país nasceu o compositor Ludwig van Beethoven?",
    respostas: { a: "Alemanha", b: "Áustria", c: "França" },
    correta: "a"
  }
],
  filmes: [
    {
      pergunta: "🎥 Em qual filme aparece Jack Sparrow?",
      respostas: { a: "Harry Potter", b: "Piratas do Caribe", c: "Star Wars" },
      correta: "b"
    },
    {
      pergunta: "🍿 Quem dirigiu Titanic?",
      respostas: { a: "James Cameron", b: "Spielberg", c: "Scorsese" },
      correta: "a"
    },
    {
      pergunta: "🎬 Qual é o nome do bruxo de óculos?",
      respostas: { a: "Ron", b: "Harry", c: "Draco" },
      correta: "b"
    },
    {
      pergunta: "🏆 Qual filme ganhou o Oscar de Melhor Filme em 2020?",
      respostas: { a: "parasita", b: "1917", c: "Coringa" },
      correta: "a"
    },
    {
      pergunta: "🧊 Quem interpretou Jack Dawson em Titanic?",
      respostas: { a: "Brad Pitt", b: "Leonardo Dicaprio", c: "Tom Cruise" },
      correta: "b"
    },
    {
      pergunta: "🚀 Quem é o vilão principal em Star Wars: Episódio IV?",
      respostas: { a: "Darth Vader", b: "Palpatine", c: "Draco" },
      correta: "a"
    },
    {
      pergunta: "🎬 Qual atriz protagonizou 'O Diabo Veste Prada'?",
      respostas: { a: "Meryl Streep", b: "Anne Hathaway", c: "Julia Roberts" },
      correta: "b"
    },
    {
      pergunta: "🦖 Qual filme apresenta o Parque dos Dinossauros?",
      respostas: { a: "Jurassic Park", b: "King Kong", c: "Godzilla" },
      correta: "a"
    },
    {
      pergunta: "🎵 Quem estrela o musical 'La La Land' ao lado de Emma Stone?",
      respostas: { a: "Ryan Gosling", b: "Hugh Jackman", c: "Zac Efron" },
      correta: "a"
    },
    {
      pergunta: "🦇 Qual é o alter ego do personagem Bruce Wayne?",
      respostas: { a: "Homem-Aranha", b: "Superman", c: "Batman" },
      correta: "c"
    },
    {
      pergunta: "🦁 Qual é o nome do personagem principal em 'O Rei Leão'?",
      respostas: { a: "Simba", b: "Mufasa", c: "Scar" },
      correta: "a"
    },
    {
      pergunta: "🧞‍♂️ Qual é o nome do vilão em 'Os Vingadores' (2012)?",
      respostas: { a: "Ultron", b: "Thanos", c: "Loki" },
      correta: "c"
    },
    {
      pergunta: "❄️ Qual filme popular apresenta a música 'Let It Go'?",
      respostas: { a: "Moana", b: "Frozen", c: "Encantado" },
      correta: "b"
    },
    {
      pergunta: "🧜‍♀️ Qual filme da Disney apresenta a personagem Ariel?",
      respostas: { a: "A Pequena Sereia", b: "A Bela e a Fera", c: "Aladdin" },
      correta: "a"
    },
    {
      pergunta: "🧲 Quem interpretou o Homem de Ferro no MCU?",
      respostas: { a: "Chris Evans", b: "Robert Downey Jr.", c: "Chris Hemsworth" },
      correta: "b"
    },
    {
      pergunta: "🐠 Qual é o filme em que um peixe-palhaço chamado Marlin procura seu filho?",
      respostas: { a: "Procurando Nemo", b: "Os Incríveis", c: "Vida de Inseto" },
      correta: "a"
    }
  ],
  // 🖼️ Tema: Arte e Literatura
  arteLiteratura: [
    {
      pergunta: "📖 Quem escreveu 'Dom Casmurro'?",
      respostas: { a: "Machado de Assis", b: "Carlos Drummond", c: "Clarice Lispector" },
      correta: "a"
    },
    {
      pergunta: "🖌️ Qual pintor é conhecido por cortar a própria orelha?",
      respostas: { a: "Picasso", b: "Van Gogh", c: "Monet" },
      correta: "b"
    },
    {
      pergunta: "📚 Qual é o gênero literário de 'O Senhor dos Anéis'?",
      respostas: { a: "Ficção científica", b: "Fantasia", c: "Romance histórico" },
      correta: "b"
    },
    {
      pergunta: "🎨 O que é cubismo?",
      respostas: { a: "Técnica musical", b: "Estilo literário", c: "Movimento artístico visual" },
      correta: "c"
    },
    {
      pergunta: "📖 Quem escreveu 'A Hora da Estrela'?",
      respostas: { a: "Cecília Meireles", b: "Clarice Lispector", c: "Rachel de Queiroz" },
      correta: "b"
    },
    {
      pergunta: "🖼️ Qual artista é conhecido pelas obras de girassóis?",
      respostas: { a: "Monet", b: "Van Gogh", c: "Da Vinci" },
      correta: "b"
    },
    {
      pergunta: "🎭 Shakespeare nasceu em qual país?",
      respostas: { a: "França", b: "Alemanha", c: "Inglaterra" },
      correta: "c"
    },
    {
      pergunta: "📚 O que é uma fábula?",
      respostas: { a: "História com animais e moral", b: "Lenda urbana", c: "Livro técnico" },
      correta: "a"
    },
    {
      pergunta: "🖌️ Quem pintou a 'Mona Lisa'?",
      respostas: { a: "Michelangelo", b: "Da Vinci", c: "Rafael" },
      correta: "b"
    },
    {
      pergunta: "📖 Qual é o nome do bruxo em 'O Hobbit'?",
      respostas: { a: "Gandalf", b: "Dumbledore", c: "Saruman" },
      correta: "a"
    },
    {
      pergunta: "🖼️ O movimento surrealista é associado a qual artista?",
      respostas: { a: "Salvador Dalí", b: "Frida Kahlo", c: "Van Gogh" },
      correta: "a"
    },
    {
      pergunta: "📘 Qual autor brasileiro escreveu 'Capitães da Areia'?",
      respostas: { a: "Graciliano Ramos", b: "Jorge Amado", c: "Monteiro Lobato" },
      correta: "b"
    },
    {
      pergunta: "🎨 Qual pintor é famoso por pinturas de bailarinas?",
      respostas: { a: "Degas", b: "Goya", c: "Kandinsky" },
      correta: "a"
    },
    {
      pergunta: "📚 Machado de Assis é um autor do século...",
      respostas: { a: "XX", b: "XIX", c: "XVIII" },
      correta: "b"
    },
    {
      pergunta: "📖 Quem escreveu 'Cem Anos de Solidão'?",
      respostas: { a: "Gabriel García Márquez", b: "Mario Vargas Llosa", c: "Pablo Neruda" },
      correta: "a"
    }
  ],

  // 🌱 Tema: Meio Ambiente
  meioAmbiente: [
    {
      pergunta: "🌍 O que significa efeito estufa?",
      respostas: { a: "Resfriamento do planeta", b: "Aquecimento por gases", c: "Movimento tectônico" },
      correta: "b"
    },
    {
      pergunta: "🌱 Qual é a principal causa do desmatamento da Amazônia?",
      respostas: { a: "Turismo", b: "Pecuária", c: "Pesca" },
      correta: "b"
    },
    {
      pergunta: "🌊 O plástico nos oceanos prejudica principalmente...",
      respostas: { a: "Pinguins", b: "Peixes", c: "Mamíferos terrestres" },
      correta: "b"
    },
    {
      pergunta: "🍃 Qual gás está associado ao aquecimento global?",
      respostas: { a: "Oxigênio", b: "CO₂", c: "Hidrogênio" },
      correta: "b"
    },
    {
      pergunta: "🌞 Qual fonte de energia é renovável?",
      respostas: { a: "Carvão", b: "Solar", c: "Petróleo" },
      correta: "b"
    },
    {
      pergunta: "🌱 O que são espécies em extinção?",
      respostas: { a: "Espécies que dominam ecossistemas", b: "Espécies em risco de desaparecer", c: "Espécies invasoras" },
      correta: "b"
    },
    {
      pergunta: "🗑️ O que significa 'reciclar'?",
      respostas: { a: "Queimar resíduos", b: "Reutilizar materiais", c: "Enterrar lixo orgânico" },
      correta: "b"
    },
    {
      pergunta: "🌽 A agricultura orgânica evita...",
      respostas: { a: "Tratores", b: "Fertilizantes naturais", c: "Agrotóxicos" },
      correta: "c"
    },
    {
      pergunta: "🚰 A escassez de água é causada por...",
      respostas: { a: "Uso consciente", b: "Poluição e desperdício", c: "Chuvas frequentes" },
      correta: "b"
    },
    {
      pergunta: "🌧️ Chuva ácida é causada por...",
      respostas: { a: "Gás carbônico", b: "Oxigênio", c: "Poluentes industriais" },
      correta: "c"
    },
    {
      pergunta: "🌳 O reflorestamento ajuda a...",
      respostas: { a: "Aumentar desertos", b: "Manter biodiversidade", c: "Produzir plástico" },
      correta: "b"
    },
    {
      pergunta: "🔥 Incêndios florestais são causados principalmente por...",
      respostas: { a: "Relâmpagos", b: "Ação humana", c: "Erosão" },
      correta: "b"
    },
    {
      pergunta: "🌡️ O que é aquecimento global?",
      respostas: { a: "Frio intenso", b: "Degelo polar", c: "Elevação da temperatura do planeta" },
      correta: "c"
    },
    {
      pergunta: "📦 O que são resíduos sólidos?",
      respostas: { a: "Gases industriais", b: "Líquidos tóxicos", c: "Lixo seco como papel e plástico" },
      correta: "c"
    },
    {
      pergunta: "🌎 Qual é o dia internacional da Terra?",
      respostas: { a: "22 de abril", b: "5 de junho", c: "8 de março" },
      correta: "a"
    }
  ],
  esportes: [
    {
      pergunta: "⚽ Em que país nasceu o futebol?",
      respostas: { a: "Alemanha", b: "Inglaterra", c: "Brasil" },
      correta: "b"
    },
    {
      pergunta: "🏀 Quantos jogadores há em um time de basquete?",
      respostas: { a: "6", b: "7", c: "5" },
      correta: "c"
    },
    {
      pergunta: "🎾 O tênis é jogado com qual instrumento?",
      respostas: { a: "Raquete", b: "Taco", c: "Bola de mão" },
      correta: "a"
    },
    {
      pergunta: "🏐 O vôlei foi criado em qual país?",
      respostas: { a: "Estados Unidos", b: "Japão", c: "Brasil" },
      correta: "a"
    },
    {
      pergunta: "🏅 Quem é conhecido como 'Pelé'?",
      respostas: { a: "Neymar", b: "Edson Arantes", c: "Romário" },
      correta: "b"
    },
    {
      pergunta: "🥊 O boxe utiliza quais partes do corpo?",
      respostas: { a: "Pés", b: "Cabeça", c: "Punhos" },
      correta: "c"
    },
    {
      pergunta: "🚴‍♀️ O Tour de France é uma competição de...",
      respostas: { a: "Carros", b: "Ciclismo", c: "Corrida a pé" },
      correta: "b"
    },
    {
      pergunta: "⚽ Quantas Copas do Mundo o Brasil já venceu?",
      respostas: { a: "5", b: "6", c: "4" },
      correta: "a"
    },
    {
      pergunta: "🏊 Quantos estilos de nado existem na natação olímpica?",
      respostas: { a: "3", b: "4", c: "5" },
      correta: "b"
    },
    {
      pergunta: "🏓 O pingue-pongue também é conhecido como...",
      respostas: { a: "Tênis de mesa", b: "Badminton", c: "Squash" },
      correta: "a"
    },
    {
      pergunta: "🥇 O que representa uma medalha de ouro?",
      respostas: { a: "2º lugar", b: "1º lugar", c: "3º lugar" },
      correta: "b"
    },
    {
      pergunta: "🎯 O objetivo principal no tiro com arco é...",
      respostas: { a: "Acertar no alvo", b: "Velocidade", c: "Precisão sonora" },
      correta: "a"
    },
    {
      pergunta: "🚴 Qual é o nome do esporte com bicicletas em pista fechada?",
      respostas: { a: "Mountain bike", b: "BMX", c: "Ciclismo de pista" },
      correta: "c"
    },
    {
      pergunta: "🥋 Qual esporte utiliza faixas coloridas como graduação?",
      respostas: { a: "Judô", b: "Atletismo", c: "Ginástica" },
      correta: "a"
    },
    {
      pergunta: "⚽ Qual jogador é famoso por ganhar 7 bolas de ouro?",
      respostas: { a: "Cristiano Ronaldo", b: "Lionel Messi", c: "Ronaldinho" },
      correta: "b"
    }
  ]
};

// 🔍 Captura o tema da URL (ex: quiz.html?tema=cultura)
const urlParams = new URLSearchParams(window.location.search);
const temaSelecionado = urlParams.get("tema");

// 🔢 Variáveis globais para controle do quiz
let perguntasSelecionadas = [];
let indiceAtual = 0;
let pontos = 0;

// ⚙️ Função que prepara até 5 perguntas aleatórias do tema escolhido
function prepararPerguntas() {
  // Garante que o temaSelecionado é uma chave válida em 'temas'
  if (!(temaSelecionado in temas)) {
    alert("⚠️ Tema inválido.");
    return;
  }

  const todas = temas[temaSelecionado];

  // Protege caso o tema seja inválido ou sem perguntas cadastradas
  if (!todas || todas.length === 0) {
    alert("⚠️ Tema sem perguntas cadastradas.");
    return;
  }

  // Embaralha e seleciona as primeiras 5 perguntas
  perguntasSelecionadas = todas.sort(() => Math.random() - 0.5).slice(0, 5);

  // Garante que há pelo menos uma pergunta selecionada
  if (perguntasSelecionadas.length === 0) {
    alert("⚠️ Não foi possível selecionar perguntas para este tema.");
    return;
  }
}

// 📄 Exibe a pergunta atual com suas alternativas
function mostrarPergunta() {
  // Verifica se há perguntas selecionadas antes de prosseguir
  if (perguntasSelecionadas.length === 0) {
    console.error("❌ Nenhuma pergunta selecionada.");
    document.getElementById("quiz").innerHTML = "<p>Nenhuma pergunta disponível.</p>";
    return;
  }

  const pergunta = perguntasSelecionadas[indiceAtual];

  // Protege contra acessos inválidos
  if (!pergunta || !pergunta.respostas) {
    console.error("❌ Pergunta inválida.");
    document.getElementById("quiz").innerHTML = "<p>Erro ao carregar a pergunta.</p>";
    return;
  }

  const quiz = document.getElementById("quiz");
  let opcoes = "";

  // Monta os botões de resposta
  for (let letra in pergunta.respostas) {
    opcoes += `<label>
      <input type="radio" name="resposta" value="${letra}">
      ${letra}) ${pergunta.respostas[letra]}
    </label><br>`;
  }

  // Exibe pergunta e botão de próxima
  quiz.innerHTML = `
    <div class="pergunta">
      <p>${pergunta.pergunta}</p>
      ${opcoes}
    </div>
    <button onclick="verificarEProxima()">Próxima</button>
  `;
}

// ✅ Verifica a resposta e avança para a próxima pergunta
function verificarEProxima() {
  // Garante que ainda há perguntas a serem respondidas
  if (indiceAtual >= perguntasSelecionadas.length) {
    mostrarResultadoFinal();
    return;
  }

  const perguntaAtual = perguntasSelecionadas[indiceAtual];
  const selecionada = document.querySelector('input[name="resposta"]:checked');

  // Verifica se uma resposta foi selecionada
  if (!selecionada) {
    alert("Por favor, selecione uma resposta.");
    return;
  }

  // Verifica se a resposta está correta
  if (selecionada.value === perguntaAtual.correta) {
    pontos++;
  }

  indiceAtual++; // avança índice

  // Atualiza placar visualmente
  document.getElementById("placar").innerText = `Placar: ${pontos} ponto(s)`;

  // Mostra próxima pergunta ou resultado final
  if (indiceAtual < perguntasSelecionadas.length) {
    mostrarPergunta();
  } else {
    mostrarResultadoFinal();
  }
}

// 🏁 Exibe a tela de resultado final
function mostrarResultadoFinal() {
  const nome = document.getElementById("nome").value || "Anônimo";
  const total = perguntasSelecionadas.length;

  document.getElementById("quiz").innerHTML = "";
  document.getElementById("resultado").innerHTML = `
    <p>🎯 ${nome}, você finalizou o tema <strong>${temaSelecionado}</strong>.</p>
    <p>✅ Pontuação final: <strong>${pontos}</strong> de ${total} perguntas.</p>
  `;

  // Cria o objeto do jogador
  const novoRegistro = {
    nome,
    tema: temaSelecionado,
    pontuacao: pontos,
    total,
    data: new Date().toLocaleString()
  };

  // Adiciona ao histórico salvo no navegador
  let ranking = JSON.parse(localStorage.getItem("historicoJogadores")) || [];
  ranking.push(novoRegistro);
  localStorage.setItem("historicoJogadores", JSON.stringify(ranking));

  // Limita o histórico a 10 registros (opcional)
  if (ranking.length > 10) {
    ranking = ranking.slice(ranking.length - 10); // Mantém os 10 últimos
    localStorage.setItem("historicoJogadores", JSON.stringify(ranking));
  }
}

// 🚀 Inicia o quiz ao carregar a página
window.onload = () => {
  prepararPerguntas(); // seleciona perguntas
  // Verifica se prepararPerguntas foi bem-sucedido antes de mostrar a primeira pergunta
  if (perguntasSelecionadas.length > 0) {
    mostrarPergunta();   // exibe primeira pergunta
  }
};