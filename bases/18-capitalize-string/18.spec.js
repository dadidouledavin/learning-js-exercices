const test = require('./18'),
	expect = require('chai').expect;

describe('Exercice base 18 capitalize string ', () => {
	it('La fonction devrait renvoyer une chaine de caractère avec chaque premier caractère en majuscule', () => {
		expect(test()).to.deep.equal('The Quick Brown Fox');
	});
});
