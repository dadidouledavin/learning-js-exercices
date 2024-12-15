const test3 = require('./3'),
	expect = require('chai').expect;

describe('Exercice base 3 last array item', () => {
	it("La fonction devrait renvoyer 'last one'", () => {
		expect(test3()).to.deep.equal('last one');
	});
});
