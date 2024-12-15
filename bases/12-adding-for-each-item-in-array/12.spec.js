const test = require('./12'),
	expect = require('chai').expect;

describe('Exercice base 12 adding for each item in array', () => {
	it('La fonction devrait renvoyer un tableau qui contient exactement +1 à chaque élément', () => {
		expect(test()).to.deep.equal([2, 3, 4, 5]);
	});
});
