const test = require('./4'),
    expect = require('chai').expect
describe('Exercice 4', () => {

    it('Le trableau devrait contenir Bilbon et Frodon', () => {
        expect(test()).to.deep.equal(['Frodon Sacquet','Samsagace Gamegie','Meriadoc Brandebouc','Peregrin Touque', 'Bilbon Sacquet']);
    });
})