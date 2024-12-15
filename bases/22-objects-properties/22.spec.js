const test = require('./22'),
	expect = require('chai').expect;

describe('Exercice base 22 object properties', () => {
	it('La fonction devrait renvoyer 3', () => {
		expect(test()).to.deep.equal(3);
	});
});
