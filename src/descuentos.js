function descuento(total) {
    const descuentoXtotal = {1000 : (3/100), 3000 : (5/100), 7000 : (7/100), 10000: (10/100), 30000 : (15/100)};
    let porcentaje_descuento = 0;
    if (descuentoXtotal[total] !== 0) {
        porcentaje_descuento = descuentoXtotal[total];
    }
    if (porcentaje_descuento) {
        return Number.parseFloat(porcentaje_descuento);
    }
    return 0;
  }
  
  export default descuento;