const test = require('./6'),
	expect = require('chai').expect;

describe('Exercice base 6 alaphahetic sort', () => {
	it("La fonction devrait renvoyer les lettres dans l'ordre alphabétique", () => {
		expect(test()).to.deep.equal(['a', 'b', 'c', 'd']);
	});
});
