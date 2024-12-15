const test = require('./15'),
	expect = require('chai').expect;

describe('Exercice base 15 string array transform', () => {
	it('La fonction devrait renvoyer un tableau correspondant à la chaine de caractère', () => {
		expect(test()).to.deep.equal(['SKU213084', 'SKU39230', 'SKU343944', 'SKU29320394']);
	});
});
