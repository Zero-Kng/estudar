// Questões das listas de exercícios da Sala de Avaliações da Estácio (disciplina ARA0105).
// A página das listas não mostra gabarito: as respostas e explicações abaixo foram resolvidas à parte.
// Questões quebradas na origem (enunciado ou alternativas inconsistentes) ficaram de fora.

const IMG = "https://imagens.prd.saladeavaliacoes.com.br/public%2Fimages%2F";

const ASSERCOES = [
  "As duas asserções são proposições verdadeiras, e a segunda é uma justificativa correta da primeira.",
  "As duas asserções são proposições verdadeiras, mas a segunda não é uma justificativa correta da primeira.",
  "A primeira asserção é uma proposição verdadeira, e a segunda é falsa.",
  "A primeira asserção é uma proposição falsa, e a segunda é verdadeira.",
  "Ambas as asserções são proposições falsas."
];

const listaConjuntos = [
  {
    tema: "Teoria dos Conjuntos e Princípios de Contagem",
    enunciado: "<p>O conceito geométrico de módulo permite interpretar a equação |x − 1| + |x − 3| = 4 da seguinte forma: para quais valores de x a soma das distâncias de x a 1 e de x a 3 vale 4? Quantos elementos possui o conjunto-solução da equação?</p>",
    alternativas: ["0", "1", "2", "3", "4"],
    correta: 2,
    explicacao: "<p>Entre 1 e 3 a soma das distâncias é sempre 2, então a solução está fora desse trecho. À esquerda: (1 − x) + (3 − x) = 4 → x = 0. À direita: (x − 1) + (x − 3) = 4 → x = 4. Conjunto-solução {0, 4}: 2 elementos.</p>"
  },
  {
    tema: "Teoria dos Conjuntos e Princípios de Contagem",
    enunciado: "<p>Assinale a opção que contém uma igualdade verdadeira, quaisquer que sejam os conjuntos A, B e C.</p>",
    alternativas: [
      "(A ∪ B) − A = B",
      "A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)",
      "(A − B) ⊂ B",
      "(A − B) ∪ (B − A) = A ∪ B",
      "A − (B ∪ C) = (A − B) ∪ (A − C)"
    ],
    correta: 1,
    explicacao: "<p>(b) é a propriedade distributiva da união sobre a interseção. As outras falham: (a) tira de B o que também está em A; (c) A − B não tem nenhum elemento de B; (d) o lado esquerdo exclui A ∩ B; (e) pela lei de De Morgan o certo é (A − B) <strong>∩</strong> (A − C).</p>"
  },
  {
    tema: "Teoria dos Conjuntos e Princípios de Contagem",
    enunciado: "<p>Dados os conjuntos A = ] 1; 3/2 [ e B = [ −1; 5/3 ], o conjunto A ∪ B pode ser representado pelo intervalo:</p>",
    alternativas: ["[ −1; 5/3 ]", "] 1; 5/3 ]", "[ −1; 3/2 [", "] 1; −1 [", "[ 1; 5/3 ]"],
    correta: 0,
    explicacao: "<p>A = ]1; 1,5[ está inteiro dentro de B = [−1; 1,67]. A união de um conjunto com outro que o contém é o maior deles: [−1; 5/3].</p>"
  },
  {
    tema: "Teoria dos Conjuntos e Princípios de Contagem",
    enunciado: "<p>Sejam os conjuntos A = {1, 2, 3, −1, −5} e B = {−3, −2, 1, 3}. A diferença A − B resulta em:</p>",
    alternativas: ["{−3, −2}", "{1, 3}", "{2, −1, −5}", "{−5, −3, −2, −1, 1, 2, 3}", "{1, 2, 3}"],
    correta: 2,
    explicacao: "<p>A − B são os elementos de A que não estão em B. Tirando 1 e 3 (que estão em B), sobram {2, −1, −5}. A alternativa (a) é B − A e (b) é A ∩ B.</p>"
  },
  {
    tema: "Teoria dos Conjuntos e Princípios de Contagem",
    enunciado: "<p>Deseja-se construir senhas de 4 caracteres utilizando exclusivamente as 26 letras minúsculas, os 10 algarismos e 3 símbolos especiais. Podendo haver repetição de caracteres, qual o total de senhas possíveis?</p>",
    alternativas: ["39 × 4", "4<sup>39</sup>", "39<sup>4</sup>", "4<sup>4</sup>", "39 × 38 × 37 × 36"],
    correta: 2,
    explicacao: "<p>São 26 + 10 + 3 = 39 caracteres. Cada uma das 4 posições pode ser qualquer um deles (há repetição): 39 × 39 × 39 × 39 = 39<sup>4</sup>. A (e) seria sem repetição.</p>"
  },
  {
    tema: "Teoria dos Conjuntos e Princípios de Contagem",
    enunciado: "<p>Quantos são os anagramas da palavra SUCESSO?</p>",
    alternativas: ["5040", "2520", "1680", "840", "210"],
    correta: 3,
    explicacao: "<p>SUCESSO tem 7 letras, com o S aparecendo 3 vezes. Permutação com repetição: 7! / 3! = 5040 / 6 = 840.</p>"
  },
  {
    tema: "Teoria dos Conjuntos e Princípios de Contagem",
    enunciado: "<p>Um dado dodecaédrico tem 12 faces numeradas de 1 a 12. Se jogarmos simultaneamente um dado cúbico normal e um dado dodecaédrico, quantas são as possíveis somas das faces em uma única jogada?</p>",
    alternativas: ["60", "17", "16", "12", "5"],
    correta: 1,
    explicacao: "<p>A menor soma é 1 + 1 = 2 e a maior é 6 + 12 = 18. Todos os valores intermediários são possíveis, então há 18 − 2 + 1 = 17 somas. Cuidado: 72 (6 × 12) seria o número de resultados, não de somas.</p>"
  },
  {
    tema: "Teoria dos Conjuntos e Princípios de Contagem",
    enunciado: "<p>Quantos subconjuntos possui um conjunto composto por exatamente 8 elementos distintos?</p>",
    alternativas: ["64", "128", "256", "512", "56"],
    correta: 2,
    explicacao: "<p>Um conjunto com n elementos tem 2<sup>n</sup> subconjuntos (cada elemento entra ou não). 2<sup>8</sup> = 256.</p>"
  },
  {
    tema: "Teoria dos Conjuntos e Princípios de Contagem",
    enunciado: "<p>Uma cafeteria oferece 10 tipos diferentes de doces. Um cliente deseja escolher 3 doces distintos para montar uma caixa degustação, e a ordem de escolha não altera a caixa. Quantas caixas diferentes podem ser formadas?</p>",
    alternativas: ["720", "120", "30", "1000", "60"],
    correta: 1,
    explicacao: "<p>Sem repetição e sem importar a ordem é combinação: C(10, 3) = 10! / (3! · 7!) = 720 / 6 = 120. O 720 seria arranjo (com ordem).</p>"
  },
  {
    tema: "Teoria dos Conjuntos e Princípios de Contagem",
    enunciado: "<p>O número de anagramas distintos da palavra \"arranjo\", considerando as repetições de suas letras, é:</p>",
    alternativas: ["5040", "2520", "1260", "620", "720"],
    correta: 2,
    explicacao: "<p>ARRANJO tem 7 letras, com A repetido 2 vezes e R repetido 2 vezes: 7! / (2! · 2!) = 5040 / 4 = 1260.</p>"
  }
];

const listaGraficos = [
  {
    tema: "Gráficos e Interpretações Gráficas",
    enunciado: "<p>Dado o conjunto C = {x ∈ ℝ | x ≤ −8}, a notação de intervalo que representa este conjunto é:</p>",
    alternativas: ["(−∞; −8].", "(−∞; −8[.", "[−8; −∞).", "[−∞; −8].", "(−∞; −8."],
    correta: 0,
    explicacao: "<p>x ≤ −8 inclui o −8 (colchete fechado) e não tem limite inferior. Infinito sempre fica aberto, porque não é número real.</p>"
  },
  {
    tema: "Gráficos e Interpretações Gráficas",
    enunciado: "<p>Traçando dois eixos perpendiculares OX (abscissas) e OY (ordenadas), o plano fica dividido em quatro quadrantes:</p>" +
      `<img class="figura" src="${IMG}20250716135223-322_public_images_20250415192740-858_quest6-graficos-e-interp-graficas.png" alt="Plano cartesiano: 1º quadrante (+,+), 2º (−,+), 3º (−,−), 4º (+,−)">` +
      "<p>Considere as sentenças:<br>I. (0, 1) = (1, 0)<br>J. (−1, 4) ∈ 3º quadrante<br>K. (2, 0) ∈ eixo y<br>L. (−3, −2) ∈ 3º quadrante</p>",
    alternativas: [
      "I, J e K são falsas e L é verdadeira.",
      "I, J, K e L são falsas.",
      "I e K são falsas e L e J são verdadeiras.",
      "I, J, K e L são verdadeiras.",
      "I e J são falsas e L e K são verdadeiras."
    ],
    correta: 0,
    explicacao: "<p>I: par ordenado depende da ordem, (0, 1) ≠ (1, 0). J: x negativo e y positivo é 2º quadrante. K: y = 0 fica no eixo <strong>x</strong>. L: os dois negativos, 3º quadrante. Só L é verdadeira.</p>"
  },
  {
    tema: "Gráficos e Interpretações Gráficas",
    enunciado: "<p>Para uma relação ser considerada função ela precisa satisfazer uma condição. Verifique se as relações abaixo são funções:</p>" +
      "<p>I. f(x) = 2x + 3<br>II. g(x) = x² + 3<br>III. k(x) = x<br>IV. m(x) = x² − 4x + 4</p>" +
      "<p>É correto o que se afirma em:</p>",
    alternativas: ["I, II, III e IV.", "Apenas I e II.", "Apenas III e IV.", "Apenas I, III e IV.", "Apenas IV."],
    correta: 0,
    explicacao: "<p>A condição é: cada x do domínio tem <strong>um único</strong> y. Todas são expressões do tipo y = (algo em x), e cada x gera exatamente um valor, então as quatro são funções. Ser quadrática (II e IV) não impede: dois x podem ter o mesmo y, o contrário é que não pode.</p>"
  },
  {
    tema: "Gráficos e Interpretações Gráficas",
    enunciado: "<p>No gráfico a seguir tem-se o número de vagas fechadas a cada mês na indústria paulista, no ano de 1998. A partir desse gráfico, conclui-se corretamente que, em relação à indústria paulista no ano de 1998:</p>" +
      `<img class="figura" src="${IMG}20250716134449-125_public_images_20250624140032-978_public_images_20250226195406-041_quest10-graficos-e-interp-graficas.png" alt="Gráfico de vagas fechadas por mês em 1998">`,
    alternativas: [
      "Em dezembro havia menos desempregados que em janeiro.",
      "Durante o primeiro trimestre, a taxa de desemprego diminuiu.",
      "No primeiro semestre, foram fechadas mais de 62.000 vagas.",
      "No terceiro trimestre, diminuiu o número de desempregados.",
      "O número de vagas fechadas no segundo semestre foi menor que 45.000."
    ],
    correta: 2,
    explicacao: "<p>Lendo o gráfico, de janeiro a junho: ≈ 28.000 + 13.000 + 14.000 + 9.000 + 7.000 + 2.500 ≈ 73.500 vagas, mais de 62.000. O gráfico mostra vagas <strong>fechadas</strong> todo mês, então o desemprego só aumenta (elimina a, b e d). No 2º semestre: ≈ 5.000 + 7.500 + 8.500 + 9.000 + 12.500 + 18.000 ≈ 60.500, mais de 45.000 (elimina e).</p>"
  },
  {
    tema: "Gráficos e Interpretações Gráficas",
    enunciado: "<p>No gráfico a seguir temos o nível da água armazenada em uma barragem ao longo de três anos.</p>" +
      `<img class="figura" src="${IMG}20251017150812-350_public_images_20250716134739-812_public_images_20250415193431-781_public_images_20250227163123-413_quest9-graficos-e-interp-graficas.png" alt="Gráfico do nível da água de uma barragem ao longo do tempo">` +
      "<p>O nível de 40 m foi atingido quantas vezes neste período?</p>",
    alternativas: ["1", "2", "3", "4", "5"],
    correta: 1,
    explicacao: "<p>O nível só fica abaixo de 80 m uma vez, na grande queda até 10 m. Nessa queda a linha passa por 40 m descendo e de novo subindo: 2 vezes.</p>"
  }
];

const listaFuncoes = [
  {
    tema: "Aprofundamento de Funções",
    enunciado: "<p>Seja f: ℝ → ℝ definida por:</p>" +
      "<pre>f(x) = −x − 1,   se x ≤ −1\nf(x) = −x² + 1,  se −1 &lt; x &lt; 1\nf(x) = x − 1,    se x ≥ 1</pre>" +
      "<p>O conjunto imagem de f é:</p>",
    alternativas: ["] −∞, −1 ]", "] −∞, 1 ]", "[ 0, +∞ [", "[ 1, +∞ [", "[ −1, 1 ]"],
    correta: 2,
    explicacao: "<p>Para x ≤ −1, −x − 1 vai de 0 até +∞. Para −1 &lt; x &lt; 1, −x² + 1 fica em ]0, 1]. Para x ≥ 1, x − 1 vai de 0 até +∞. Juntando: [0, +∞[.</p>"
  },
  {
    tema: "Aprofundamento de Funções",
    enunciado: "<p>Seja f: ℝ → ℝ dada por f(x) = sen x. Considere as afirmações:</p>" +
      "<p>1. f é uma função par, isto é, f(x) = f(−x) para todo x real.<br>2. f é periódica de período 2π.<br>3. f é sobrejetora.<br>4. f(0) = 0, f(π/3) = √3/2 e f(π/2) = 1.</p>" +
      "<p>São verdadeiras as afirmações:</p>",
    alternativas: ["1 e 3, apenas.", "3 e 4, apenas.", "2 e 4, apenas.", "1, 2 e 3, apenas.", "1, 2, 3 e 4."],
    correta: 2,
    explicacao: "<p>1 é falsa: seno é ímpar, sen(−x) = −sen x. 2 é verdadeira. 3 é falsa: a imagem é [−1, 1], não ℝ inteiro. 4 é verdadeira (valores notáveis).</p>"
  },
  {
    tema: "Aprofundamento de Funções",
    enunciado: "<p>Seja f: ℝ → ℝ definida por:</p>" +
      "<pre>f(x) = 3x + 3,        se x ≤ 0\nf(x) = x² + 4x + 3,   se x > 0</pre>" +
      "<p>Podemos afirmar que:</p>",
    alternativas: [
      "f é injetora mas não é sobrejetora.",
      "f é sobrejetora mas não é injetora.",
      "f é bijetora e f⁻¹(3) = 0.",
      "f é bijetora e f⁻¹(0) = 1.",
      "f é bijetora e f⁻¹(0) = −2."
    ],
    correta: 2,
    explicacao: "<p>Para x ≤ 0, 3x + 3 é crescente e cobre ]−∞, 3]. Para x &gt; 0, x² + 4x + 3 também é crescente e cobre ]3, +∞[. Sem sobreposição e cobrindo ℝ: bijetora. f(0) = 3, logo f⁻¹(3) = 0. Já f⁻¹(0) = −1, o que elimina (d) e (e).</p>"
  },
  {
    tema: "Aprofundamento de Funções",
    enunciado: "<p>Uma empresa usa um modelo matemático para estimar o lucro mensal pelo número de unidades vendidas. O modelo só é válido quando o número de unidades é maior ou igual a 100 (abaixo disso os custos fixos não são cobertos) e menor que 500 (acima disso a fábrica ultrapassa a capacidade). Qual alternativa representa corretamente o domínio do modelo?</p>",
    alternativas: [
      "Apenas valores estritamente maiores que 100 e estritamente menores que 500.",
      "Qualquer número real.",
      "Valores entre 100 e 500, incluindo 100, mas não incluindo 500.",
      "Apenas números inteiros entre 100 e 500.",
      "Apenas valores estritamente inferiores a 100."
    ],
    correta: 2,
    explicacao: "<p>\"Maior ou igual a 100\" inclui o 100; \"menor que 500\" exclui o 500. Domínio: [100, 500[.</p>"
  },
  {
    tema: "Aprofundamento de Funções",
    enunciado: "<p>Em um país, o imposto de renda é cobrado sobre a renda mensal assim:</p>" +
      "<p>I. Isento, se a renda for igual ou inferior a $10.000;<br>II. 10% sobre a renda, menos $1.000, se a renda for superior a $10.000 e até $20.000;<br>III. 20% sobre a renda, se a renda for superior a $20.000.</p>" +
      "<p>Se para uma renda $x o trabalhador recolhe I(x) de imposto, é correto afirmar que:</p>",
    alternativas: [
      "A função I é constante.",
      "O domínio de I é [10.000; +∞[.",
      "A imagem de I é [0, +∞[.",
      "A imagem de I é [0, 1000] ∪ ]4000, +∞[.",
      "Nenhuma das anteriores."
    ],
    correta: 3,
    explicacao: "<p>Faixa I dá 0. Faixa II: 0,1x − 1000 com x em ]10.000; 20.000] dá ]0; 1.000]. Faixa III: 0,2x com x &gt; 20.000 dá ]4.000; +∞[. Repare no \"buraco\" entre 1.000 e 4.000: nenhum imposto cai ali. Imagem: [0, 1000] ∪ ]4000, +∞[.</p>"
  },
  {
    tema: "Aprofundamento de Funções",
    enunciado: "<p>Considere uma função f definida em ℝ, periódica com período T = 4, ou seja, f(x + 4) = f(x) para todo x real. Se f(2) = 5, qual é o valor de f(6)?</p>",
    alternativas: ["5.", "2.", "7.", "9.", "4."],
    correta: 0,
    explicacao: "<p>f(6) = f(2 + 4) = f(2) = 5. Andar um período inteiro não muda o valor da função.</p>"
  },
  {
    tema: "Aprofundamento de Funções",
    enunciado: "<p>Considere uma função f: ℝ₊ → ℝ₊ crescente que satisfaz f(2x) = 2f(x) para todo x ∈ ℝ₊. Se f(4) = 8, qual é o valor de f(1)?</p>",
    alternativas: ["1.", "2.", "4.", "8.", "16."],
    correta: 1,
    explicacao: "<p>f(4) = 2f(2) e f(2) = 2f(1), então f(4) = 4f(1). Com f(4) = 8, f(1) = 2.</p>"
  },
  {
    tema: "Aprofundamento de Funções",
    enunciado: "<p>Considere f: ℝ → ℝ com f(x) = 2x + 1. Qual afirmação é verdadeira?</p>",
    alternativas: [
      "f é injetora, mas não é sobrejetora.",
      "f é sobrejetora, mas não é injetora.",
      "f é injetora e sobrejetora.",
      "f não é nem injetora nem sobrejetora.",
      "f não é definida."
    ],
    correta: 2,
    explicacao: "<p>Função afim com coeficiente diferente de zero, de ℝ em ℝ: x diferentes dão y diferentes (injetora) e todo y real é atingido por x = (y − 1)/2 (sobrejetora). Logo é bijetora.</p>"
  },
  {
    tema: "Aprofundamento de Funções",
    enunciado: "<p>Considere a função f(x) = 1/(x − 2). Qual alternativa representa corretamente o domínio dessa função?</p>",
    alternativas: ["ℝ", "ℝ \\ {2}", "[2, ∞)", "(−∞, 2)", "[−2, 2]"],
    correta: 1,
    explicacao: "<p>Não existe divisão por zero, então x − 2 ≠ 0, ou seja, x ≠ 2. Todo o resto é permitido: ℝ \\ {2}.</p>"
  }
];

const listaProposicional = [
  {
    tema: "Cálculo Proposicional",
    enunciado: "<p>(CESGRANRIO/2007 − TCE/RO − Analista de Sistemas) Sejam p e q proposições. Das alternativas a seguir, apenas uma é tautologia. Assinale-a.</p>",
    alternativas: ["p ∨ q", "p ∧ q", "(p ∧ q) ⟶ q", "(p ∨ q) ⟶ q", "∼p ∧ ∼q"],
    correta: 2,
    explicacao: "<p>Condicional só é falsa com antecedente V e consequente F. Em (p ∧ q) ⟶ q, se o antecedente é V então q é V, e o consequente nunca é F. As demais têm alguma linha falsa: (a) com p = q = F; (b) com q = F; (d) com p = V e q = F; (e) com p = V.</p>"
  },
  {
    tema: "Cálculo Proposicional",
    enunciado: "<p>A última coluna da tabela-verdade a seguir corresponde à proposição p → (~q ∨ ~r).</p>" +
      "<table class=\"tabela-verdade\"><tr><th>p</th><th>q</th><th>r</th><th>~q ∨ ~r</th><th>p → (~q ∨ ~r)</th></tr>" +
      "<tr><td>V</td><td>V</td><td>V</td><td>F</td><td>?</td></tr>" +
      "<tr><td>V</td><td>V</td><td>F</td><td>V</td><td>?</td></tr>" +
      "<tr><td>V</td><td>F</td><td>V</td><td>V</td><td>?</td></tr>" +
      "<tr><td>F</td><td>V</td><td>V</td><td>F</td><td>?</td></tr>" +
      "<tr><td>V</td><td>F</td><td>F</td><td>V</td><td>?</td></tr>" +
      "<tr><td>F</td><td>V</td><td>F</td><td>V</td><td>?</td></tr>" +
      "<tr><td>F</td><td>F</td><td>V</td><td>V</td><td>?</td></tr>" +
      "<tr><td>F</td><td>F</td><td>F</td><td>V</td><td>?</td></tr></table>" +
      "<p>Assinale a opção que apresenta os elementos da última coluna, de cima para baixo.</p>",
    alternativas: [
      "F, F, F, F, V, F, V e F.",
      "F, V, F, V, F, V, F e F.",
      "V, V, V, V, V, V, V e F.",
      "V, F, V, F, F, V, F e F.",
      "F, V, V, V, V, V, V e V."
    ],
    correta: 4,
    explicacao: "<p>A condicional só é F quando p = V e (~q ∨ ~r) = F, o que acontece apenas na 1ª linha. Na 4ª linha (~q ∨ ~r) também é F, mas p é F, então a condicional é V. Resultado: F, V, V, V, V, V, V, V.</p>"
  },
  {
    tema: "Cálculo Proposicional",
    enunciado: "<p>O número de linhas de uma tabela-verdade depende da quantidade de proposições simples distintas. Quantas linhas possui a tabela-verdade de uma proposição composta por 4 proposições simples distintas?</p>",
    alternativas: ["8 linhas.", "12 linhas.", "14 linhas.", "16 linhas.", "32 linhas."],
    correta: 3,
    explicacao: "<p>Cada proposição simples tem 2 valores possíveis, então são 2<sup>n</sup> linhas. Com n = 4: 2<sup>4</sup> = 16.</p>"
  },
  {
    tema: "Cálculo Proposicional",
    enunciado: "<p>Como se chama uma proposição cujo valor lógico é Falso em todas as linhas de sua tabela-verdade?</p>",
    alternativas: ["Tautologia.", "Contingência.", "Contradição.", "Sofisma.", "Indeterminação."],
    correta: 2,
    explicacao: "<p>Sempre F é contradição. Sempre V é tautologia. Com V e F misturados é contingência.</p>"
  },
  {
    tema: "Cálculo Proposicional",
    enunciado: "<p>Na álgebra booleana, as variáveis assumem os valores 1 (verdadeiro) e 0 (falso). Quais operadores booleanos correspondem, respectivamente, à conjunção (∧), à disjunção (∨) e à negação (~)?</p>",
    alternativas: [
      "Multiplicação lógica (AND), Adição lógica (OR) e Complementação (NOT).",
      "Adição lógica (OR), Multiplicação lógica (AND) e Complementação (NOT).",
      "Complementação (NOT), Adição lógica (OR) e Multiplicação lógica (AND).",
      "Multiplicação lógica (AND), Divisão lógica (NAND) e Adição lógica (OR).",
      "Adição lógica (OR), Inversão lógica (NOR) e Multiplicação lógica (AND)."
    ],
    correta: 0,
    explicacao: "<p>∧ (e) é AND, que se comporta como multiplicação: 1 · 1 = 1 e qualquer 0 zera. ∨ (ou) é OR, a adição lógica. ~ é NOT, a complementação.</p>"
  },
  {
    tema: "Cálculo Proposicional",
    enunciado: "<p>O conectivo NOR é a negação da disjunção: ~(p ∨ q). Qual é a única combinação de valores de p e q para a qual p NOR q é Verdadeiro?</p>",
    alternativas: [
      "p verdadeiro e q verdadeiro.",
      "p verdadeiro e q falso.",
      "p falso e q verdadeiro.",
      "p falso e q falso.",
      "p e q com valores opostos."
    ],
    correta: 3,
    explicacao: "<p>p ∨ q só é F quando os dois são F. Negando, NOR só é V nesse caso: p = F e q = F.</p>"
  },
  {
    tema: "Cálculo Proposicional",
    enunciado: "<p>Considere as afirmações:</p>" +
      "<p>I. Sendo p → q falso, a proposição p → (q → r) é verdadeira, independentemente do valor de r.<br>" +
      "II. A proposição (12 &lt; √12) ↔ (8 − 3 = 6) é falsa.<br>" +
      "III. Sendo V(p) = V e V(q) = V, a proposição ((p ∧ q) → r) → (p → (q → r)) é falsa.</p>" +
      "<p>É verdade o que se afirma apenas em:</p>",
    alternativas: ["I", "II", "I e III.", "II e III.", "I e II."],
    correta: 0,
    explicacao: "<p>I: p → q falso significa p = V e q = F. Então q → r = V (antecedente F), e p → V = V. Verdadeira. II: 12 &lt; 3,46 é F e 5 = 6 é F; F ↔ F = V, então a afirmação \"é falsa\" está errada. III: com p = q = V, os dois lados viram r → r, e r → r é sempre V. Falsa.</p>"
  },
  {
    tema: "Cálculo Proposicional",
    enunciado: "<p>Sabendo que p → q é falso, marque a única alternativa com valor lógico verdadeiro.</p>",
    alternativas: ["p → (q ∧ r)", "(q ∧ r) → (q → r)", "(p ∨ r) ∧ (p → q)", "(p ∧ q) ↔ (~p ∨ ~q)", "(p ∧ q) ∨ (p → q)"],
    correta: 1,
    explicacao: "<p>p → q falso dá p = V e q = F. (a) V → F = F. (b) q ∧ r = F, e condicional com antecedente F é V. (c) V ∧ F = F. (d) F ↔ V = F. (e) F ∨ F = F.</p>"
  }
];

const listaPredicados = [
  {
    tema: "Cálculo de Predicados",
    enunciado: "<p>Os quantificadores transformam sentenças abertas em proposições. O quantificador que indica que uma propriedade vale para todos os elementos de um conjunto e o que indica que há ao menos um elemento com a propriedade são, respectivamente:</p>",
    alternativas: ["∃ e ∀", "∀ e ∃", "∈ e ⊂", "∧ e ∨", "→ e ↔"],
    correta: 1,
    explicacao: "<p>∀ é o quantificador universal (\"para todo\") e ∃ é o existencial (\"existe pelo menos um\").</p>"
  },
  {
    tema: "Cálculo de Predicados",
    enunciado: "<p>Considere o argumento \"A multiplicação de dois números inteiros negativos é um número positivo\". Marque a alternativa que expressa esse argumento na linguagem simbólica.</p>",
    alternativas: [
      "(∀x)(∀y)(x ∧ y) → (xy > 0)",
      "(∀x)(∀y)(x > 0) ↔ (xy > 0)",
      "(∃x)(∃y)((x > 0) ∧ (y > 0)) → (xy > 0)",
      "(∃x)(∀y)((x > 0) ∨ (y > 0)) → (xy > 0)",
      "(∀x)(∀y)((x > 0) ∧ (y > 0)) → (xy > 0)"
    ],
    correta: 4,
    explicacao: "<p>A estrutura certa é: <strong>para todos</strong> x e y (∀x∀y), se x e y cumprem a condição (∧), então o produto é positivo (→). Só a (e) tem essa forma. Obs.: o enunciado original fala em \"negativos\", mas todas as alternativas usam &gt; 0. A (e) é a resposta pela estrutura; o correto seria (x &lt; 0) ∧ (y &lt; 0).</p>"
  },
  {
    tema: "Cálculo de Predicados",
    enunciado: "<p>(ESAF − 2003) Pedro, após visitar uma aldeia distante, afirmou: \"Não é verdade que todos os aldeões daquela aldeia não dormem a sesta\". A condição necessária e suficiente para que a afirmação de Pedro seja verdadeira é que seja verdadeira a proposição:</p>",
    alternativas: [
      "No máximo, um aldeão daquela aldeia não dorme a sesta.",
      "Todos os aldeões daquela aldeia dormem a sesta.",
      "Pelo menos um aldeão daquela aldeia dorme a sesta.",
      "Nenhum aldeão daquela aldeia não dorme a sesta.",
      "Nenhum aldeão daquela aldeia dorme a sesta."
    ],
    correta: 2,
    explicacao: "<p>Negar \"todos não dormem\" é ~(∀x)(~D(x)), que equivale a (∃x)(D(x)): existe pelo menos um que dorme. A (b) é forte demais: basta um.</p>"
  },
  {
    tema: "Cálculo de Predicados",
    enunciado: "<p>Dados os conjuntos A = {−2, 0, 1} e B = {−1, 0, 3}, determine o conjunto-verdade de p(x, y): 2x + y &gt; 3, com x ∈ A e y ∈ B.</p>",
    alternativas: [
      "{(1, 3)}",
      "{(−2, −1), (−2, 0)}",
      "{(−2, 3), (0, −1), (0, 0)}",
      "{(1, −1), (1, 0), (1, 3)}",
      "{(0, 3), (1, −1), (1, 0), (1, 3)}"
    ],
    correta: 0,
    explicacao: "<p>x = −2: precisa y &gt; 7, nenhum. x = 0: precisa y &gt; 3, e 3 não é maior que 3. x = 1: precisa y &gt; 1, só y = 3. Conjunto-verdade: {(1, 3)}.</p>"
  },
  {
    tema: "Cálculo de Predicados",
    enunciado: "<p>Na ciência da computação, a aplicação do cálculo de predicados à prova de correção de programas tem como objetivo principal:</p>",
    alternativas: [
      "Apenas medir o tempo de execução do código-fonte em determinado hardware.",
      "Substituir o processo de compilação por testes estatísticos de usabilidade.",
      "Demonstrar, por lógica formal, que as variáveis de saída atendem às propriedades especificadas quando as entradas satisfazem os predicados estabelecidos.",
      "Desenvolver interfaces gráficas intuitivas para usuários não técnicos.",
      "Impedir a utilização de comandos de repetição e desvio condicional."
    ],
    correta: 2,
    explicacao: "<p>Prova de correção: se a entrada satisfaz a pré-condição, a saída satisfaz a pós-condição. Isso é demonstrado com lógica de predicados.</p>"
  },
  {
    tema: "Cálculo de Predicados",
    enunciado: "<p>Para uma sentença aberta p(x) em um conjunto universo A, a condição em que nenhum elemento de A torna a sentença verdadeira denomina-se:</p>",
    alternativas: ["Condição universal.", "Condição necessária.", "Condição possível.", "Condição impossível.", "Condição suficiente."],
    correta: 3,
    explicacao: "<p>Conjunto-verdade vazio é condição impossível. Se todos os elementos satisfazem, é universal; se pelo menos um satisfaz, é possível.</p>"
  },
  {
    tema: "Cálculo de Predicados",
    enunciado: "<p>Quando uma sentença aberta p(x) em A tem solução existente e única, usa-se a notação (∃! x ∈ A)(p(x)). Esse operador é denominado:</p>",
    alternativas: [
      "Quantificador existencial de multiplicidade.",
      "Quantificador universal condicional.",
      "Quantificador existencial de unicidade.",
      "Operador de disjunção exclusiva.",
      "Conectivo de equivalência estrita."
    ],
    correta: 2,
    explicacao: "<p>O ! depois do ∃ significa \"existe um e somente um\": quantificador existencial de unicidade.</p>"
  },
  {
    tema: "Cálculo de Predicados",
    enunciado: "<p>Pelas regras de negação de proposições quantificadas, a negação de (∀x ∈ A)(p(x)) equivale a:</p>",
    alternativas: ["(∀x ∈ A)(~p(x))", "(∃x ∈ A)(~p(x))", "(∃x ∈ A)(p(x))", "~(∃x ∈ A)(~p(x))", "(∀x ∉ A)(p(x))"],
    correta: 1,
    explicacao: "<p>Para negar \"todos têm p\" basta um que não tenha: troca ∀ por ∃ e nega o predicado. A (a) é o erro clássico: \"nenhum tem p\" é forte demais.</p>"
  },
  {
    tema: "Cálculo de Predicados",
    enunciado: "<p>(FUNDATEC − 2019) A alternativa que apresenta uma sentença aberta é:</p>",
    alternativas: [
      "Porto Alegre é capital da região sul com surto de sarampo ou catapora.",
      "Alguma cidade da região sul do Brasil está com surto de sarampo.",
      "Antônio é o engenheiro responsável pelo projeto de reforma do posto de saúde de Gramado.",
      "Carlos e Antônio são os farmacêuticos responsáveis pelo estoque da farmácia do posto de saúde de Gramado.",
      "Gramado tem cobertura total de vacinação de sarampo."
    ],
    correta: 1,
    explicacao: "<p>As alternativas (a), (c), (d) e (e) falam de sujeitos determinados (Porto Alegre, Antônio, Carlos, Gramado). A (b) usa \"alguma cidade\", um sujeito indeterminado ligado a um quantificador, e a FUNDATEC trata esse tipo de frase como sentença aberta. Atenção: essa resposta segue o critério da banca, que eu não consegui confirmar no gabarito oficial. Em livros de lógica, uma frase quantificada costuma ser considerada proposição.</p>"
  },
  {
    tema: "Cálculo de Predicados",
    enunciado: "<p>Com relação à linguagem de programação Prolog, marque a alternativa que indica corretamente a estrutura de um fato:</p>",
    alternativas: ["gosta(Paula, Mario)", "gosta(paula, mario).", "gosta(Paula, mario)", "Gosta(Paula, Mario).", "Gosta(paula, mario)."],
    correta: 1,
    explicacao: "<p>Em Prolog, predicados e constantes começam com letra minúscula (maiúscula indica variável) e todo fato termina com ponto final.</p>"
  }
];

const listaDemonstracao = [
  {
    tema: "Métodos de Demonstração",
    enunciado: "<p>A regra de inferência <em>modus ponens</em> é fundamental na demonstração direta. Essa regra estabelece que:</p>",
    alternativas: [
      "Se P → Q é falsa e P é falso, conclui-se que Q é verdadeiro.",
      "Se P é verdadeira e P → Q é verdadeira, conclui-se que Q é verdadeira.",
      "Se a negação de Q é verdadeira, conclui-se diretamente que P é verdadeira.",
      "Se duas proposições compostas têm tabelas-verdade distintas, ambas são inconsistentes.",
      "Se a conclusão Q é verdadeira, a hipótese P torna-se necessariamente verdadeira."
    ],
    correta: 1,
    explicacao: "<p>Modus ponens: de P e P → Q, conclui-se Q. A (e) é a falácia da afirmação do consequente.</p>"
  },
  {
    tema: "Métodos de Demonstração",
    enunciado: "<p>Para demonstrar que √2 é irracional, um estudante escreveu:</p>" +
      "<p>I. Suponha, por absurdo, que √2 é racional. Então existem inteiros a e b, com b ≠ 0, tais que √2 = a/b, com a fração irredutível.</p>" +
      "<p class=\"porque\">PORQUE</p>" +
      "<p>II. Daí, 2 = (a/b)², ou seja, 2b² = a². Então a² é par e, portanto, a é par: a = 2k. Logo 2b² = 4k², isto é, b² = 2k², e b também é par. Contradição: se a e b são pares, a/b não é irredutível. Logo √2 é irracional.</p>" +
      "<p>A respeito do que o estudante escreveu, assinale a opção correta.</p>",
    alternativas: [
      "As asserções I e II são proposições verdadeiras, e a II é uma justificativa da I.",
      "As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa da I.",
      "A asserção I é verdadeira, e a II é falsa.",
      "A asserção I é falsa, e a II é verdadeira.",
      "As asserções I e II são falsas."
    ],
    correta: 0,
    explicacao: "<p>É a demonstração clássica por absurdo, e os dois passos estão corretos. Nas listas da Estácio, quando I monta a hipótese e II desenvolve o raciocínio que completa a prova, a resposta esperada é que II justifica I.</p>"
  },
  {
    tema: "Métodos de Demonstração",
    enunciado: "<p>Considere que para todo m ∈ ℤ, m² ≥ m. Demonstrando por exaustão, julgue os itens:</p>" +
      "<p>I. A demonstração é dividida em três casos: m ≥ 1, m = 0 e m ≤ −1.<br>" +
      "II. Caso m ≥ 1: multiplicando os dois lados por m (positivo, não muda o sentido), temos m² ≥ m.<br>" +
      "III. Caso m = 0: m e m² valem 0, e a desigualdade (que inclui a igualdade) vale.<br>" +
      "IV. Caso m ≤ −1: m é negativo e m² é positivo.<br>" +
      "V. E novamente temos m² ≥ m.</p>" +
      "<p>A declaração vale em todos os casos, logo está provada por exaustão. Estão corretos:</p>",
    alternativas: ["Apenas I, II e III.", "Apenas I e III.", "Apenas IV e V.", "Apenas II, III e V.", "I, II, III, IV e V."],
    correta: 4,
    explicacao: "<p>Os três casos cobrem todos os inteiros, e cada um está certo: para m ≥ 1, m · m ≥ 1 · m; para m = 0, 0 ≥ 0; para m negativo, m² &gt; 0 &gt; m. Todos os itens estão corretos.</p>"
  },
  {
    tema: "Métodos de Demonstração",
    enunciado: "<p>Proposição: para qualquer inteiro positivo n, 2<sup>2<sup>n</sup></sup> + 1 é primo. Analise as afirmações:</p>" +
      "<p>I. Os fatores são quase impossíveis de localizar manualmente. Os quatro primeiros inteiros positivos produzem primos:<br>" +
      "II. n = 1: 5, primo; n = 2: 17, primo; n = 3: 257, primo; n = 4: 65537, primo.<br>" +
      "III. n = 5: 4294967297 = 641 × 6700417, NÃO é primo.</p>" +
      "<p>É correto o que se afirma em:</p>",
    alternativas: ["I, apenas.", "II e III, apenas.", "I e III, apenas.", "I e II, apenas.", "I, II e III."],
    correta: 4,
    explicacao: "<p>As três afirmações são fatos verdadeiros. Repare que o item III é um <strong>contraexemplo</strong>: ele prova que a proposição geral é falsa. Esses são os números de Fermat, e verificar alguns casos (item II) nunca basta para provar uma afirmação \"para todo n\".</p>"
  },
  {
    tema: "Métodos de Demonstração",
    enunciado: "<p>A demonstração por contraposição de uma implicação P ⇒ Q consiste em demonstrar diretamente qual condicional logicamente equivalente?</p>",
    alternativas: ["Q ⇒ P", "~P ⇒ ~Q", "~Q ⇒ ~P", "P ⇒ ~Q", "~(P ⇒ Q)"],
    correta: 2,
    explicacao: "<p>A contrapositiva de P ⇒ Q é ~Q ⇒ ~P, e as duas são equivalentes. Q ⇒ P (recíproca) e ~P ⇒ ~Q (inversa) <strong>não</strong> são equivalentes à original.</p>"
  },
  {
    tema: "Métodos de Demonstração",
    enunciado: "<p>Proposição: se n é um inteiro par, então n² é par.</p>" +
      "<p>I. Suponhamos que n é par, isto é, n = 2k para algum inteiro k.</p>" +
      "<p class=\"porque\">PORQUE</p>" +
      "<p>II. n² = (2k)² = 4k² = 2(2k²) = 2q, onde q = 2k² é inteiro. Portanto, n² é par.</p>" +
      "<p>Assinale a opção correta.</p>",
    alternativas: ASSERCOES,
    correta: 0,
    explicacao: "<p>Demonstração direta: I assume a hipótese e II mostra que n² tem a forma 2 · (inteiro). As duas estão corretas e, no padrão dessas questões, II é a justificativa que completa I.</p>"
  },
  {
    tema: "Métodos de Demonstração",
    enunciado: "<p>Proposição: a equação 3x + 5y = n tem solução em (ℕ ∪ {0})² para todo n ≥ 8. Um estudante escreveu:</p>" +
      "<p>I. Para n = 8 vale, pois (x, y) = (1, 1). Suponha que 3a + 5b = n para algum n ≥ 8; então a ≥ 1 ou b ≥ 1. Se b ≥ 1, como 3 × 2 − 5 × 1 = 1, temos 3(a + 2) + 5(b − 1) = n + 1, ou seja, (a + 2, b − 1) é solução para n + 1.</p>" +
      "<p class=\"porque\">PORQUE</p>" +
      "<p>II. Se b = 0, então a ≥ 3. Usando −3 × 3 + 5 × 2 = 1, temos 3(a − 3) + 5 × 2 = n + 1, ou seja, (a − 3, b + 2) é solução para n + 1. Assim, em qualquer caso, se 3x + 5y = n tem solução, 3x + 5y = n + 1 também tem.</p>" +
      "<p>Assinale a opção correta.</p>",
    alternativas: ASSERCOES,
    correta: 0,
    explicacao: "<p>É uma prova por indução: I faz a base (n = 8) e o primeiro caso do passo indutivo; II cobre o caso que faltava (b = 0) e fecha o argumento. As duas estão corretas e, no padrão dessas questões, II completa a justificativa de I.</p>"
  },
  {
    tema: "Métodos de Demonstração",
    enunciado: "<p>O que caracteriza uma demonstração <strong>trivial</strong> de uma implicação P(x) ⇒ Q(x) sobre um domínio S?</p>",
    alternativas: [
      "A conclusão Q(x) é verdadeira para todo elemento do domínio, independentemente do valor da hipótese P(x).",
      "A hipótese P(x) é falsa para todos os elementos do domínio, validando a condicional.",
      "Hipótese e conclusão são simultaneamente falsas para todos os elementos de S.",
      "A conclusão decorre de implicações diretas a partir da veracidade de P(x).",
      "A negação da conclusão conduz a uma contradição."
    ],
    correta: 0,
    explicacao: "<p>Trivial: Q é sempre verdadeira, então a condicional vale sem nem olhar P. Se P é sempre falsa (b), a demonstração é <strong>vácua</strong>. (d) é demonstração direta e (e) é por absurdo.</p>"
  },
  {
    tema: "Métodos de Demonstração",
    enunciado: "<p>Proposição: se n = a · b, com a e b inteiros positivos, então a ≤ √n ou b ≤ √n. Analise os passos:</p>" +
      "<p>I. Suponhamos que n = a · b, com a &gt; √n e b &gt; √n.<br>" +
      "II. Então a · b &gt; √n · √n = n, o que contradiz a hipótese.<br>" +
      "III. Portanto, se n = a · b, então a ≤ √n ou b ≤ √n.</p>" +
      "<p>É correto o que se afirma em:</p>",
    alternativas: ["I apenas.", "II e III apenas.", "I e II apenas.", "I e III apenas.", "I, II e III."],
    correta: 4,
    explicacao: "<p>Prova por contradição completa: I nega a conclusão, II chega a a · b &gt; n (absurdo, pois a · b = n) e III conclui. Os três passos estão corretos.</p>"
  }
];
