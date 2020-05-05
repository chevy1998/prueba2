var Habitantes3 = document.querySelector('#Habitantes3');
var Empleados3 = document.querySelector('#Empleados3');
var parqueaderos3 = document.querySelector('#parqueaderos3');
var Mansion3 = document.querySelector('#Mansion3');
var Tamaño3 = document.querySelector('#Tamaño3');
var limpieza3 = document.querySelector('#limpieza3');
var servicios3 = document.querySelector('#servicios3');
var seguridad3 = document.querySelector('#seguridad3');
var administracion3 = document.querySelector('#administracion3');
var Promedio3 = document.querySelector('#Promedio3');
var btn3 = document.querySelector('#btn3');
var limpieza2 = document.querySelector('#limpieza2');
var limpieza = document.querySelector('#limpieza');
/* Fin captura elementos */

var HabitantesForm3;
var EmpleadosForm3;
var parqueaderosForm3;
var MansionForm3;
var TamañoForm3;



limpieza3.disabled = true;
servicios3.disabled = true;
seguridad3.disabled = true;
administracion3.disabled = true;
Promedio3.disabled = true;


btn3.addEventListener('click', function(e){


    HabitantesForm3 = parseInt(Habitantes3.value);
    EmpleadosForm3 = parseInt(Empleados3.value);
    parqueaderosForm3 = parseInt(parqueaderos3.value);
    MansionForm3 = parseInt(Mansion3.value);
    TamañoForm3 = parseInt(Tamaño3.value);


    TotalLimpieza3 = getCostoLimpieza3(HabitantesForm3,EmpleadosForm3,TamañoForm3);
    limpieza3.value = TotalLimpieza3;


    TotalServiciosP3 = getServiciosPublicos3(HabitantesForm3,MansionForm3);
    servicios3.value = TotalServiciosP3;

    TotalCostoS3 = getCostoSeguridad3(parqueaderosForm3,TamañoForm3);
    seguridad3.value = TotalCostoS3;

   administracion3.value = parseInt(limpieza3.value)*0.25 + parseInt(seguridad3.value)*0.1;

   Promedio3.value = (parseInt(limpieza2.value) + parseInt(limpieza3.value) + parseInt(limpieza.value))/3;


});


function getCostoLimpieza3(Habitantes3,Empleados3,Tamaño3){

    T = Habitantes3 *  250 + Empleados3 *  3000 + Tamaño3 * 500

    return T;
}

function getServiciosPublicos3(Habitantes3,Mansion3){


    a = Habitantes3 * 5000 + 0.02*Mansion3

    return a;

}

function getCostoSeguridad3(parqueaderos3,Tamaño3){

    s = parqueaderos3*450 + Tamaño3*500

    return s;

}

