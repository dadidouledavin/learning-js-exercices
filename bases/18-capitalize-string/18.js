// Pour vérifier vos résultats lancez la commande "npm run test:base:18" dans le terminal

function test() {
	// Créez une fonction permettant de mettre la première lettre de chaque mot en majuscule
	// votre programme devrait retourner "The Quick Brown Fox"
	const phrase = 'the quick brown fox';

	// votre code ici
	return phrase.charAt(0).toUpperCase() + phrase.slice(1);
}

module.exports = test;
