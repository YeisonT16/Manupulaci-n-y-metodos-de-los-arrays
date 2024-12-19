const numbers = [1, 30, 41, 29, 50, 60]

let respuesta = undefined
for (let i=0; i < numbers.length; i++){
    const element = numbers[i]
    if (element >= 40) {
        respuesta = element
        break
    }
}

console.log('rta',respuesta) // 41

const respuesta2 = numbers.find(item => item >= 40)
const respuesta3 = numbers.findIndex(item => item >= 40)

console.log('rta2',respuesta2) // 41
console.log('rta3',respuesta3) // 2

const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];

const rta4 = products.find(element => element.id === '🍔')
console.log('Find: ', rta4)

/* Find index devuelve el index en que se encuentra el elemento y si no lo encuentra nos devolvera -1 */
const rta5 = products.findIndex(element => element.id === '🍔')
console.log('FindIndex: ', rta5)