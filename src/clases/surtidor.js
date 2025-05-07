class Surtidor {
    constructor(id, nombre, ubicacion,tipo,disponible = true, precio = 0, cantidad = 0) {
        this.id = id;
        this.nombre = nombre;
        this.ubicacion = ubicacion;
        this.tipo = tipo;
        this.disponible = disponible;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

function obtenerSurtidores() {
    const surtidores = JSON.parse(localStorage.getItem("surtidores")) || [];
    return surtidores;
}

function obtenerSurtidoresDisponibles() {
    const surtidores = JSON.parse(localStorage.getItem("surtidores")) || [];
    return surtidores.filter(s => s.disponible === true);
}

function obtenerSurtidoresDisponiblesGasolina() {
    const surtidores = JSON.parse(localStorage.getItem("surtidores")) || [];
    return surtidores.filter(s => s.disponible === true && s.tipo === "gasolina");
}

export { Surtidor, obtenerSurtidores, obtenerSurtidoresDisponibles, obtenerSurtidoresDisponiblesGasolina};