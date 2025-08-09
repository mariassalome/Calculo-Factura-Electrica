
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

const calcularTotal = () => {
  return calcularSubtotal() + calcularIva() + obtenerCargoFijo();
};


function mostrarFactura() {
  console.log("Su factura mensual de energía: ");
  console.log("Consumo mensual: " + obtenerConsumoMensual() + " kWh");
  console.log("Tarifa por kWh: " + obtenerTarifaBase());
  console.log("Subtotal: $" + calcularSubtotal());
  console.log("IVA (" + obtenerPorcentajeIva() + "%): $" + calcularIva());
  console.log("Cargo fijo por servicio: $" + obtenerCargoFijo());
  console.log("Total a pagar: $" + calcularTotal());
}