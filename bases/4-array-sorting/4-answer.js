// Pour vérifier vos résultats lancez la commande "npm run test:base:3" dans le terminal

function test() {
	// Trier les éléments par ordre de grandeur (plus petit au plus grand)
	// votre programme devrait afficher [1,2,3,4,5] dans la console
	const tableau = [2, 4, 5, 3, 1];

	// votre code ici

	return tableau.sort((a, b) => a - b);
}

module.exports = test;
