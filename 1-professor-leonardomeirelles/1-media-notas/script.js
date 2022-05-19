

// 1 – Calcule a média de diversas notas digitadas pelo usuário.
// Vou coletar as notas e jogar em um vetor
// Depois somo todas as notas e divido pela quantidade de notas do vetor (tamanho do vetor)
const btn = document.querySelector("#send");
const lbQtdeNotas = document.querySelector("#qtde-notas");
const lbTotalNotas = document.querySelector("#total-notas");
const lbMedia = document.querySelector("#media");
let notas = [];

btn.addEventListener("click", function(e) {
    e.preventDefault();
    lbQtdeNotas.textContent = 'Quantidade de notas: ';
    lbTotalNotas.textContent = 'Total notas: ';
    lbMedia.textContent = 'Média das notas: ';
    
    const nota = document.querySelector("#nota");

    const value = Number(nota.value);
    nota.value = '';

    notas.push(value);
})

const btnCalc = document.querySelector("#calc-media");
// let lodash = require('lodash');

btnCalc.addEventListener("click", function(e) {

    let sum = 0;

    for (let i = 0; i < notas.length; i++) {
        if (typeof notas[i] !== "number") 
            continue;

        sum += notas[i];
    }

    const media = (sum / notas.length).toLocaleString('pt-BR', { minimumFractionDigits: 2 });

    lbQtdeNotas.textContent = 'Quantidade de notas: ' + notas.length;
    lbTotalNotas.textContent = 'Total notas: ' + sum;
    lbMedia.textContent = 'Média das notas: ' + media;
    notas = [];

    console.log('Total: ' + sum);
    console.log('Média: ' + media);
    console.log(notas);
})