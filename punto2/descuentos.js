function descuentos (precio){
    let descuento = 0;

    if (precio > 1000) {
        descuento = 0.20; 
    } else if (precio >= 500) {
        descuento = 0.10; 
    }

    const precioFinal = precio - (precio * descuento);
    return precioFinal;

}
export {descuentos}