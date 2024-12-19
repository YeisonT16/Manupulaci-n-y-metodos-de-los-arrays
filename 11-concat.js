const array1 = [1, 2, 3, 4,];
const array2 = [5, 6, 7, 8,];

const newArray = [...array1]; //sin la referencia en memoria

for (let i = 0; i < array2.length; i++) {
    const element = array2[i];
    newArray.push(element);
}

console.log('array 1: ', array1);
console.log('array 2: ', array2);
console.log('new Array: ', newArray);

// .concat()

const rta = array1.concat(array2);
console.log('.concat(): ', rta);


const numbers1 = [1,2,3,4]
const numbers2 = [5,6,7,8]
const numbers3 = [9,10,11,12]

const result1 = numbers1.concat("hola", "mundo")
const result2 = numbers1.concat(numbers2)
const result3 = numbers1.concat(numbers2, "hola")
const result4 = numbers1.concat(numbers2, numbers3)

result1 // [ 1, 2, 3, 4, 'hola', 'mundo' ]
result2 // [ 1, 2, 3, 4, 5, 6, 7, 8 ]
result3 // [ 1, 2, 3, 4, 5, 6, 7, 8, 'hola' ]
result4 // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]