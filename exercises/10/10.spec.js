const test = require('./10'),
    expect = require('chai').expect
describe('Exercice 10', () => {

    it('La moyenne des notes doit être de 8', () => {
        expect(test()).to.equal(8);
    });
})