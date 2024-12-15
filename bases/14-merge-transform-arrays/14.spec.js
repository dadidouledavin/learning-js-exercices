const test = require('./14'),
	expect = require('chai').expect;

describe('Exercice base 14 merge transform arrays', () => {
	it('La fonction devrait renvoyer une chaine de carcatrère qui correspond au contenu des tableaux', () => {
		expect(test()).to.deep.equal(
			'Tout à l’heure , on a vu que le chapelet de saucisses n’était pas un objet redondant. Et pourtant, on a pu lui trouver une utilisation périmétrique en s’en servant comme un fouet.'
		);
	});
});
