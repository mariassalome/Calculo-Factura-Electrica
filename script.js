
function obtenerConsumoMensual() {
  return 410;
}

function obtenerTarifaBase() {
  return 620;
}

const obtenerCargoFijo = function() {
  return 3500;
}; 

const obtenerPorcentajeIva = function() {
  return 19;
};

const calcularSubtotal = () => {
  return obtenerConsumoMensual() * obtenerTarifaBase();
};

const calcularIva = () => {
  return (calcularSubtotal() * obtenerPorcentajeIva()) / 100;
};