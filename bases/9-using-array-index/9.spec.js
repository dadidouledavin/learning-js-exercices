const test = require('./9'),
	expect = require('chai').expect;

describe('Exercice base 9 using array index', () => {
	it('La fonction devrait renvoyer harry potter', () => {
		expect(test()).to.deep.equal('Harry');
	});
});
