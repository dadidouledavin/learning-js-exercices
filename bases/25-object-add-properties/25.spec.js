const test = require('./25'),
	expect = require('chai').expect;

describe('Exercice base 25 object add properties', () => {
	it('La fonction devrait renvoyer un object avec un nom et une valeur', () => {
		expect(test()).to.deep.equal({ valeur: 'hello world', name: 'le javascript' });
	});
});
