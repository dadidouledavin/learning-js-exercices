// Pour vérifier vos résultats lancez la commande "npm run test:base:3" dans le terminal

function test() {
	// Récupérer la dernière valeur du tableau
	// votre programme devrait afficher "last one" dans la console
	const tableau = ['Hello world', 'this is javascript', 'third element', 'last one'];

	// votre code ici

	return tableau[tableau.length - 1];
}

module.exports = test;
