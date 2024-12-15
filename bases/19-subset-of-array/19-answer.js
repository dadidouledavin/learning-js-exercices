// Pour vérifier vos résultats lancez la commande "npm run test:base:3" dans le terminal

function test() {
	// Créez une fonction qui renvoie, les n premiers elements d'un tableau (défini dans la variable elementNumber)
	// votre programme devrait afficher [ "Harry potter","Ron Weasley","Hermione Granger","Tom jedusor","Albus dumbledore","Severus Rogue"] dans la console
	const tableau = [
		'Harry potter',
		'Ron Weasley',
		'Hermione Granger',
		'Tom jedusor',
		'Albus dumbledore',
		'Severus Rogue',
		'Rubeus Hagrid',
		'Minerva McGonagall',
	];
	const elementNumber = 6;

	// votre code ici

	function getNFirstElements(array, numberOfElements) {
		return array.slice(0, numberOfElements);
	}
	return getNFirstElements(tableau, elementNumber);
}

module.exports = test;
