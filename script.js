let number1 = [1, 2, 3];
number1[1] = 10;
console.log("Масив 1 після зміни:", number1); 

let string1 = ["один", "два", "три"];
string1.push("чотири");
console.log("Масив після + рядка:", string1);

let number2 = [1, 2, 3, 4, 5];
let sum = number2.reduce((arr, num) => arr + num, 0);
console.log("Сума всіх чисел у масиві:", sum); 

let number3 = [52, 10, 24, 0, 69];
console.log("Елементи масиву:");
for (let i = 0; i < number3.length; i++) {
  console.log(number3[i]);
}

let string2 = ["apple", "banana", "kiwi", "strawberry", "cherry"];
console.log("Рядки 5+ символів:");
for (let str of string2) {
  if (str.length > 5) {
    console.log(str);
  }
}

let number4 = [5, 69, 9, 12, 7, 15, 1, 52, 8, 118];
let max = Math.max(...number4);
console.log("Макс значення в масиві:", max); 

let number5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Парні числа з масиву:");
for (let num of number5) {
  if (num % 2 === 0) {
    console.log(num);
  }
}