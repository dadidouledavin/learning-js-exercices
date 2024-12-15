const test = require('./19'),
	expect = require('chai').expect;

describe('Exercice base 19 subset of array', () => {
	it('La fonction devrait renvoyer seulement une partie du tableau', () => {
		expect(test()).to.deep.equal([
			'Harry potter',
			'Ron Weasley',
			'Hermione Granger',
			'Tom jedusor',
			'Albus dumbledore',
			'Severus Rogue',
		]);
	});
});
