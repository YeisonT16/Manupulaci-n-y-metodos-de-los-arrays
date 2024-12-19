const products = [
    { name: "Pizza", price: 121, id: "🍕"},  
    { name: "Burger", price: 121, id: '🍔' },
    { name: "Hot cakes", price: 121, id: '🥞' },
];

const myProducts = [];
let newArray;
const productIndex = products.findIndex(item => item.id === "🍔");
if (productIndex !== -1) {
    myProducts.push(products[productIndex]);
    
    //SOLUCION MUTANDO EL ARRAY ORIGINAL:
    //products.splice(productIndex, 1)

    //SOLUCION SIN MUTAR EL ARRAY ORIGINAL:
    newArray = products.filter(item => item != products[productIndex])}; 
console.log("Products:",products);
console.log("MyProducts:", myProducts);
console.log("newArray:",newArray);
console.log("-".repeat(10));

//update
const productsV2 = [
    { name: "Pizza", price: 121, id: "🍕"},  
    { name: "Burger", price: 121, id: '🍔' },
    { name: "Hot cakes", price: 121, id: '🥞' },
];


const update = {
    id: "🥞",
    changes: {
        price: 200,
        description: "delicious",
    },
}

const productIndexV2 = productsV2.findIndex(item => item.id === update.id);

//SOLUCION MUTANDO EL ARRAY ORIGINAL:
//productsV2[productIndexV2] = {
//    ...productsV2[productIndexV2],
//    ...update.changes,
//}


// SOLUCION SIN MUTAR EL ARRAY ORIGINAL:
const updatedProductsV2 = productsV2
.filter(item => item.id !== update.id)
.concat({...productsV2[productIndexV2], ...update.changes});
console.log("OriginalList:",productsV2);
console.log("UpdatedList:",updatedProductsV2);


//OTRA SOLUCION SIN MUTAR EL ARRAY ORIGINAL Y MAS SIMPLE:
const newArray2 = productsV2.map(item => {
    if(item.id === update.id){
        return {
            ...item,
            ...update.changes
        }
    }else{
        return {
            ...item
        }
    }
});