const saludar = () => {
    console.log("hello world!")
}

const getsalute = (name,  segundoname,  apellido) => {
return "hola " +  name  + " " + segundoname + " " +  apellido
}
console.log(getsalute('carol','dahiana','castrillon'))
//saludar()
//console.log(getsalute('carol'))
//console.log(getsalute('barbara'))
//console.log("hola")

const espar = (number) => {
    if (number % 2 == 0) {
        return true
    } else {
return false
    }

}
console.log(espar(2))