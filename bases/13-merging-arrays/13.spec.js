const test = require('./13'),
	expect = require('chai').expect;

describe('Exercice base 13 merging arrays', () => {
	it('La fonction devrait renvoyer un tableau qui fusionne les deux de l énnoncé', () => {
		expect(test()).to.deep.equal(['one', 'two', 'three', 'four', 'five']);
	});
});
