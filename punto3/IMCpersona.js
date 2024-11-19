let categoriaIMC = (imc) => {
    if (imc < 18.5) {
        return "Bajo peso";
    } else if (imc >= 18.5 && imc < 25) {
        return "bien de peso ";
    } else if (imc >= 25 && imc < 30) {
        return "ta gordito";
    } else {
        return "Obesidad";
    }
}
export {categoriaIMC}