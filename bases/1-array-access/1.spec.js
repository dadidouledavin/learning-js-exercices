const test1 = require('./1'),
  expect = require('chai').expect;

describe('Exercice base 1 array access', () => {
  it("La fonction devrait renvoyer 'Hello World'", () => {
    expect(test1()).to.deep.equal('Hello world');
  });
});
