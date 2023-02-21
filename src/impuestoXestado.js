function impuestosporEstado(estado) {
    const impuestosXEstados = {"UT": (6.65/100), "NV" : (8/100), "TX" : (6.25/100), "AL": (4/100), "CA" : (8.25/100)};
    return impuestosXEstados[estado];
  }
  
  export default impuestosporEstado;