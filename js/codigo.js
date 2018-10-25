var marca1=10000;
var marca2=10000;
var marca3=10000;
var nombre1="";
var nombre2="";
var nombre3="";


function ordenar(nuevaMarca) {
  if (nuevaMarca<marca1) {
    marca3=marca2;
    marca2=marca1;
    marca1=nuevaMarca;
    nombre3=nombre2;
    nombre2=nombre1;
    nombre1=nuevoNombre;
  }else if (nuevaMarca<marca2) {
    marca3=marca2
    marca2=nuevaMarca;
    nombre3=nombre2;
    nombre2=nuevoNombre;
  }else if (nuevaMarca<marca3) {
    marca3=nuevaMarca;
    nombre3=nuevoNombre;
  }
}
var numero=Number(1);
var nuevoNombre=(prompt(`Introduce Nombre del corredor ${numero}`));
var nuevaMarca=Number(prompt(`Introduce la marca del corredor ${numero}`));
while (nuevoNombre!="salir") {
  ordenar(nuevaMarca);
  numero++;
  nuevoNombre=(prompt(`Introduce Nombre del corredor ${numero}`));
  nuevaMarca=Number(prompt(`Introduce la marca del corredor ${numero}`));
}

console.log(`
  Primer puesto para ${nombre1} con marca de ${marca1}
  Segundo puesto para ${nombre2} con marca ${marca2}
  Tercer puesto para ${nombre3} con marca ${marca3}`)
