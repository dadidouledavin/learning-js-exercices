// Pour vérifier vos résultats lancez la commande "npm run test:base:3" dans le terminal

function test() {
	// Créez une fonction qui renverse un nombre
	// (oui vous pouvez créer une fonction à l'intérieur d'une fonction !)
	// votre programme devrait afficher "483208323" dans la console
	const nombre = 323802384;

	// votre code ici
	function reverseNumber(number) {
		return number.toString().split('').reverse().join('');
	}
	return reverseNumber(nombre);
}

module.exports = test;
