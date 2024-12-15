// Pour vérifier vos résultats lancez la commande "npm run test:base:3" dans le terminal

function test() {
	// Filtrez les mots commençant par "f"
	// votre programme devrait afficher [ "verre", "ballon" ] dans la console
	// Triez les ensuite par ordre alphabétique
	const tableau = ['fiche', 'faire', 'verre', 'ballon', 'faisan', 'forêt'];

	// votre code ici
	return tableau.filter((n) => !n.startsWith('f')).sort();
}

module.exports = test;
