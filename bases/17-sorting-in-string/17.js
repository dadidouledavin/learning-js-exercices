// Pour vérifier vos résultats lancez la commande "npm run test:base:17" dans le terminal

function test() {
	// Créez une fonction qui permet de ranger les lettres du mot dans l'odre alphabetique
	// votre programme devrait retourner "aeghiilmort"
	const mot = 'algorithmie';
	function motalpha(mot) {

		return mot.split('').sort().join('');
		
	}
	// votre code ici
	return motalpha(mot);
}

module.exports = test;
