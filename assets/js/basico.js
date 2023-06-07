///////////////////
// OBJETOS
///////////////////

let userEmpty = {};
let userEmpty2 = new Object();

let user = {       // Un objeto
    name: "john",  // En la clave "name" se almacena el valor "John"
    age: 30        // En la clave "age" se almacena el valor "30"
};

console.info( `Nombre: ${user.name}`);
console.info( `Edad: ${user.age}`);

user.isAdmin = true;
console.log(user.isAdmin);

user.nam = "Mary";
console.log(user.nam);
console.info( `Nombre: ${user.name}`);

delete user.nam;
console.log(user.nam);

user = {
    name: "john",
    age: 30,
    "likes birds": true,
};

console.info(`¿Le gustan las aves?: ${user["likes birds"]}`)

// let key = "likes birds";

// console.log(user[key]);
// console.log(user.key); // undefined

// key = prompt("¿Que dato quieres saber del usuario?", "name")
// console.info( `Nombre: ${user[key]}`);

// function makeUser(name, age) {
//     return{
//         name: name,
//         age: age,
//     };
// }

function makeUser(name, age) {
    return{
        name,
        age,
    };
}

let user2 = makeUser("Diana", 22)
console.log(user2.name);


// key = prompt("¿Que dato quieres saber del usuario?", "name")

// "Key" in object

// console.info( key in user)
// console.info( `Nombre: ${user[key]}`);

// for .. in

for (let key in user) {
    console.log(key + ": " + user[key]);
}

//juan 200 - ana 160 pedro 130 - maria 240 - miguel 210 - lucas 180.


// let salario = {  
//     Juan: 200,
//     Ana: 160,
//     Pedro: 130,
//     Maria: 240,
//     Miguel: 210,
//     Lucas: 180,
// };


// let totalSalarios = 0;
// for(let Key in salarios){
//     totalSalarios += salario[key];
// }

// console.log(`Total salarios: ${totalSalarios}`);



let menu = {
    ancho: 200,
    alto: 300,
    titulo: "Mi menú",
};

let multiplicacion = 2;
for(let key in menu){
    
    multiplicacion * menu[key];
}

console.log(`resultado final: ${multiplicacion}`);

//////////////////////////////////////////////
// Referencias de objetos
//////////////////////////////////////////////

let mensaje = "Hello!";
let phrase = mensaje;

let usuario = {
    name: "Jhon",
};

let admin = user; 

admin.name = "Pablo";

console.log(usuario.name);

let a = {};
let b = {};

console.log(a == b);