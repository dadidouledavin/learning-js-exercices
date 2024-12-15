const test = require('./11'),
	expect = require('chai').expect;

describe('Exercice base 11 filter word starting with f', () => {
	it('La fonction devrait renvoyer seulement les mots ne contenant pas la lettre f', () => {
		expect(test()).to.deep.equal(['ballon', 'verre']);
	});
});
