let temDinheiro = true;
let estaEnsolarado =  true;
let carroEstaNaGaragem = true

let resultadoE =  "Você vai ao shopping? ";
resultadoE += temDinheiro && estaEnsolarado;
console.log(resultadoE);

let resultadoOU = "Você vai ao Shopping? ";
resultadoOU += estaEnsolarado || carroEstaNaGaragem;
console.log (resultadoOU);
