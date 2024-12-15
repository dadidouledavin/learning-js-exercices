// Pour vérifier vos résultats lancez la commande "npm run test:base:3" dans le terminal

function test() {
	// Créez une fonction qui permet de ranger les lettres du mot dans l'odre alphabetique
	// votre programme devrait afficher "aeghiilmort" dans la console
	const mot = 'algorithmie';

	// votre code ici
	function sortInString(mot) {
		return mot.split('').sort().join('');
	}
	return sortInString(mot);
}

module.exports = test;
