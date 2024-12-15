// Pour vérifier vos résultats lancez la commande "npm run test:base:3" dans le terminal

function test() {
	// Déterminez l'index de l'élément "Harry" dans le tableau et stockez-le dans une variable.
	// À partir de cet indice, affichez "Harry" dans la console.
	const tableau = ['Hermione', 'Harry', 'Ron', 'Severus'];

	// votre code ici
	const index = tableau.indexOf('Harry');
	return tableau[index];
}

module.exports = test;
