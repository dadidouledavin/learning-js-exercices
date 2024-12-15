// Pour vérifier vos résultats lancez la commande "npm run test:base:3" dans le terminal

function test() {
	// Trier les éléments en fonction de leur longeur : du plus long au plus court
	// votre programme devrait afficher ["pause déjeuné", "javascript" "formation" ] dans la console
	const tableau = ['formation', 'javascript', 'pause déjeuné'];

	// votre code ici
	return tableau.sort((a, b) => b.length - a.length);
}

module.exports = test;
