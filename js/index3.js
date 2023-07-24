let firstNumber = parseInt(prompt('first number'));
let secondNumber = parseInt(prompt('second number'));

if (firstNumber % secondNumber === 0){
    console.log('Делиться')
}else{
    console.log('Не делиться')
}
if(secondNumber % firstNumber === 0) {
    console.log('Делиться')
}else{
    console.log('Не делиться')
}
