// Pour vérifier vos résultats lancez la commande "npm run test:base:3" dans le terminal

function test() {
	/// Ajoutez +1 à chaque valeur du tableau
	// votre programme devrait afficher [ 2, 3, 4, 5 ] dans la console
	// Indice: utilisez .map
	const tableau = [1, 2, 3, 4];

	// votre code ici
	return tableau.map((item) => item + 1);
}

module.exports = test;
