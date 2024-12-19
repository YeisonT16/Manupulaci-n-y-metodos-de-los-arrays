const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ];

console.log('original', orders);
const rta = orders.map(item => item.total)
console.log('rta', rta);



//const rta2 = orders.map(item => {
//    item.tax = .19;
//    return item;  // nos devuelve un objeto con la misma referencia en memoria que el original
//})
//console.log('rta2',rta2);



const rta3 = orders.map(item => {
    
    return {
        ...item, //nos devuelve un objeto pero SIN la misma referncia en memoria que el original
        tax: .19
    };
})
console.log('rta2',rta3);
console.log('Original', orders);
