// Pour vérifier vos résultats lancez la commande "npm run test:base:3" dans le terminal

function test() {
	// Créez une fonction permettant de mettre la première lettre de chaque mot en majuscule
	// votre programme devrait afficher "The Quick Brown Fox" dans la console
	const phrase = 'the quick brown fox';

	// votre code ici
	function uppercaseWords(str) {
		return str
			.split(' ')
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ');
	}

	return uppercaseWords(phrase);
}

module.exports = test;
