// Pour vérifier vos résultats lancez la commande "npm run test:base:24" dans le terminal

function test() {
	// Modifiez la valeur de l'objet
	// votre programme devrait retourner un objet ayant une propriété "valeur" ayant la valeur "hello world"
	// ex : { valeur: "hello world" } (mais sans redéfinir l'objet initial, seulement en modifiant la propriété "valeur" !)
	// Trouvez deux manière différente de le faire

	const obj = {
		valeur: null,
	};

	// votre code ici
	obj.valeur = "hello world";
	obj['valeur'] = "hello world"
	return obj;
}

module.exports = test;
