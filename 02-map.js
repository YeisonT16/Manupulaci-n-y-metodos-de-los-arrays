//INMUTABLE

const letters = ['a','b','c'];


const newArray = letters.map(item => item + '++');

//const newArray = [];
//for (let index = 0; index < letters.length; index++){
//    const element = letters[index];
//    newArray.push(element + '++');
//}

console.log('original', letters);
console.log('new', newArray);



//Es mejor usar el metodo map puesto que con el for each mutamos el array y con map no.

const app = document.getElementById('app');
const list = products.map(product => {    
   return `<li>${product.title} - ${product.price}</li>`
})

app.innerHTML = list.join('');