const numbers = [5,4,8,6,2]
let suma = 0

for(let i = 0; i<numbers.length; i++){
  const number = numbers[i]
  suma = suma + number**2
}

console.log(suma) // 145

const rta = numbers.reduce((sum, element) => sum + element**2, 0)
console.log('rta', rta) // 145