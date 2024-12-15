const test = require('./24'),
	expect = require('chai').expect;

describe('Exercice base 24 modify object properties', () => {
	it('La fonction devrait renvoyer un objet dont la valeur est "hello world"', () => {
		expect(test()).to.deep.equal({ valeur: 'hello world' });
	});
});
