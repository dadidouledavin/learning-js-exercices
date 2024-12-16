// Pour vérifier vos résultats lancez la commande "npm run test:base:10" dans le terminal

function test() {
	// Filtrez les nombres étant inférieurs à 10
	// votre programme devrait retourner [ 10, 15, 20, 25 ]
	// indice : utiliser .filter
	const tableau = [1, 2, 5, 9, 10, 15, 20, 25];

	// votre code ici

	return tableau.filter((n) => n>=10);

}

module.exports = test;
