var cantidadDeGatos = prompt ( "B Ingrese la cantidad de gatos: ");
var cantidadDePasos = prompt ( "B Ingrese la cantidad de pasos: ");

for (
    x=1; 
    x <= cantidadDeGatos; 
    x++) {
    var pasos = "";
   for(
    y=1; 
    y<= cantidadDePasos;
    y++) {
    pasos += "🐾";
   }
    console.log ( "B : Gato#" +(x)+ ": "+ "🐈"+ pasos)

}
