let double = "$&%&//&$%#%";
let simples = "$%&$34/%$$#$";
let backticks = "4$%&%UrEfghy4";

let Lista_invitados = `invitados:
*Maria 
*Juan
*Pedro
*Miguel
*Diana
 `;

//  alert(Lista_invitados);

 // Caracteres especiales \

 /*
 \n -> Nueva linea, salto de linea 
 \t -> Tabulacion
 \\ -> Backslash
 \', \", \` -> Cada una de las comillas
 */

 console.log("Hola\nmundo");
 Lista_invitados = "\\Invitados:\n* Maria\t* Juan\t* Pedro\t* Miguel\t* Diana";
 console.log(Lista_invitados);

 //longitud 

// console.log("123".length);
// console.log("Mi\n".length);

let str = 'Hola';

// console.log(str(0))
// console.log(str.charAt(0));
// console.log(str(-2));
// console.log(str.at(-2));

// for ,, of

for(let char of "Hola"){
    console.log(char);
}

console.log(str.toUpperCase());
console.log(str.toLowerCase());
str = "hola";
console.log(str[0].toUpperCase(),str[1].toLowerCase(),str[2].toLowerCase(),str[3].toLowerCase());