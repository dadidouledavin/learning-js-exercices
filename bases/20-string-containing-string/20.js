// Pour vérifier vos résultats lancez la commande "npm run test:base:20" dans le terminal

function test() {
	// Créer une fonction permettant de savoir si une chaine de caractère est dans une autre ou non
	// La fonction devrait renvoyer un Booléen (Vrai / Faux)
	// Le retour devrait être "true"
	// Indice : Une fonction .include pourrait être utile
	const base1 =
		'De toutes façons, les réunions de la Table Ronde c’est deux fois par mois. Donc, si le mec il dit après-demain à partir de dans deux jours, suivant s’il le dit à la fin du mois, ça reporte.';
	const ARechercher1 = 'Table Ronde';

	function recherche(base, search) {
		return base.includes(search);
	}
	// votre code ici
	return recherche(base1, ARechercher1);
}

module.exports = test;
