console.log("Js conectado...")

/*
El vecino ingresa el monto de su permiso de circulación para saber 
cuánto pagará tras el descuento municipal.
Lógica: Si el monto es mayor a $70.000, el descuento es del 15%. Si es menor, es del 5%.
Regla: La Función Principal debe mostrar el total a pagar con un signo de peso ($).
*/


function permiso(dinero) { // No listo 
    let operacion = dinero * 0.85;
    let operaciones = dinero * 0.95;
    if (dinero >= 70000) {
        return operacion;
    } else if (dinero < 70000) {
        return operaciones;
    } else {
        return ("Ingrese un valor válido.")
    }
};

function pagoPermisos() {
    const container = document.getElementById("container1");
    const result = document.getElementById("result1");
    const input = document.getElementById("input1");
    let dinero = parseFloat(input.value);
    let resultado = permiso(dinero); // llamado a la función con envio de parametro

    result.textContent = resultado;
    input.value = "";
    container.classList.remove("d-none");
};


/*
Gestión de nombres en la fila de espera del consultorio local.
Lógica: * Botón Normal: Agrega el nombre al final de la lista (push).
Botón Urgencia: Agrega el nombre al inicio de la lista (unshift).
Regla: El resultado debe mostrarse como una lista ordenada en el HTML. <ol>
 */

let paciente = [];

function vacunacion() {
    paciente.push(ingresarVacunacion());
    const result = document.getElementById("result2");
    result.textContent = paciente;
};

function vacunaciones() {
    paciente.unshift(ingresarVacunacion());
    const result = document.getElementById("result2");
    result.textContent = paciente;
};

function ingresarVacunacion() {
    const container = document.getElementById("container2");
    const input = document.getElementById("input2");
    let nombre = input.value;
    console.log(nombre, paciente)

    input.value = "";
    container.classList.remove("d-none");
    return nombre;
};

/*
Verificar si un RUT o nombre está en el listado de entrega de beneficios.
Lógica: Tener un arreglo con al menos 6 nombres. Usar un ciclo for para buscar 
si el dato ingresado existe en la lista.
Regla: La función debe devolver "Beneficiario Verificado" o "No registrado".
*/

let nombres = ["Victor", "Enrique", "Alberto", "Daniel", "Marcelo"];
// let RUT = ["27.984.356-3", "23.345.456-7", "25.475.579-5", "25.792.356-6", "18.578.923-4", "15.945.934-5"];

function modelo(subsidio) {

    for (let i = 0; i < nombres.length; i++) {
        if (subsidio === nombres[i]) {
            return "Beneficiario Verificado"
        } else {
            return "No registrado"
        }
    }
};

function subsidios() {
    const container = document.getElementById("container3");
    const result = document.getElementById("result3");
    const input = document.getElementById("input3");
    let subsidio = input.value;
    let resultado = modelo(subsidio);

    result.textContent = resultado;
    input.value = "";
    container.classList.remove("d-none");
}
