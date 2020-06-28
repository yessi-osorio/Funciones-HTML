function hexadecimal()
{
    let name = document .getElementById("hexa").Value;
    var fecha = name.tostring();
    console.log(fecha);
    var cadena2 = fecha.slice(0, 4);
    var cadena3 = fecha.slice(5, 7);
    var cadena4 = fecha.slice(8, 11);
    console.log(cadena4)
    anio = parseInt(cadena2);
    mes = parseInt(cadena3);
    dia = parseInt(cadena4);

    let hexanio = anio.tostring(16); // A la base 16
    let hexmes = mes.tostring(16); // A la base 16
    let hexdia = dia.tostring(16); // A la base 16
    console.log("El numero", anio, hexanio);
    console.log("El numero", mes, hexmes);
    console.log("El numero", dia, hexdia);

    var hola = hexdia +"/"+hexmes+"/"+hexanio;

    console.log(hola);

    // $("#resultado").html("<span></span>")

    document.getElementById('resultado').innerHTML=hola;
}
