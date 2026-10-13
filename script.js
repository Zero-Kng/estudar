// Cada simulado tem título, descrição e a lista de questões.
// Em cada questão, "correta" é o índice da alternativa certa (0 = a, 1 = b, ...).
// Para adicionar um simulado novo, acrescente outro objeto no array "simulados" lá embaixo.

// Questões extraídas de "simulado-matematica e logica.md" e "simulado-matematica e logica 2.md".
const questoesSimulado1 = [
  {
    tema: "Aprofundamento de Funções",
    enunciado: "<p>Funções periódicas têm um padrão que se repete em intervalos regulares. Qual é o período da função f(x) = sen(2πx/5)?</p>",
    alternativas: ["2π", "5", "10", "π/5", "5π"],
    correta: 1,
    explicacao: "<p>Para sen(kx), o período é 2π/|k|. Com k = 2π/5, o período é 2π ÷ (2π/5) = 5.</p>"
  },
  {
    tema: "Cálculo de Predicados",
    enunciado: "<p>Dadas as sentenças abertas p(x): x² − 6x + 5 = 0 e q(x): x² − 13x + 36 = 0, em ℝ, qual é o conjunto-verdade de p(x) ∨ q(x)?</p>",
    alternativas: ["{1, 5}", "{4, 9}", "{1, 4, 5, 9}", "∅", "{5}"],
    correta: 2,
    explicacao: "<p>p(x) tem raízes 1 e 5 (soma 6, produto 5). q(x) tem raízes 4 e 9 (soma 13, produto 36). O conectivo ∨ corresponde à união dos conjuntos-verdade: {1, 4, 5, 9}. Se fosse ∧, seria a interseção, que é vazia.</p>"
  },
  {
    tema: "Cálculo Proposicional",
    enunciado: "<p>(CESGRANRIO/2007, TCE/RO, Analista de Sistemas) Assinale a alternativa que apresenta uma tautologia.</p>",
    alternativas: ["p ⟶ (p ∧ q)", "(p ∨ q) ⟶ q", "(p ∧ q) ⟶ q", "p ∧ ¬p", "(p ⟶ q) ⟶ p"],
    correta: 2,
    explicacao: "<p>Uma condicional só é falsa com antecedente V e consequente F. Em (p ∧ q) ⟶ q, o antecedente V exige q = V, então o consequente nunca é F. As demais falham: (a) e (b) com p = V e q = F; (d) é contradição; (e) com p = F.</p>"
  },
  {
    tema: "Métodos de Demonstração",
    enunciado: "<p>Analisando a proposição \"Algum dia será possível colonizar Marte\", avalie as asserções:</p>" +
      "<p>I. A sentença é uma proposição.</p>" +
      "<p class=\"porque\">PORQUE</p>" +
      "<p>II. Ela é uma sentença declarativa à qual se pode atribuir um único valor lógico, V ou F, ainda que hoje ele seja desconhecido.</p>",
    alternativas: [
      "As duas asserções são proposições verdadeiras, e a segunda é uma justificativa correta da primeira.",
      "As duas asserções são proposições verdadeiras, mas a segunda não é uma justificativa correta da primeira.",
      "A primeira asserção é verdadeira, e a segunda é falsa.",
      "A primeira asserção é falsa, e a segunda é verdadeira.",
      "As duas asserções são falsas."
    ],
    correta: 0,
    explicacao: "<p>Proposição é toda sentença declarativa com um único valor lógico (princípios da não contradição e do terceiro excluído). Desconhecer o valor hoje não impede que ele exista. II é exatamente o motivo pelo qual I é verdadeira.</p>" +
      "<p><strong>Por que a (b) está errada:</strong> para testar se II justifica I, leia as duas juntas como \"I é verdade porque II\". Se II for a própria definição ou a regra que torna I verdadeira, a justificativa é correta. Aqui, II enuncia a definição de proposição aplicada à sentença, então ela explica I diretamente. A alternativa (b) só cabe quando II é verdadeira, mas fala de outra coisa e não explica I.</p>"
  },
  {
    tema: "Aprofundamento de Funções",
    enunciado: "<p>Seja f: ℝ → ℝ, definida por f(x) = 2x + 3. Assinale a alternativa correta.</p>",
    alternativas: [
      "f é bijetora e f⁻¹(3) = 0.",
      "f é injetora, mas não sobrejetora, e f⁻¹(3) = 0.",
      "f é bijetora e f⁻¹(3) = 9.",
      "f é sobrejetora, mas não injetora.",
      "f não admite inversa."
    ],
    correta: 0,
    explicacao: "<p>Função afim com coeficiente angular diferente de zero, de ℝ em ℝ, é injetora e sobrejetora, logo bijetora. f⁻¹(y) = (y − 3)/2, então f⁻¹(3) = 0. A alternativa (c) é a pegadinha: 9 é f(3), não f⁻¹(3).</p>"
  },
  {
    tema: "Teoria dos Conjuntos e Princípios de Contagem",
    enunciado: "<p>O conjunto solução do sistema abaixo pode ser representado por:</p>" +
      "<pre>x − 1 > 2x\n|x| < 2</pre>",
    alternativas: ["] −2; −1 [", "] −1; 2 [", "] −∞; −1 [", "] −2; 2 [", "∅"],
    correta: 0,
    explicacao: "<p>x − 1 > 2x resulta em x < −1. |x| < 2 resulta em −2 < x < 2. O sistema exige as duas condições ao mesmo tempo, então a solução é a interseção: ] −2; −1 [.</p>"
  },
  {
    tema: "Cálculo de Predicados",
    enunciado: "<p>Marque a alternativa correta que indica a estrutura de predicado da sentença \"Paula come chocolate\".</p>",
    alternativas: [
      "come(paula, chocolate).",
      "paula(come, chocolate).",
      "come(chocolate, paula).",
      "chocolate(paula).",
      "come(paula)."
    ],
    correta: 0,
    explicacao: "<p>O predicado é a relação (o verbo \"come\") e os argumentos são os termos, na ordem sujeito e objeto. come(chocolate, paula) significaria que o chocolate come Paula: a ordem dos argumentos importa.</p>"
  },
  {
    tema: "Teoria dos Conjuntos e Princípios de Contagem",
    enunciado: "<p>Dados os conjuntos A = {1; 3/2; 2; 3; 4} e B = {x ∈ ℕ | x é par e x ≤ 10}, quantos elementos possui A ∩ B?</p>",
    alternativas: ["1", "2", "3", "4", "5"],
    correta: 1,
    explicacao: "<p>B = {0, 2, 4, 6, 8, 10}. Em A, os únicos naturais pares são 2 e 4 (3/2 nem é natural). A ∩ B = {2, 4}, logo 2 elementos.</p>"
  },
  {
    tema: "Métodos de Demonstração",
    enunciado: "<p>Analisando a proposição \"Cada número racional não nulo possui um inverso multiplicativo racional\", avalie as asserções:</p>" +
      "<p>I. A proposição é verdadeira.</p>" +
      "<p class=\"porque\">PORQUE</p>" +
      "<p>II. Se a/b ∈ ℚ, com a ≠ 0 e b ≠ 0, então b/a ∈ ℚ e (a/b)·(b/a) = 1.</p>",
    alternativas: [
      "As duas asserções são proposições verdadeiras, e a segunda é uma justificativa correta da primeira.",
      "As duas asserções são proposições verdadeiras, mas a segunda não é uma justificativa correta da primeira.",
      "A primeira asserção é verdadeira, e a segunda é falsa.",
      "A primeira asserção é falsa, e a segunda é verdadeira.",
      "As duas asserções são falsas."
    ],
    correta: 0,
    explicacao: "<p>II é uma demonstração direta de I: exibe o inverso (b/a), mostra que ele é racional (razão de inteiros com denominador diferente de zero) e que o produto resulta em 1.</p>"
  },
  {
    tema: "Gráficos e Interpretações Gráficas",
    enunciado: "<p>Ao se trabalhar com conjuntos de números reais, é comum representá-los por intervalos. O conjunto {x ∈ ℝ | x ≤ −8} é representado por:</p>",
    alternativas: ["(−∞; −8].", "(−∞; −8).", "[−8; +∞).", "(−8; +∞).", "[−∞; −8]."],
    correta: 0,
    explicacao: "<p>x ≤ −8 inclui o −8 (colchete fechado) e não tem limite inferior. Infinito nunca recebe colchete fechado porque não é número real, o que elimina (e).</p>"
  }
];

const simulados = [
  {
    titulo: "Simulado 1",
    descricao: "Funções, predicados, lógica proposicional, demonstração, conjuntos e intervalos.",
    questoes: questoesSimulado1
  }
];

const LETRAS = ["a", "b", "c", "d", "e"];

let simuladoAtual = null;
let questoes = [];
let atual = 0;
let respostas = [];

const telaInicio = document.getElementById("inicio");
const telaQuiz = document.getElementById("quiz");
const telaGabarito = document.getElementById("gabarito");
const listaSimulados = document.getElementById("lista-simulados");
const nomeSimulado = document.getElementById("nome-simulado");
const cartaoQuestao = document.getElementById("questao");
const contador = document.getElementById("contador");
const barra = document.getElementById("barra-preenchida");
const btnAnterior = document.getElementById("btn-anterior");
const btnProxima = document.getElementById("btn-proxima");
const btnRefazer = document.getElementById("btn-refazer");
const listaGabarito = document.getElementById("lista-gabarito");

function mostrarTela(tela) {
  [telaInicio, telaQuiz, telaGabarito].forEach((t) => t.classList.toggle("oculta", t !== tela));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Tela inicial: um cartão por simulado, com os temas que ele cobre.
function mostrarInicio() {
  listaSimulados.innerHTML = "";
  simulados.forEach((simulado) => {
    const temas = [...new Set(simulado.questoes.map((q) => q.tema))];
    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = "opcao-simulado";
    botao.innerHTML =
      `<span class="opcao-topo">` +
        `<span class="opcao-titulo">${simulado.titulo}</span>` +
        `<span class="opcao-qtd">${simulado.questoes.length} questões</span>` +
      `</span>` +
      `<span class="opcao-descricao">${simulado.descricao}</span>` +
      `<span class="opcao-temas">${temas.map((t) => `<span class="tema">${t}</span>`).join("")}</span>` +
      `<span class="opcao-acao">Começar →</span>`;
    botao.addEventListener("click", () => iniciarSimulado(simulado));
    listaSimulados.appendChild(botao);
  });
  mostrarTela(telaInicio);
}

function iniciarSimulado(simulado) {
  simuladoAtual = simulado;
  questoes = simulado.questoes;
  atual = 0;
  respostas = new Array(questoes.length).fill(null);
  nomeSimulado.textContent = simulado.titulo;
  mostrarQuestao();
  mostrarTela(telaQuiz);
}

// Monta a lista de alternativas. No modo gabarito, marca certa (verde) e errada (vermelho).
function criarAlternativas(questao, indiceQuestao, modoGabarito) {
  const lista = document.createElement("ul");
  lista.className = "alternativas";

  questao.alternativas.forEach((texto, i) => {
    const item = document.createElement("li");
    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = "alternativa";

    const escolhida = respostas[indiceQuestao];
    let marcador = "";

    if (modoGabarito) {
      botao.disabled = true;
      if (i === questao.correta) {
        botao.classList.add("certa");
        marcador = escolhida === i ? "Sua resposta" : "Correta";
      } else if (i === escolhida) {
        botao.classList.add("errada");
        marcador = "Sua resposta";
      }
    } else {
      if (i === escolhida) botao.classList.add("selecionada");
      botao.addEventListener("click", () => escolher(i));
    }

    botao.innerHTML =
      `<span class="letra">${LETRAS[i]}</span>` +
      `<span class="texto">${texto}</span>` +
      (marcador ? `<span class="marcador">${marcador}</span>` : "");

    item.appendChild(botao);
    lista.appendChild(item);
  });

  return lista;
}

function mostrarQuestao() {
  const questao = questoes[atual];

  cartaoQuestao.innerHTML =
    `<span class="tema">${questao.tema}</span>` +
    `<div class="enunciado">${questao.enunciado}</div>`;
  cartaoQuestao.appendChild(criarAlternativas(questao, atual, false));

  contador.textContent = `Questão ${atual + 1} de ${questoes.length}`;
  barra.style.width = `${((atual + 1) / questoes.length) * 100}%`;

  btnAnterior.disabled = atual === 0;
  btnProxima.disabled = respostas[atual] === null;
  btnProxima.textContent = atual === questoes.length - 1 ? "Ver gabarito" : "Próxima";
}

function escolher(indice) {
  respostas[atual] = indice;
  mostrarQuestao();
}

function mostrarGabarito() {
  const acertos = respostas.filter((r, i) => r === questoes[i].correta).length;
  const proporcao = acertos / questoes.length;

  document.getElementById("acertos").textContent = acertos;
  document.getElementById("total").textContent = `/${questoes.length}`;
  document.getElementById("resultado-mensagem").textContent =
    proporcao === 1 ? "Gabaritou! Todas as respostas corretas." :
    proporcao >= 0.7 ? "Muito bom! Revise as questões em vermelho abaixo." :
    proporcao >= 0.5 ? "Bom caminho. Leia as explicações das que errou." :
    "Vale revisar o conteúdo. As explicações abaixo ajudam.";

  listaGabarito.innerHTML = "";
  questoes.forEach((questao, i) => {
    const acertou = respostas[i] === questao.correta;
    const cartao = document.createElement("article");
    cartao.className = "cartao";
    cartao.innerHTML =
      `<div class="cabecalho-gabarito">` +
        `<span class="numero">Questão ${i + 1}</span>` +
        `<span class="status ${acertou ? "status-certo" : "status-errado"}">${acertou ? "Acertou" : "Errou"}</span>` +
      `</div>` +
      `<span class="tema">${questao.tema}</span>` +
      `<div class="enunciado">${questao.enunciado}</div>`;
    cartao.appendChild(criarAlternativas(questao, i, true));

    const explicacao = document.createElement("div");
    explicacao.className = "explicacao";
    explicacao.innerHTML = questao.explicacao;
    cartao.appendChild(explicacao);

    listaGabarito.appendChild(cartao);
  });

  mostrarTela(telaGabarito);
}

btnAnterior.addEventListener("click", () => {
  if (atual > 0) {
    atual--;
    mostrarQuestao();
  }
});

btnProxima.addEventListener("click", () => {
  if (respostas[atual] === null) return;
  if (atual < questoes.length - 1) {
    atual++;
    mostrarQuestao();
  } else {
    mostrarGabarito();
  }
});

btnRefazer.addEventListener("click", () => iniciarSimulado(simuladoAtual));

document.querySelectorAll("[data-voltar]").forEach((botao) => {
  botao.addEventListener("click", mostrarInicio);
});

mostrarInicio();
