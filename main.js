
var Habitantes = document.querySelector('#Habitantes');
var Empleados = document.querySelector('#Empleados');
var parqueaderos = document.querySelector('#parqueaderos');
var Mansion = document.querySelector('#Mansion');
var Tamaño = document.querySelector('#Tamaño');
var limpieza = document.querySelector('#limpieza');
var servicios = document.querySelector('#servicios');
var seguridad = document.querySelector('#seguridad');
var administracion = document.querySelector('#administracion');
var Promedio = document.querySelector('#Promedio');
var btn = document.querySelector('#btn');
/* Fin captura elementos */

var HabitantesForm;
var EmpleadosForm;
var parqueaderosForm;
var MansionForm;
var TamañoForm;



limpieza.disabled = true;
servicios.disabled = true;
seguridad.disabled = true;
administracion.disabled = true;
Promedio.disabled = true;


btn.addEventListener('click', function(e){


    HabitantesForm = parseInt(Habitantes.value);
    EmpleadosForm = parseInt(Empleados.value);
    parqueaderosForm = parseInt(parqueaderos.value);
    MansionForm = parseInt(Mansion.value);
    TamañoForm = parseInt(Tamaño.value);


    TotalLimpieza = getCostoLimpieza(HabitantesForm,EmpleadosForm,TamañoForm);
    limpieza.value = TotalLimpieza;


    TotalServiciosP = getServiciosPublicos(HabitantesForm,MansionForm);
    servicios.value = TotalServiciosP;

    TotalCostoS = getCostoSeguridad(parqueaderosForm,TamañoForm);
    seguridad.value = TotalCostoS;

   administracion.value = parseInt(limpieza.value)*0.25 + parseInt(seguridad.value)*0.1;


});


function getCostoLimpieza(Habitantes,Empleados,Tamaño){

    T = Habitantes *  250 + Empleados *  3000 + Tamaño * 500

    return T;
}

function getServiciosPublicos(Habitantes,Mansion){


    a = Habitantes * 5000 + 0.02*Mansion

    return a;

}

function getCostoSeguridad(parqueaderos,Tamaño){

    s = parqueaderos*450 + Tamaño*500

    return s;

}

