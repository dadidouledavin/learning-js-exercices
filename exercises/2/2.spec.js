const test = require('./2'),
    expect = require('chai').expect
describe('Exercice 2', () => {

    it('La chaine de caractère devrait représenter l\' équipe de League of Legends', () => {
        expect(test()).to.equal('shen nidalee ryze sivir alistar');
    });
})