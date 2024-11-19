function esElegibleParaPrestamo(salarioAnual, puntajeCredito) {
    if (salarioAnual > 30000 && puntajeCredito > 650) {
        return "si se le puede hacer un  préstamo";
    } else {
        return "No se le puede hacer un préstamo";
    }
}
export {esElegibleParaPrestamo}