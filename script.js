
const form = document.getElementById("form");
const resultado = document.getElementById("resultado");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const PrimeiroNumero = parseFloat(document.getElementById("input1").value);
    const SegundoNumero = parseFloat(document.getElementById("input2").value);
    
    const operation = document.getElementById("select").value

    let calc;

    if(operation === "Adicionar") {
        calc = PrimeiroNumero + SegundoNumero;
    } else if (operation === "Subtracao"){
        calc = PrimeiroNumero - SegundoNumero;
    } else if (operation === "Multiplicacao"){
        calc = PrimeiroNumero * SegundoNumero;
    } else if (operation === "Divisao"){
        calc = PrimeiroNumero / SegundoNumero;
    }

    resultado.textContent = "Resultado: " + calc;
});
