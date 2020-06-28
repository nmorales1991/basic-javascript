/* -------------------------------------------------------------------------- */
/*                               Función Flecha                               */
/* -------------------------------------------------------------------------- */


//función normal
/*function test(){
    return "Función normal"
}
//función flecha
let testflecha = ()=>{ //siempre son anónimas, se pueden asignar a una variable
    return "Función flecha"
}

console.log(test())
console.log(testflecha())

//se pueden resumir para ahorrar código
let testflecha2 = () => "Función flecha resumida" //si la función sólo hace un return de algo, sin algún código antes, entonces se pueden sacar las llaves y el return, también puede ser entre paréntesis ()=>("función flecha resumida")
console.log(testflecha2())

//parámetros, si sólo recibe un parámetro se pueden sacar los paréntesis, si viene más de uno, o ninguno, entonces se dejan

let unparametro = x => console.log("un parámetro:",x)
let multiparametro = (x,y,z) => console.log("varios parámetros:",x,y,z)

unparametro(6)
multiparametro(4,6,7)


//this en función normal
let objeto ={
    nombre:"Nicolás",
    edad:29,
    nombreyapellido:function(){
        console.log("this en función normal:",this.nombre, this.edad) //this apunta al contexto actual, en este caso a los elementos del objeto. Resultado: Nicolás 29
    }
}
objeto.nombreyapellido()

//this en función flecha
let objetoflecha ={
    nombre:"Nicolás",
    edad:29,
    nombreyapellido:()=>{
        console.log("this en función flecha:",this.nombre, this.edad) //this apunta al contexto superior, en este caso apunta a window. Resultado: undefined undefined
    }
}
objetoflecha.nombreyapellido()*/


/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */




/* -------------------------------------------------------------------------- */
/*                                Array Methods                               */
/* -------------------------------------------------------------------------- */


//métodos para el manejo de arrays, son varios, acá los que más se usan
let array = [1,2,3,4,5,6]
//map , genera un nuevo array aplicando alguna función a cada elemento, sirve mucho también para recorrer arrays
/*
array.map(elem=>{ //uso básico para recorrer arrays
    console.log(elem)
})

let arraymap2 = array.map(elem=> elem*2) //guardo el nuevo array multiplicando cada ítem x2
console.log(array) //el array original no tiene cambios
console.log(arraymap2)*/

//filter, crea un nuevo array con todos los elementos que cumplan la condición de la función asignada
/*let arrayfilter = array.filter(elem=>elem!==4) //retorno los elementos que sean diferentes a 4
console.log(arrayfilter)*/

//find, devuelve el elemento según la condición de la función. Find se detiene al encontrar el elemento, o devuelve undefined
/*let elemfind = array.find(elem=>elem===3) //necesito el elemento que sea igual a 3
console.log(elemfind)*/

//findIndex, parecido a find pero devuelve el índice del elemento, si no encuentra entonces devuelve -1
/*let elemfindIndex = array.findIndex(elem=>elem===2)
console.log(elemfindIndex)*/

//forEach, parecido a map pero no genera un nuevo array
/*array.forEach(elem=>{
    console.log(elem)
})*/

//some, comprueba si al menos 1 elemento cumple la condición dada, devuelve true o false
/*let elemsome = array.some(elem=>elem===7)//no existe elemento 7
console.log(elemsome) //false*/

//every, parecido a some, pero comprueba que todos los elementos cumplan la condición, devuelve true o false
/*let elemevey = array.every(elem=>elem>3) //comprueba que sean mayores a 3
console.log(elemevey)//false*/

//reduce, aplica una función reductura, la cual hace algo para cada elemento y devolviendo un elemento único
/*let funcionreductora = (valoranterior,valoractual) => valoranterior+valoractual  //una función reductora admite algunos parámetros, los más importantes son el valor anterior, el valor actual, el índice del elemento que se está recorriendo en el momento.

let sumaarray = array.reduce(funcionreductora)
console.log(sumaarray) //1+2+3+4+5+6

//reduce también admite un valor inicial como segundo parámetro
let sumaarray2 = array.reduce(funcionreductora,20)
console.log(sumaarray2) //20+1+2+3+4+5+6

let juntaarray = [[1,2],[3,5,6],7,"hola",array].reduce((valoranterior,valoractual,index)=>{
    console.log(`valoranterior: ${valoranterior}; valoractual: ${valoractual}; index: ${index}`) //acá se ve lo que va haciendo reduce, recorre cada elemento haciendo algo, el valor anterior es el resultado de la función de la vuelta anterior, el valor actual es el valor del elemento de la vuelta actual, el index es el valor del index actual
    return valoranterior.concat(valoractual)
},['chao']) //valor inicial opcional

console.log(juntaarray) //devuelve un único array*/

//los demás métodos importantes son para agregar, eliminar, cortar y ordenar arrays. pop, push, shift, unshift, splice, slice, sort


/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */




/* -------------------------------------------------------------------------- */
/*                               Spread Operator                              */
/* -------------------------------------------------------------------------- */


//toma un iterable, casi siempre arrays, y permite insertarlos en alguna variable, otro array, función, etc.
/*let array1 = [1,2,3]
let array2 = [5,...array1,7] //inserto el primer array dentro del segundo
console.log(array2)

let copia = [...array1] //obtengo una copia del primer array
console.log(copia)

let test = (x,y,z)=>{
    console.log(x,y,z)
}
test(...array1) //envío los elementos del array como parámetros para la función
*/

//--------------------------------------------------------------------------------------
//Destructuración----------------------------------------------------------------------
//permite tomar un array o un objeto con varios elementos y separarlos para ser guardados en variables
/*
let array = [1,2,3,'hola']
let [numero1,numero2,numero3,texto] = array // es con corchetes
console.log(texto)

let objeto ={
    nombre:"Nicolás",
    apellido:"Morales",
    edad:29
}
let {nombre,edad} = objeto //es con llaves
console.log(nombre)
*/


/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */





/* -------------------------------------------------------------------------- */
/*                                   Clases                                   */
/* -------------------------------------------------------------------------- */


/*
class Prueba {
    constructor(){//inicializa valores
        this.x = 1
    }

    getx=()=>{
        return this.x
    }
    setx = x =>{
        this.x = x // this hace referencia al contexto actual, en este caso a la clase
    }

    static suma = (y,x)=>{//método estático se puede llamar sin instanciar la clase
        return y+x
    }
}

class Prueba2 extends Prueba { //extiende todos los métodos de la clase padre
    getz = ()=>{
        return 666
    }
}

const p = new Prueba() //instanciar clase
const p2 = new Prueba2() //instanciar clase
let x = p.getx()
p.setx(444)
let y = p.getx()
console.log(p2.getz())
console.log(p2.getx())
console.log(Prueba.suma(x,y))// método estático
*/


/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */




/* -------------------------------------------------------------------------- */
/*                                  callbacks                                 */
/* -------------------------------------------------------------------------- */


//función dentro de otra función

/*let getUsuario = (id, callback)=>{

    if(id===5) return callback('Este usuario no existe')//ejecuto callback, primer parámetro siempre es el error (en este caso sólo es error)

    return callback(null,{nombre:'Nicolás',id})//ejecuto callback, primer parámetro siempre es el error (en este caso no hay error y devuelvo usuario)
}

getUsuario(6, (err,data)=>{
    if(err) return console.error(err)//reviso si hay error
    console.log('Usuario : ',data)
})
*/


/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */




/* -------------------------------------------------------------------------- */
/*                                  Promesas                                  */
/* -------------------------------------------------------------------------- */


//otra manera de manejar callbacks
/*let getSalario = user =>{
    return new Promise((resolve,reject)=>{
        if (user.id===1) return reject("Usuario no tiene salario")
        return resolve({usuario:user.nombre, salario:5000})
    })
}

let getUsuario = id =>{
    return new Promise((resolve,reject)=>{ // retorno una promesa, la cual tiene 2 callbacks que se ejecutan cuando se resuelva la promesa o cuando haya un error
        if (id===5) return reject("No existe este usuario") //retorno reject para el error
        return resolve({nombre:'Nicolás',id}) // retorno resolve con los datos
    })
}

getUsuario(6).then(usuario=>{ //obtengo una promesa pendiente, con then devuelvo una promesa con 2 parámetros, el success y error. El error se puede manejar con catch. 
    return getSalario(usuario) //promesa anidada, debo usar otro then
}).then(data=>{//then para la segunda promesa y obtengo la data
    console.log(data)
}).catch(err=>{
    console.error(err)
})*/
//----------------------------------------------------------
//Promise All----------------------------------------------
//es un iterable de promesas, que espera a que todo se cumpla o aparezca un rechazo
/*var p1 = Promise.resolve(3); //puedo retornar un resolve o un reject directamente
var p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 5000, "ok");
});
var p3 = Promise.reject("Hay un error"); //si un error aparece, aun que hayan funciones con timeout. Dará error inmediatamente sin esperar a las demás
Promise.all([p1, p2, p3])
  .then((values) => {
    console.log(values);
  })
  .catch((err) => {
    console.error(err);
  });*/


/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */




/* -------------------------------------------------------------------------- */
/*                                 Async Await                                */
/* -------------------------------------------------------------------------- */


//otra manera de manejar promesas y prevenir el callback hell
/*let function1 = (x) => {
    return new Promise((resolve,reject)=>{
        if (x===1) return reject("no")
        
        setTimeout(() => {
            resolve(x);
        }, 4000);
    })
};

let info = async () => { //con async devuelvo una promesa, entonces me ahorro el código de return new Promise, etc
  let x = await function1(1); //await pone en pausa la función hasta que se resuelva una Promesa
  return x;
};

info().then(data=>{
    console.log(data)
}).catch(err=>{
    console.error(err)
})*/


/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */