var cantidadDeGatos  = prompt ('A. Ingrese aquí la cantidad de gatos: ');

for (
    x = 1 ; 
    x <= cantidadDeGatos; 
    x++
    ) {
    var gatos = (x % 3 === 1)?'😺':(x % 3 === 2)?'😸':'😹';
    console.log ("A : Gato#"+ (x) +": " + gatos);
}







