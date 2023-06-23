const calculator = require('../calculadora');

test('suma 2 numeros y regresa el resultado', () =>{
 expect(calculator.sum(10,10)).toBe(20);
});

test('calcula la potencia de un numero', () =>{
    expect(calculator.power(2,3)).toBe(8);
   });
   