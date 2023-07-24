let number = parseInt(prompt('Enter your number'));

let doubleNumber = number % 10

if(doubleNumber % 2 === 0){
    console.log('Заканчивается парным числом')
}else{
    console.log('Не имеет в конце парного числа ' + doubleNumber)
}