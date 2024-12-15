const test = require('./5'),
	expect = require('chai').expect;

describe('Exercice base 4 array sorting-', () => {
	it("La fonction devrait renvoyer les nombres dans l'ordre décroissant", () => {
		expect(test()).to.deep.equal([5, 4, 3, 2, 1]);
	});
});
