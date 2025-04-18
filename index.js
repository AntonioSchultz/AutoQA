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


//For20 - Дано целое число N (> 0). Используя один цикл, найти сумму "1! + 2! + 3! + ... + N!"

{
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
}


//For21 - Дано целое число N (> 0). Используя один цикл, найти сумму "1 + 1/(1!) + 1/(2!) + 1/(3!) + ... + 1/(N!)" 
// (выражение N! — N–факториал — обозначает произведение всех целых чисел от 1 до N: "N! = 1·2·...·N"). 
// Полученное число является приближенным значением константы e = exp(1).

{
let FactorialExp = n => {
    let sum = 1
    let k = 1
    for (i = 1; i <= n; i++) {
        k = k*i
        sum += 1/k
    }
    return sum;
}
console.log(FactorialExp(4))
}


//For22 - Дано вещественное число X и целое число N (>0). Найти значение выражения "1+X +X^2/(2!)+...+X^N/(N!)"

{
    let FactorialExpression = (x,n) => {
        let sum = 1
        let k = 1
        for (i = 1; i <= n; i++) {
            k = k*i
            sum += Math.pow(x,i)/k
        }
        return sum;
    }
    console.log(FactorialExpression(2,3))
    }
*/

/* While7 - Дано целое число N (> 0). Найти наименьшее целое положительное число K, квадрат которого превосходит N: K^2 > N

{
let findMinNumber = (n) => {
let k = 0;
while (Math.pow(k,2) <= n) {
    k++;
}
return k;
}
console.log(findMinNumber(16))
}

*/


/* While9 - Дано целое число N (>1). Найти наименьшее целое число K, при котором выполняется неравенство: 3^K > N.

{
    let findMinNumber = (n) => {
    let k = 0;
    while (Math.pow(3,k) <= n) {
        k++;
    }
    return k;
    }
    console.log(findMinNumber(27))
}

*/


/* While17 - Дано целое число N (>0). 
Используя операции деления нацело и взятия остатка от деления, вывести все его цифры, начиная с самой правой (разряда единиц)

{
let displayDigits = (n) => {
    while (n > 10) {
        console.log(n % 10)
        n = Math.floor(n / 10);
    }
    return n;
}
console.log(displayDigits(141))
}
*/


/* While24 - Дано целое число N (> 1). Проверить, является ли число N числом Фибоначчи. 
 Если является, то вывести TRUE, если нет — вывести FALSE.

{
let IsFibonacci = (n) => {
    let i = 1;
    let j = 1;
    let k = 0;
    while (n > k) {
        k = i + j
        i = j;
        j = k;
    }
    return (n===k);
}
console.log(IsFibonacci(45))
}
*/

/* Series2 - Даны десять вещественных чисел. Найти их произведение.

{
let numbers = [2,5,1,7,4,11,9,13,2,0.5]

let MultiplyNumbers = (numbers) => {
    let MultResult = 1;
for (i = 0; i <= numbers.length - 1; i++) {
MultResult *= numbers[i]
}
return MultResult;
}

console.log(MultiplyNumbers(numbers))
}
*/

/* Series3 - Даны десять вещественных чисел. Найти их среднее арифметическое.

{
let numbers = [2,5,1,7,4,11,9,13,2,0.5]

let ArithmeticMean = (numbers) => {
    let sum = 0;
for (i = 0; i <= numbers.length - 1; i++) {
sum += numbers[i]
}
sum /= numbers.length
return sum;
}

console.log(ArithmeticMean(numbers))
}
*/

/* Proc1 - Описать функцию PowerA3(A, B), вычисляющую третью степень числа A и возвращающую ее.

{
let PowerA3 = (A, B) => {
    A = Math.pow(A,3)
    return A;
}

console.log(PowerA3(6,5))
}
*/

/* Proc6 - Описать функцию DigitCountSum(K, C, S), 
находящую количество C цифр целого положительного числа K, а также их сумму S (K — входной, C и S — выходные параметры целого типа).

{
let DigitCountSum = (K) => {
    let C = 0;
    let S = 0;
    let Leftover = 0;
    while (K >= 10) {
        Leftover = K % 10;
        S += Leftover;
        K = Math.floor(K / 10);
        C++;
    }
    S+=K;
    C++;
    console.log(`Количество цифр: ${C}`, `Сумма цифр: ${S}`);
}

DigitCountSum(1988)
}

*/

/* MinMax1 - Дано целое число N. Сгенерируйте массив из N случайных целых чисел. 
// Найти минимальный и максимальный из элементов данного массива и вывести их в указанном порядке.

{
let NumbersArray = (N) => {
    let element = 0;
    let NumbersArray = [];

    for (i = 0; i<N; i++) {
        element = Math.floor(Math.random()*100)
        NumbersArray[i] = element;
    }
    console.log(NumbersArray)
    let min = NumbersArray[0];
    let max = NumbersArray[0];
    for (j = 1; j < NumbersArray.length; j++) {
            if (NumbersArray[j] < min) {
                min = NumbersArray[j]
            }
            else if (NumbersArray[j] > max) {
                max = NumbersArray[j]}      
    }
    console.log(`Минимум: ${min}`, `Максимум: ${max}`);
}

NumbersArray(8)
}
*/

//MinMax2 - Дано целое число N и набор из N прямоугольников, заданных своими сторонами — объектами c парами рандомных чисел {a, b}. 
// Найти минимальную и максимальную площадь прямоугольников из данного набора. 
// Пример массива на JS: "[{a: 4, b: 5},{a: 1, b: 7},{a: 1, b: 6},{a: 2, b: 2},{a: 1, b: 9}]"

/*
{
const RectanglesArray = (n) => {
    let array = [];
    for (i = 0; i < n; i++) {
        array[i] = {
               a: Math.floor(Math.random()*100),
               b: Math.floor(Math.random()*100)
            };
    }
    let min = array[0].a * array[0].b
    let max = array[0].a * array[0].b
    let square;

    for (i = 1; i < array.length; i++) {
        square = array[i].a * array[i].b;
            if (square < min) {
            min = square;
            }
            else if (square > max) {
            max = square;    
            }
    }
    console.log(array)
    return [`Минимальная площадь: ${min}`,`Максимальная площадь: ${max}`];
}

console.log(RectanglesArray(3))
}
*/

// Arrays1 - дан массив A размера N и целое число K (1 ≤ K ≤ N). 
// Преобразовать массив, увеличив каждый его элемент на исходное значение элемента AK
/*
{
function modifyArray(n,k) {
let array = [];
for (i = 0; i < n; i++) {
    array[i] = Math.floor(Math.random()*100)
}
console.log(array)
for (i = 0; i < array.length; i++) {
    array[i] *= k;
}
return array;
}

console.log(modifyArray(3,4))
}
*/

// Arrays2 - Дан целочисленный массив размера N. Увеличить все четные числа, содержащиеся в массиве, на исходное значение первого четного числа. 
// Если четные числа в массиве отсутствуют, то оставить массив без изменений.

/*
{
    function modifyArray2(n) {
        let array = [];

        for (let i = 0; i < n; i++) {
        array[i] = Math.floor(Math.random()*100)
        }
        console.log(array)

        let firstEvenNumber = 0;
        let k;

        for (let i = 0; i < array.length; i++) {
           if ((array[i] % 2 === 0)) {
            firstEvenNumber = array[i];
            k = i;
            break;
           }     
        }

        for (let i = k; i < array.length; i++) {
            if ((array[i] % 2 === 0)) {
            array[i] += firstEvenNumber;
            }
        }
        return array;
    }

    console.log(modifyArray2(5))
}
    */

// Arrays3 - Дан целочисленный массив размера N. 
// Вывести все содержащиеся в данном массиве четные числа в порядке убывания их индексов, а также их количество.

/*
{
    function showEvenNumbers(n) {
        let array = [];

        for (let i = 0; i < n; i++) {
        array[i] = Math.floor(Math.random()*100)
        }
        console.log(array)

        let order = [];
        let counter = 0;
        for (let i = array.at(-1); i >= 0; i--) {
            if ((array[i] % 2 === 0)) {
                order.push(array[i]);
                counter++
            }
        }
        console.log(`Четные числа: ${order}`,`Количество: ${counter}`)
    }
    showEvenNumbers(7)
}
*/

//Array4 (???)- Дан массив ненулевых целых чисел размера N. Проверить, образуют ли его элементы число фибоначи. 
// (Число фибоначи - 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181)
/*
{
const isArrayFibonacci = (n) => {
    let array = [];
    for (let i = 0; i < n; i++) {
        array[i] = Math.floor(Math.random()*100 + 1)
    }
    console.log(array);
    
    let k;
    
    for (let i = array.at(-1); i > 1; i--) {
            k = (array[i] - array[i-1] === array[i-2])
    }
    return k;
}

console.log(isArrayFibonacci(4))

}
*/

// Array5 - Сформировать массив длинной N. Проверить чередуются ли в нем четные и нечетные числа.

/*
{
    const evenNotEvenArray = (n) => {
        let array = [];
        for (let i = 0; i < n; i++) {
           array[i] = Math.floor(Math.random()*100 + 1)
        }
        console.log(array);
        let k;
        for (let i = 0; i < array.length - 1; i++) {
            if (k = ((array[i] + array[i+1]) % 2 !== 0)) {
                continue;
            }
            else break;
        }
        return k;
    }
    console.log(evenNotEvenArray(4))
}
    */

//Array6 - Сформировать массив длинной N. Проверить чередуются ли в нем отрицательные и положительные числа.

/*
{
    const negativePositiveArray = (n) => {
        
        let array = [];
        for (let i = 0; i < n; i++) {
           array[i] = Math.floor(Math.random()*100 - 30)
        }
        console.log(array);
        let k;
        for (let i = 0; i < array.length - 1; i++) {
            if (k = (array[i]*array[i+1] < 0)) {
                continue;
            }
            else break;
        }
        return k;
    }
    console.log(negativePositiveArray(4))
}
*/

//Array7 - Дан массив A размера N. Найти минимальный элемент из его элементов с четными номерами (с четными индексами)

/*
{
    const minEvenNumberofArray = (n) => {
        
        let array = [];
        for (let i = 0; i < n; i++) {
           array[i] = Math.floor(Math.random()*100 + 1)
        }
        console.log(array);
        
        let min = array[0];

        for (let i = 2; i < array.length; i+=2) {
            if (array[i] < min) {
                min = array[i];
            }
        }
        return min;
    }
    console.log(minEvenNumberofArray(6))
}
*/

//Array8 - cформировать объект формата {a: 1, b: 2, c: 3, d: 4...}

{
    let letters = ["a","b","c","d","e","f","g"];

    const formObject = (array) => {
        let object = {};
        for (let i = 0; i < array.length; i++) {
            object[array[i]] = i+1;
        }
        return object;
    }
console.log(formObject(letters))
}