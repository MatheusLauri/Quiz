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
    correta      : "0",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "Qual time tem mais titulo da Champions League ?",
    alternativaA : "Real Madrid",
    alternativaB : "Barcelona",
    alternativaC : "Chelsea",
    correta      : "Real Madrid",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "Qual maior time do seculo no futebol brasileiro ?",
    alternativaA : "Palmeiras",
    alternativaB : "Corinthians",
    alternativaC : "Flamengo",
    correta      : "Palmeiras",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "Quem foi o campeão da libertadores 2021?",
    alternativaA : "Santos",
    alternativaB : "Flamengo",
    alternativaC : "Palmeiras",
    correta      : "Palmeiras",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "Quem foi o campeão do mundial de 2012?",
    alternativaA : "Corinthians",
    alternativaB : "Chelsea",
    alternativaC : "Real madrid",
    correta      : "Corinthians",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "Quem é o time com mais rebaixamento ?",
    alternativaA : "Vasco",
    alternativaB : "Sport",
    alternativaC : "Avai",
    correta      : "Avai",
}

// adicionar perguntas nesse mesmo modelo!!!
const q6 = {
    numQuestao   : 6,
    pergunta     : "Qual desses time nunca foi rebaixado?",
    alternativaA : "Palmeiras",
    alternativaB : "Flamengo",
    alternativaC : "Grêmio",
    correta      : "Flamengo",
}

const q7 = {
    numQuestao   : 7,
    pergunta     : "Em qual desses times Ronaldinho nunca jogou?",
    alternativaA : "PSG",
    alternativaB : "Flamengo",
    alternativaC : "São Paulo",
    correta      : "São Paulo",
}

const q8 = {
    numQuestao   : 8,
    pergunta     : "Qual desses times nunca ganhou uma Libertadores?",
    alternativaA : "Corinthians",
    alternativaB : "Flamengo",
    alternativaC : "Fluminense",
    correta      : "Fluminense",
}

const q9 = {
    numQuestao   : 9,
    pergunta     : "Qual desses jogadores ganhou mais titulos oficiais?",
    alternativaA : "Messi",
    alternativaB : "Daniel Alves",
    alternativaC : "Ibrahimović",
    correta      : "Daniel Alves",
}

const q10 = {
    numQuestao   : 10,
    pergunta     : "Qual o time com mais titulos mundiais?",
    alternativaA : "Santos",
    alternativaB : "Palmeiras",
    alternativaC : "Corinthias",
    correta      : "Santos",
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

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
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
    instrucoes.textContent = "Pontos: " + placar

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

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        location.reload();
    }, 2000)
}