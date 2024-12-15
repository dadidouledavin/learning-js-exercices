const test = require('./17'),
	expect = require('chai').expect;

describe('Exercice base 17 sorting in string', () => {
	it('La fonction devrait renvoyer une chaine de caractère ordonné dans l ordre alphabetique', () => {
		expect(test()).to.deep.equal('aeghiilmort');
	});
});
