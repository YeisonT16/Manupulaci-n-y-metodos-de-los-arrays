const letters = ['a','b','c'];

for (let index = 0; index < letters.length; index++){
    const element = letters[index];
    console.log('for',element);
}

letters.forEach(item => console.log('for each',item))



const products = [
    {title:'Burger', price: 121},
    {title:'Pizza', price: 20},
];

const app = document.getElementById('app');
products.forEach(product => {
    app.innerHTML += `<li>${product.title} - ${product.price}</li>`
})