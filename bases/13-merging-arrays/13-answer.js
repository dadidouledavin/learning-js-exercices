// Pour vérifier vos résultats lancez la commande "npm run test:base:3" dans le terminal

function test() {
	// Fusionnez ces deux tableaux
	// votre programme devrait afficher [ "one", "two", "three", "four", "five" ] dans la console
	const tableau1 = ['one', 'two', 'three'];
	const tableau2 = ['four', 'five'];

	// votre code ici
	return tableau1.concat(tableau2);
}

module.exports = test;