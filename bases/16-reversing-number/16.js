// Pour vérifier vos résultats lancez la commande "npm run test:base:16" dans le terminal

function test() {
	// Créez une fonction qui renverse un nombre
	// (oui vous pouvez créer une fonction à l'intérieur d'une fonction !)
	// votre programme devrait retourner "483208323"
	const nombre = 323802384;
	function inverse(number) {

		return number.toString().split('').reverse().join('');
		
	}

	// votre code ici
	return inverse(nombre);

}

module.exports = test;
