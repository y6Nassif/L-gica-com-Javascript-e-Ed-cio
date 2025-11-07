const prompt = require("prompt-sync")()

const frm = document.querySelector(("form"))
const resp = document.querySelector(("h3"))

frm.addEventListener('submit', (e) => {
    e.preventDefault()
    const dateCript = frm.inMensagem.value
  
    let indexPar = 0
    let wordPar = ""
    for (const word of dateCript){
        if(indexPar % 2 === 0){
            wordPar += word
        }
        indexPar++
    }

    let indexImpar = 0
    let wordImpar = ""
    for (const word of dateCript){
        if(indexImpar % 2 !== 0){
            wordImpar += word
        }
        indexImpar++
    }

    
})