// Pour vérifier vos résultats lancez la commande "npm run test:base:9" dans le terminal

function test() {
	// Déterminez l'index de l'élément "Harry" dans le tableau et stockez-le dans une variable.
	// À partir de cet index, retournez "Harry" depuis le tableau.
	const tableau = ['Hermione', 'Harry', 'Ron', 'Severus'];

	// votre code ici
	const index = tableau.indexOf('Harry');
	return tableau[index];
}

module.exports = test;
