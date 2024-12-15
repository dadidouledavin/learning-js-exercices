const test1 = require('./1'),
    expect = require('chai').expect
    
describe('Exercice S1', () => {

    it('L\'équipe Overwatch devrait être complète', () => {
        expect(test1()).to.deep.equal(['macree', 'hanzo', 'reinhardt', 'mercy', 'mei', 'tracer']);
    });
})