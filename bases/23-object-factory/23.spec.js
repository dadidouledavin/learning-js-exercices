const test = require('./23'),
	expect = require('chai').expect;

describe('Exercice base 23 object factory', () => {
	it('La fonction devrait renvoyer un object correct', () => {
		expect(test()).to.deep.equal({ valeur: 3, nom: 'hephaistos' });
	});
});
