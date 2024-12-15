const test = require('./3'),
    expect = require('chai').expect
describe('Exercice 3', () => {

    it('La chaine de caractère devait avoir le nom des champion avec une majuscule', () => {
        expect(test()).to.equal('Shen Nidalee Ryze Sivir Alistar');
    });
})