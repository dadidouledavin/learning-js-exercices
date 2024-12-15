const test = require('./28'),
	expect = require('chai').expect;

describe('Exercice base 28 object in array', () => {
	it('La fonction devrait renvoyer les auteurs des livres', () => {
		expect(test()).to.deep.equal(['Bill Gates', 'Steve Jobs', 'Suzanne Collins']);
	});
});
