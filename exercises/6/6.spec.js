const test = require('./6'),
    expect = require('chai').expect
describe('Exercice 6', () => {

    it('Les films devraient être triés de la note la moins haute à la plus haute, qui ont en dessus de 3 et font partie de la catégorie sf', () => {
        expect(test()).to.deep.equal(['Matrix','Star wars - 1 ère trilogie']);
    });
})