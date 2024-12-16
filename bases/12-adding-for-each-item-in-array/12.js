// Pour vérifier vos résultats lancez la commande "npm run test:base:12" dans le terminal

function test() {
	/// Ajoutez +1 à chaque valeur du tableau
	// votre programme devrait retourner [ 2, 3, 4, 5 ]
	// Indice: utilisez .map
	const tableau = [1, 2, 3, 4];

	// votre code ici
	return tableau.map((a) => a + 1);
}

module.exports = test;
