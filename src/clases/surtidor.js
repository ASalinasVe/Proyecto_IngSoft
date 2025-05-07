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
    return surtidores.filter(surtidores.disponible === true);
}

export { Surtidor, obtenerSurtidores, obtenerSurtidoresDisponibles};