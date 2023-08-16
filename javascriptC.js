var cantidadDeGatos = prompt ( "C. Ingrese la cantidad de gatos: ");
var cantidadDePasos = prompt ( "C. Ingrese la cantidad de pasos: ");

for (
    x=1; 
    x <= cantidadDeGatos; 
    x++) {
    var gatos= (x % 2 === 1)? "🐈":"🐈⬛";
    var pasos = "";
   for(
    y=1; 
    y<= cantidadDePasos;
    y++) {
    pasos += "🐾";
   }
    console.log ( "C : Gato#" +(x)+ ": "+ gatos + pasos)
}
