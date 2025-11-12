test("teste 1", callbackFunction);

function callbackFunction() {
  console.log("teste 1");
}

test("teste 2", function callbackFunction() {
  console.log("teste 2");
});

test("teste 3", () => {
  console.log("teste 3");
});

test("1 eh 1", () => {
  expect(1).toBe(1);
});
