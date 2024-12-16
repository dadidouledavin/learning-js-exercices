// Pour vérifier vos résultats lancez la commande "npm run test:base:11" dans le terminal

function test() {
	// Filtrez les mots commençant par "f"
	// votre programme devrait retourner [ "verre", "ballon" ]
	// Triez les ensuite par ordre alphabétique
	const tableau = ['fiche', 'faire', 'verre', 'ballon', 'faisan', 'forêt'];

	// votre code ici
	return tableau.filter((n) => !n.startsWith('f')).sort();
	
}

module.exports = test;
