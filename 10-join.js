const elements = ["hola", null, "como", "estas"]

let acumulator = ""
const separator = "/"
for (let i = 0; i<elements.length; i++){
  const element = elements[i] ?? ""
  if(i !== elements.length-1){
    acumulator += element + separator
  }else{
    acumulator += element
  }
}

console.log('rta',acumulator) // 'hola//como/estas'



const resultado = elements.join("/")
console.log('rta2',resultado) // 'hola//como/estas'