let esBisiesto = (año) => {
    return ((año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0)) ? "Es bisiesto" : "No es bisiesto";
}
export {esBisiesto}