const test = require('./8'),
	expect = require('chai').expect;

describe('Exercice base 8 find severus', () => {
	it('La fonction devrait renvoyer l index 3', () => {
		expect(test()).to.deep.equal(3);
	});
});
