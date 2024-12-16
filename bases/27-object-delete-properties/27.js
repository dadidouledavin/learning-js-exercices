// Pour vérifier vos résultats lancez la commande "npm run test:base:27" dans le terminal

function test() {
	// Supprimez la propriété valeur de l'objet
	// Dans la console on devrait avoir afficher la chose suivante :
	/*
		{
			name: 'Campus26',
			adress: 'Cité du numérique',
			ouverture: '8h30 - 16h30',
			dateDeFin: 'Aout 2024',
		}
	*/
	const obj = {
		valeur: 'hello world',
		name: 'Campus26',
		adress: 'Cité du numérique',
		ouverture: '8h30 - 16h30',
		dateDeFin: 'Aout 2024',
	};

	// votre code ici
	delete obj.valeur;
	return obj;
}

module.exports = test;
