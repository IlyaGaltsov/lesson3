let number = parseInt(prompt('Введите трех значное число'));

if (isNaN(number) || number < 100000 || number > 999999) {
    console.log('Значение не правильное');
    } else {
    const ones = number % 10;
    const tens = Math.floor((number / 10) % 10);
    const hundreds = Math.floor((number / 100) % 10);
    const thousands = Math.floor((number / 1000) % 10);
    const tenThousands = Math.floor((number / 10000) % 10);
    const hundredThousands = Math.floor(number / 100000);

    if (
        ones === hundredThousands &&
        tens === tenThousands &&
        hundreds === thousands
    ) {
        console.log('Число зеркальное');
    } else {
        console.log('Число не зеркальное');
    }
}