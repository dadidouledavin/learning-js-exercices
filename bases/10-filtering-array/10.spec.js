const test = require('./10'),
	expect = require('chai').expect;

describe('Exercice base 10 filtering array', () => {
	it('La fonction devrait renvoyer seulement des nombres plus grands ou égal que 10', () => {
		expect(test()).to.deep.equal([10, 15, 20, 25]);
	});
});
