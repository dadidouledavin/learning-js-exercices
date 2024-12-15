const test = require('./7'),
	expect = require('chai').expect;

describe('Exercice base 7 length sort', () => {
	it('La fonction devrait renvoyer les éléments du plus grand au plus petit', () => {
		expect(test()).to.deep.equal(['pause déjeuné', 'javascript', 'formation']);
	});
});
