// Ascendente
const numbers = [1, 30, 4, 21, 100000]
numbers.sort((a,b) => a - b) 
console.log(numbers)
// [ 1, 4, 21, 30, 100000 ]

// Descendente
numbers.sort((a,b) => b - a) 
console.log(numbers)
// [ 100000, 30, 21, 4, 1 ]

/*Ordenamiento de palabras
Si ordenas un array de palabras, puede ordenar correctamente por el valor Unicode de los caracteres de la palabra. Sin embargo, en algunos navegadores o entornos de ejecución (como Node) puede que esto falle, por lo tanto, debes utilizar la función localeCompare.

Ten en cuenta que las mayúsculas, minúsculas y caracteres con tilde tienen un valor Unicode diferente, por lo que debes asegurarte que todas las palabras estén en la misma condición. */

const words = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
]

words.sort((a,b) => a.localeCompare(b))
// [ 'adieu', 'banana', 'café', 'communiqué', 'éclair', 'premier', 'réservé' ]

const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
]

orders.sort((a,b) => a.total - b.total)

console.log(orders)
/* [
  {
    customerName: 'Zulema',
    total: 120,
    delivered: false
  },
  {
    customerName: 'Valentina',
    total: 240,
    delivered: true
  },
  {
    customerName: 'Nicolas',
    total: 600,
    delivered: true
  },
  {
    customerName: 'Santiago',
    total: 1840,
    delivered: true
  }
]
*/

// ORDENAR POR FECHAS:
const ordersDate = [
  {
    customerName: "Nicolas",
    total: 600,
    delivered: true,
    date: new Date (2021, 3, 8, 4),
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
    date: new Date (2021, 9, 12, 3),
  },
  {
    customerName: "Santiago",
    total: 1840,
    delivered: true,
    date: new Date (2021, 8, 2, 2),
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
    date: new Date(2021, 1, 1, 9, 30),
  },
];
ordersDate.sort((a,b) => a.date - b.date);
console.log(ordersDate);