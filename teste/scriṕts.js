
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let i = 0; i< numbers.length; i++){
    soma += numbers[i]
}
if (soma / numbers.length > 20) {
 console.log('valor maior que 20')
} else (soma / numbers.length < 20){
console.log('valor menor que 20')
}
