const notas = [7, 9, 6, 10, 5];


let valores = '';

for (nota of notas) {
    valores += nota + ' / ';
}

console.log(valores);

let indices = '';

for (nota in notas) {
    indices += notas + ' - ';
}

console.log(indices); 

