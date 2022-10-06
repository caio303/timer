
function addListenersIniciar() {
    for (let i = 0; i < listaBtnsIniciar.length; i++) {
        listaBtnsIniciar[i].addEventListener("click", function (event) {
            const { indice, campos } = findIndiceECampos(event);

            // TODO: disable input nome evento

            iniciarIntervalo(indice, campos);
        });
    }
}

function addListenersResetar() {
    for (let i = 0; i < listaBtnsResetar.length; i++) {
        listaBtnsResetar[i].addEventListener("click", event => {
            const { indice, campos } = findIndiceECampos(event);

            resetarTemposEvento(indice, campos);
        });
    }
}

function addListenersRemover() {
    for (let i = 0; i < listaBtnsFechar.length; i++) {
        listaBtnsFechar[i].addEventListener("click", event => {
            const { indice } = findIndiceECampos(event);
            if(indice === -1) {
                console.log("nao existe na listaEventos")
                return
            }

            console.log(listaDeEventos)
            console.log(indice)
            const lista = document.querySelector("#lista-eventos");
            
            let listaNodes = lista.childNodes;
            let listaLiEventos = []

            for(let i=0;i<listaNodes.length;i++) {
                // listaNodes.item(i).classList.includes("li-evento") ===  "" /// TODOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
            }

            const item = lista.childNodes.item(indice);
            console.log(item)
            lista.removeChild(item)

            listaDeEventos.splice(indice,1)
        })
    }
}

// evento de clique dentro de titulo/campos/botoes
function findIndiceECampos(event) {
    let preCampos = event.target.parentNode.parentNode.childNodes
    // console.log("preCampos",preCampos)

    let titulo = null;
    let campos = null;
    for (let i = 0; i < preCampos.length; i++) {
        const elemento = preCampos.item(i)
        if (elemento.classList !== undefined) {
            if (elemento.classList[0] === "campos")
                campos = elemento
            if (i === 1) {
                titulo = elemento.childNodes.item(3).value
            }
        }
    }
    // console.log("TITULO: "+titulo)

    let indiceDoEvento = null;
    indiceDoEvento = listaDeEventos.findIndex((el) => el.nome === titulo)

    // console.log("indiceEvento",indiceDoEvento)
    // console.log("campos",campos)

    return { indice: indiceDoEvento, campos: campos }
}

function onChangeTitulo(event) {
    console.log(event)
    console.log(event.target.value)
}