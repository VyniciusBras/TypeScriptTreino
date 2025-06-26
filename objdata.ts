function criaObjeto(data: string): { dia: string, mes: string, ano: string } {
  const partes = data.split("/");

  return {
    dia: partes[0],
    mes: partes[1],
    ano: partes[2]
  };
}

// Testes
console.log(criaObjeto("12/08/2020"));
console.log(criaObjeto("08/01/2012"));
console.log(criaObjeto("24/03/2000")); 
