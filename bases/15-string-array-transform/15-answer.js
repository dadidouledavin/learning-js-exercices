// Pour vérifier vos résultats lancez la commande "npm run test:base:3" dans le terminal

function test() {
	// Découpez cette chaine de charactère sur les "," afin de créer un tableau
	// votre programme devrait afficher ["SKU213084", "SKU39230", "SKU343944", "SKU29320394"] dans la console
	const phrase = 'SKU213084,SKU39230,SKU343944,SKU29320394';

	// votre code ici
	return phrase.split(',');
}

module.exports = test;
