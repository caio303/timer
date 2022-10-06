let listaBtnsIniciar = document.querySelectorAll(".start");
let listaBtnsResetar = document.querySelectorAll(".reset");
let listaBtnsFechar = document.querySelectorAll(".remover-evento")

let listaDeEventos = [
  {
    nome: "Descanso Pomodoro",
    tempo: "0-0-0-5-0"
  },
  {
    nome: "Intervalo de Almoço",
    tempo: "0-0-1-0-0"
  },
  {
    nome: "Tirar a pizza do forno",
    tempo: "0-0-0-30-0"
  }
]

// Inserção Inicial do Evento Padrão
updateEventos(listaDeEventos);

addListenersIniciar();
addListenersResetar();
addListenersRemover();