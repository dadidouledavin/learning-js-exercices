const test2 = require('./2'),
  expect = require('chai').expect;

describe('Exercice base 2 array length', () => {
  it("La fonction devrait renvoyer 2'", () => {
    expect(test2()).to.deep.equal(2);
  });
});
