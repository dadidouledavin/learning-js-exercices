const test = require('./29'),
	expect = require('chai').expect;

describe('Exercice base 29 object in array filtering', () => {
	it('La fonction devrait renvoyer les auteurs des livres qui ne sont pas encore lu', () => {
		expect(test()).to.deep.equal(['Suzanne Collins']);
	});
});
