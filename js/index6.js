let didgit = parseInt(prompt('Enter three-digit number'));

if (isNaN(didgit)) {
    console.log('Enter please a digit');
} else if (didgit < 100 || didgit > 999) {
    console.log('Enter three-digit number');
} else {
    const hundreds = Math.floor(didgit / 100);
    const tens = Math.floor((didgit / 10) % 10);
    const ones = didgit % 10;

    if ((hundreds + tens + ones) % 2 === 0) {
        console.log("Sum = double");
    } else {
        console.log("Sum not double");
    }

    if ((hundreds + tens + ones) % 5 === 0) {
        console.log("Кратное 5");
    } else {
        console.log("Не кратное 5");
    }

    if (hundreds * tens * ones > 100) {
        console.log("Произведение больше 100");
    } else {
        console.log("Произведение меньше 100.");
    }
}