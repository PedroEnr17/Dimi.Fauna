const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual o principal motivo da diminuição da fauna?",
        alternativas: [
            {
                texto: "Desmatamento!",
                afirmacao: "Com a dimunuição de seu habitat muitos animais vem perdendo sua forma de sobrevivencia. "
            },
            {
                texto: "Desastres naturais",
                afirmacao: "Com os desastres varios animais acabam perdendo sua casa e seu jeito de viver."
            }
        ]
    },
    {
        enunciado: "Qual medidas podemos tomar para frear essa diminuição desenfreada da fauna?",
        alternativas: [
            {
                texto: "Não invadir areas de preservação.",
                afirmacao: "Ao invadir areas de preservação estamos diminuindo a area de vida dos animais."
            },
            {
                texto: "Economizar agua.",
                afirmacao: "Sem o disperdicio animais que dependem e/ou vivem nela são preservados."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
