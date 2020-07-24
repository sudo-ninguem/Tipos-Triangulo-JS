/*Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. */

function triangulo (area1, area2, area3) {

    if (area1 === area2 & area1 === area3) {
        console.log ("Este triangulo é um Equilátero")
    }
    else if ((area1 === area2 || area1 === area3) || (area2 === area3)) {

        console.log ("Este triangulo é um Isórceles")
    }
    else {
        console.log ("Este triangulo é um Escaleno")
    }

}

console.log (triangulo (1,2,3))
console.log (triangulo(5,5,5))
console.log (triangulo (4,4,5))
console.log (triangulo (5,4,4))