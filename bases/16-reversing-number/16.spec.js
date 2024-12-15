const test = require('./16'),
	expect = require('chai').expect;

describe('Exercice base 16 reversing number', () => {
	it('La fonction devrait renvoyer une chaine de caractère de l inverse du nombre qui est dans l ennonce', () => {
		expect(test()).to.deep.equal('483208323');
	});
});
