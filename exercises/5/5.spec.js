const test = require('./5'),
    expect = require('chai').expect
describe('Exercice 5', () => {

    it('Les youtubeurs devraient être triés du plus de vues aux moins de vues', () => {
        expect(test()).to.deep.equal(['e-penser','Le fossoyeur de films','BenzaieTv','Dep MMI Le Puy']);
    });
})