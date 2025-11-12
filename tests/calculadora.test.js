// test("teste 1", callbackFunction);

// function callbackFunction() {
//   console.log("teste 1");
// }

// test("teste 2", function callbackFunction() {
//   console.log("teste 2");
// });

// test("teste 3", () => {
//   console.log("teste 3");
// });

// test("1 eh 1", () => {
//   expect(1).toBe(1);
// });

const calculadora = require("../models/calculadora.js");

test("somar 2+2 deveria retornar 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("somar 'banana' + 2 deveria retornar 'Erro'", () => {
  const resultado = calculadora.somar("banana", 2);
  expect(resultado).toBe("Erro");
});
