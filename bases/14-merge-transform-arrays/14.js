// Pour vérifier vos résultats lancez la commande "npm run test:base:14" dans le terminal

function test() {
	// Fusionnez et transformez ces tableaux en chaine de charactère
	// votre programme devrait retourner "Tout à l’heure, on a vu que le chapelet de saucisses n’était pas un objet redondant. Et pourtant, on a pu lui trouver une utilisation périmétrique en s’en servant comme un fouet."
	const tableau1 = [
		'Tout à l’heure',
		', on a vu que le chapelet de saucisses',
		'n’était pas un objet redondant.',
	];
	const tableau2 = [
		'Et pourtant,',
		'on a pu lui trouver une utilisation périmétrique en s’en servant comme un fouet.',
	];

	// votre code ici
	return tableau1.concat(tableau2).join(' ');
}

module.exports = test;
