const test = require('./26'),
	expect = require('chai').expect;

describe('Exercice base 26 object properties listing', () => {
	it('La fonction devrait renvoyer le nom de toutes les propriétés', () => {
		expect(test()).to.deep.equal(['valeur', 'name', 'adress', 'ouverture', 'dateDeFin']);
	});
});
