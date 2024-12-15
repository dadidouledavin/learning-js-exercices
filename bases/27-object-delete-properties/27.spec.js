const test = require('./27'),
	expect = require('chai').expect;

describe('Exercice base 27 object delete properties', () => {
	it('La fonction devrait renvoyer l objet sans la propriété valeur', () => {
		expect(test()).to.deep.equal({
			name: 'Campus26',
			adress: 'Cité du numérique',
			ouverture: '8h30 - 16h30',
			dateDeFin: 'Aout 2024',
		});
	});
});
