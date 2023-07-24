let number = parseInt(prompt('Введіть тризначне число:'));

if (isNaN(number) || number < 100 || number > 999) {
    console.log('Введено невірне значення. Будь ласка, введіть тризначне число.');
} else {
    const ones = number % 10;
    const tens = Math.floor((number / 10) % 10);
    const hundreds = Math.floor(number / 100);

    if (ones === tens && tens === hundreds) {
        console.log('Цифры одиновы');
    } else if (ones === tens || ones === hundreds || tens === hundreds) {
        console.log('Есть две одиновых цифры');
    } else {
        console.log('Все цифры разные');
    }
}
