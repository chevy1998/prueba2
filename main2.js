var Habitantes2 = document.querySelector('#Habitantes2');
var Empleados2 = document.querySelector('#Empleados2');
var parqueaderos2 = document.querySelector('#parqueaderos2');
var Mansion2 = document.querySelector('#Mansion2');
var Tamaño2 = document.querySelector('#Tamaño2');
var limpieza2 = document.querySelector('#limpieza2');
var servicios2 = document.querySelector('#servicios2');
var seguridad2 = document.querySelector('#seguridad2');
var administracion2 = document.querySelector('#administracion2');
var Promedio2 = document.querySelector('#Promedio2');
var btn2 = document.querySelector('#btn2');
/* Fin captura elementos */

var HabitantesForm2;
var EmpleadosForm2;
var parqueaderosForm2;
var MansionForm2;
var TamañoForm2;



limpieza2.disabled = true;
servicios2.disabled = true;
seguridad2.disabled = true;
administracion2.disabled = true;
Promedio2.disabled = true;


btn2.addEventListener('click', function(e){


    HabitantesForm2 = parseInt(Habitantes2.value);
    EmpleadosForm2 = parseInt(Empleados2.value);
    parqueaderosForm2 = parseInt(parqueaderos2.value);
    MansionForm2 = parseInt(Mansion2.value);
    TamañoForm2 = parseInt(Tamaño2.value);


    TotalLimpieza2 = getCostoLimpieza2(HabitantesForm2,EmpleadosForm2,TamañoForm2);
    limpieza2.value = TotalLimpieza2;


    TotalServiciosP2 = getServiciosPublicos2(HabitantesForm2,MansionForm2);
    servicios2.value = TotalServiciosP2;

    TotalCostoS2 = getCostoSeguridad2(parqueaderosForm2,TamañoForm2);
    seguridad2.value = TotalCostoS2;

   administracion2.value = parseInt(limpieza2.value)*0.25 + parseInt(seguridad2.value)*0.1;


});


function getCostoLimpieza2(Habitantes2,Empleados2,Tamaño2){

    T = Habitantes2 *  250 + Empleados2 *  3000 + Tamaño2 * 500

    return T;
}

function getServiciosPublicos2(Habitantes2,Mansion2){


    a = Habitantes2 * 5000 + 0.02*Mansion2

    return a;

}

function getCostoSeguridad2(parqueaderos2,Tamaño2){

    s = parqueaderos2*450 + Tamaño2*500

    return s;

}