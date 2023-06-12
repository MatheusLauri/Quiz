let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
//let respostaEsta = document.querySelector('#respostaEsta')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')
let e = document.querySelector('#e')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

// MONTANDO AS PERGUNTAS

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    alternativaD : "Alternativa D",
    alternativaE : "Alternativa E",
    correta      : "0",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "Qual time tem mais titulo da Champions League ?",
    alternativaA : "Real Madrid",
    alternativaB : "Barcelona",
    alternativaC : "Chelsea",
    alternativaD : "Roma",
    alternativaE : "Bayern",
    correta      : "Real Madrid",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "Qual maior time do seculo no futebol brasileiro ?",
    alternativaA : "Palmeiras",
    alternativaB : "Corinthians",
    alternativaC : "Flamengo",
    alternativaD : "São paulo",
    alternativaE : "Santos",
    correta      : "Palmeiras",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "Quem foi o campeão da libertadores 2021?",
    alternativaA : "Santos",
    alternativaB : "Flamengo",
    alternativaC : "Palmeiras",
    alternativaD : "Internacional",
    alternativaE : "Fluminense",
    correta      : "Palmeiras",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "Quem foi o campeão do mundial de 2012?",
    alternativaA : "Corinthians",
    alternativaB : "Chelsea",
    alternativaC : "Real madrid",
    alternativaD : "Roma",
    alternativaE : "Tigres",
    correta      : "Corinthians",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "Quem é o time com mais rebaixamento ?",
    alternativaA : "Vasco",
    alternativaB : "Sport",
    alternativaC : "Avai",
    alternativaD : "Palmeiras",
    alternativaE : "Corinthians",
    correta      : "Avai",
}

// adicionar perguntas nesse mesmo modelo!!!
const q6 = {
    numQuestao   : 6,
    pergunta     : "Qual time campeão da champions 2023?",
    alternativaA : "Man City",
    alternativaB : "Real Madrid",
    alternativaC : "Barcelona",
    alternativaD : "Chelsea",
    alternativaE : "Liverpoll",
    correta      : "Man City",
}

const q7 = {
    numQuestao   : 7,
    pergunta     : "Quem foi conhecido por 1000 gols?",
    alternativaA : "Pelé",
    alternativaB : "Maradona",
    alternativaC : "Cristiano Ronaldo",
    alternativaD : "Messi",
    alternativaE : "Biro Biro",
    correta      : "Pelé",
}

const q8 = {
    numQuestao   : 8,
    pergunta     : "Qual a maior rivalidade futebol ?",
    alternativaA : "Palmeiras x Corinthians",
    alternativaB : "Santos x São paulo",
    alternativaC : "Flamengo x Fluminense",
    alternativaD : "Corinthians x Flamengo",
    alternativaE : "Palmeiras x Flamengo",
    correta      : "Palmeiras x Corinthians",
}

const q9 = {
    numQuestao   : 9,
    pergunta     : "Quem participa da união sinistra ?",
    alternativaA : "Palmeiras, vasco, ateltico mg",
    alternativaB : "Corinthians, fluminense,sport",
    alternativaC : "São paulo,Flamengo, internacional",
    alternativaD : "Palmeiras,Santos,Vasco",
    alternativaE : "Gremio, Atletico, São paulo",
    correta      : "Palmeiras, vasco, ateltico mg",
}

const q10 = {
    numQuestao   : 10,
    pergunta     : "Qual jogador que viveu em polemica ?",
    alternativaA : "Ronaldinho Gaucho",
    alternativaB : "Ronaldo Fenomeno",
    alternativaC : "Cristiano Ronaldo",
    alternativaD : "Romario",
    alternativaE : "Kaka",
    correta      : "Ronaldinho Gaucho",
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6,q7,q8,q9,q10]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD
e.textContent = q1.alternativaE

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')
e.setAttribute('value', '1E')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    e.textContent = questoes[nQuestao].alternativaE
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
    e.setAttribute('value', nQuestao+'E')
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
    d.classList.add('bloqueado')
    e.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
    d.classList.remove('bloqueado')
    e.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    

    let certa = questoes[numeroDaQuestao].correta
    

    if(respostaEscolhida == certa) {
        pontos += 10 // pontos = pontos + 10
    } 

    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {
        //respostaEsta.textContent = '...'
        proxima = numeroDaQuestao +1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

function fimDoJogo() {
    instrucoes.textContent = "Fim de Jogo!"
    numQuestao.textContent = ""

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent   = "Você conseguiu " + pontos + " " + pont + "de 100" 

    aviso.textContent = "Você conseguiu " + pontos + " " + pont + " de 100" 
    // deixar 100 pontos foi vai ser 10 perguntas com 10 pontos cada

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""
    d.textContent = ""
    e.textContent = ""
    
    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')
    d.setAttribute('value', '0')
    e.setAttribute('value', '0')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        location.reload();
    }, 2000)
}