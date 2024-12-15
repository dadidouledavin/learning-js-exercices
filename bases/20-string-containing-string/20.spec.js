const test = require('./20'),
	expect = require('chai').expect;

describe('Exercice base 20 string containing string', () => {
	it('La fonction devrait renvoyer true car la chaine est dans le tableau', () => {
		expect(test()).to.deep.equal(true);
	});
});
