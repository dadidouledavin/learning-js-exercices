// Pour vérifier vos résultats lancez la commande "npm run test:base:5" dans le terminal

function test() {
	// Trier les éléments par ordre de grandeur inversé (plus grand au plus petit)
	// votre programme devrait retourner [5, 4, 3, 2, 1]
	const tableau = [2, 4, 5, 3, 1];

	// votre code ici
	return tableau.sort((a, b) => b - a);
}

module.exports = test;
