const script = require('./script');
console.log(script);

it('Se sum for chamada com dois número retorna a soma', () => {
  const soma = script.sum(300, 500);
  expect(soma).toBe(800);
});

it('Se sum for chamada com um parâmetro diferente de número é lançado um erro com a messagem "Precisa ser um número"', () => {
  const soma = script.sum('2', 30);
  expect(soma).toThrow();
  expect(soma).toThrow('Precisa ser um número');
});