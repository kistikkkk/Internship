async function readline() {
    return new Promise((resolve) => {
        process.stdin.once('data', (data) => {
            resolve(data.toString().trim());
        });
    });
}

async function readnumber() {
    const line = await readline();
    const number = parseFloat(line);
    if (isNaN(number)) {
        console.log("Введено некорректное сообщение! Введите число: ");
        return await readnumber();
    }
    return number;
}

console.log("Введите число a:");
const a = await readnumber();
console.log("Введите число b:");
const b = await readnumber();
let s = (a + b)/2;
console.log("Среднее арифметическое чисел = " + s);
let m = Math.sqrt(a*b);
console.log("Среднее геометрическое чисел = " + m);