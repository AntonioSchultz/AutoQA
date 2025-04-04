/*console.log('Hello, world!')
//Integer19 - С начала суток прошло N секунд (N — целое). Найти количество полных минут, прошедших с начала суток.

{
let n = 30;
console.log(n/60); 
}

//Integer20 - С начала суток прошло N секунд (N — целое). Найти количество полных часов, прошедших с начала суток.

{
    let n = 1800;
    console.log(n/3600);
    }


//Integer21 - С начала суток прошло N секунд (N — целое). Найти количество секунд, прошедших с начала последней минуты.

{
    let n = 130;
    console.log(n - Math.floor(n / 60)*60);
    }


//Integer22 - С начала суток прошло N секунд (N — целое). Найти количество секунд, прошедших с начала последнего часа.

{
    let n = 3700;
    console.log(n - Math.floor(n / 3600)*3600);
    }


//Integer23 - С начала суток прошло N секунд (N — целое). Найти количество полных минут, прошедших с начала последнего часа.

{
    let n = 3700;
    console.log(Math.floor(n/60 - Math.floor(n / 3600)*60));
    }


//Boolean25 - Даны числа x, y. Проверить истинность высказывания: «Точка с координатами (x, y) лежит во второй координатной четверти».

{
    let x = -1;
    let y = 2;
    console.log(x<0 && y>0);
    }



//Boolean26 - Даны числа x, y. Проверить истинность высказывания: «Точка с координатами (x, y) лежит в четвертой координатной четверти».

{
    let x = 3;
    let y = -2;
    console.log(x>0 && y<0);
    }


//Boolean27 - Даны числа x, y. Проверить истинность высказывания: «Точка с координатами (x, y) лежит во второй или третьей координатной четверти».

{
    let x = 3;
    let y = -2;
    console.log(x<0);
    }


//Boolean28 - Даны числа x, y. Проверить истинность высказывания: «Точка с координатами (x, y) лежит в первой или третьей координатной четверти».

{
    let x = 3;
    let y = -2;
    console.log((x>0 && y>0) || (x<0 && y<0));
    }


//If17 - Даны три переменные вещественного типа: A, B, C. Если их значения упорядочены по возрастанию или убыванию, то удвоить их; 
// в противном случае заменить значение каждой переменной на противоположное. Вывести новые значения переменных A, B, C.

let A = 3
let B = 2
let C = 3

if (B > A && C > B) {
    A *= 2;
    B *= 2;
    C *= 2;
    console.log(A,B,C)
}
else {
    A *= -1;
    B *= -1;
    C *= -1;
    console.log(A,B,C)
}


//If18 - Даны три целых числа, одно из которых отлично от двух других, равных между собой. 
// Определить порядковый номер числа, отличного от остальных.

let A = 1
let B = 3
let C = 3

if (B == C) {
console.log(1);
}
else if (A == C) {
console.log(2);
}
else {
console.log(3);
}


//If19 - Даны четыре целых числа, одно из которых отлично от трех других, равных между собой. 
// Определить порядковый номер числа, отличного от остальных.

let A = 3
let B = 3
let C = 3
let D = 1

if (A != B && A != C) {
console.log(1);
}
else if (B != A && B!=C) {
console.log(2);
}
else if (C != B && C!=D) {
console.log(3);
}
else {
console.log(4);
}


//For1 - Даны целые числа K и N (N > 0). Вывести N раз число K.

let K = 3
let N = 4

for (let n = 0; n < N; n++) {
    console.log(K);
}


//For2 - Даны два целых числа A и B (A < B). 
// Вывести в порядке возрастания все целые числа, расположенные между A и B (включая сами числа A и B), а также количество N этих чисел.

let A = 3
let B = 10
let k = 0

for (let i = A; i <= B; i++){
console.log(i)
k+=1;
}
console.log(`Количество чисел равно: ${k}`)


//For3 - Даны два целых числа A и B (A < B). 
// Вывести в порядке убывания все целые числа, расположенные между A и B (не включая числа A и B), а также количество N этих чисел.

let A = 3
let B = 10
let k = 0

for (let i = (B-1); i > A; i--){
console.log(i)
k+=1;
}
console.log(`Количество чисел равно: ${k}`)


//For4 - Дано вещественное число — цена 1 кг конфет. Вывести стоимость 1, 2, ..., 10 кг конфет.

let price = 10

for (let i = 1; i <= 10; i++){
console.log(i*price)
}


//For5 - Дано вещественное число — цена 1 кг конфет. Вывести стоимость 0.1, 0.2, ..., 1 кг конфет.

let price = 3

for (let i = 1; i <= 10; i++){
console.log((i*price)/10)
}


//Begin33 - Известно, что X кг конфет стоит A рублей. Определить, сколько стоит 1 кг и Y кг этих же конфет.

{
function CalculatePrice (candyMass, candyPrice, neededMass) 
    {
    let pricePerKilo = candyPrice/candyMass;
    let pricePerY = pricePerKilo * neededMass;
    console.log (`Один килограмм стоит: ${pricePerKilo}`, '||', `Ваше количество килограмм стоит: ${pricePerY}`)
    }
}

CalculatePrice (3,12,5)


//Begin34 - Известно, что X кг шоколадных конфет стоит A рублей, а Y кг ирисок стоит B рублей. 
//Определить, сколько стоит 1 кг шоколадных конфет, 1 кг ирисок, а также во сколько раз шоколадные конфеты дороже ирисок.
{
function CalculateCandyPrices (chocCandyMass, chocCandyPrice, toffeeCandyMass, toffeeCandyPrice) {
    let priceChocPerKilo = chocCandyPrice / chocCandyMass;
    let priceToffeePerKilo  = toffeeCandyPrice / toffeeCandyMass;
    let howMuch = priceChocPerKilo / priceToffeePerKilo;
    console.log (`Один килограмм шоколадных конфет стоит: ${priceChocPerKilo}`, '||', `Один килограмм ирисок стоит: ${priceToffeePerKilo}`, '||', 
    `Шоколадные конфеты дороже ирисок в (раз): ${howMuch}`)
    }
}
CalculateCandyPrices(20,60,10,20)


//Integer30 - Дан номер некоторого года (целое положительное число). 
//Определить соответствующий ему номер столетия, учитывая, что, к примеру, началом 20 столетия был 1901 год.

{
let yearRnd = Math.floor(Math.random()*1000 + 1000)
let CalculateCentury = year => Math.ceil(year/100);
console.log(`Год: ${yearRnd}`, `Столетие: ${CalculateCentury(yearRnd)}`)
}


//Boolean31 - Даны целые числа a, b, c, являющиеся сторонами некоторого треугольника. 
//Проверить истинность высказывания: «Треугольник со сторонами a, b, c является равнобедренным».

{
let IsIsosceles = (a,b,c) => {
    if (a===b || a===c || b===c) {
        return true;
    }
    return false;
}
console.log(IsIsosceles(4,6,4))
}


//Boolean33 - Даны целые числа a, b, c. Проверить истинность высказывания: «Существует треугольник со сторонами a, b, c».

{
    let IsIsosceles = (a,b,c) => {
        if (a+b > c || a+c > b || b+c > a) {
            return true;
        }
        return false;
    }
    console.log(IsIsosceles(1,1,2))
    }


//If20 - На числовой оси расположены три точки: A, B, C. 
//Определить, какая из двух последних точек (B или C) расположена ближе к A, и вывести эту точку и ее расстояние от точки A.

{
    let DefinePoint = (a,b,c) => {
        let ba = b - a;
        let ca = c - a;
        if (ba < ca) {
            return console.log(`Точка B расположена ближе: ${b}`);
        }
        console.log(`Точка C расположена ближе: ${c}`);
    }
    DefinePoint(1,15,4)
    }


//If29 - Дано целое число. Вывести его строку-описание вида «отрицательное четное число», «нулевое число», «положительное нечетное число» и т. д.

{
function DisplayDescr (n) {
    if (Math.sign(n) === -1 && n % 2 === 0) {
        console.log('Отрицательное четное число');
    }
    else if (Math.sign(n) === -1 && n % 2 === 1) {
        console.log('Отрицательное нечетное число');
    }
    else if (Math.sign(n) === 1 && n % 2 === 0) {
        console.log('Положительное четное число');
    }
    else if (Math.sign(n) === 1 && n % 2 === 1) {
        console.log('Положительное нечетное число');
    }
    else {
        console.log('Нулевое число');
    }
}
}

DisplayDescr(14589)


//For17 - Дано вещественное число A и целое число N (>0). Используя один цикл, найти сумму "1 + A + A^2 + A^3 + ... + A^N"

{
let SumDegrees = (a, n) => {
    let k = 0;
    for (i=0; i<= n; i++) {
        k += Math.pow(a,i);
    }
    return k;
}
console.log(SumDegrees(3,3))
}
*/

//For20 - Дано целое число N (> 0). Используя один цикл, найти сумму "1! + 2! + 3! + ... + N!"

let Factorial = n => {
    let sum = 0
    let k = 1
    for (i = 1; i <= n; i++) {
        k = k*i
        sum += k
    }
    return sum;
}
console.log(Factorial(6))