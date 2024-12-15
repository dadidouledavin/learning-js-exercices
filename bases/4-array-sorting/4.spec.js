const test = require('./4'),
	expect = require('chai').expect;

describe('Exercice base 4 array sorting-', () => {
	it("La fonction devrait renvoyer les nombres dans l'ordre croissant", () => {
		expect(test()).to.deep.equal([1, 2, 3, 4, 5]);
	});
});
