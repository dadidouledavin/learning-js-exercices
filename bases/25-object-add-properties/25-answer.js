// Pour vérifier vos résultats lancez la commande "npm run test:base:3" dans le terminal

function test() {
	// Ajoutez une propriété à un objet après sa création
	// L'objet que vous allez retourner devrait renvoyer : {valeur: "hello world", name: "le javascript"}
	// Trouvez deux manière différente de le faire

	const obj = {
		valeur: 'hello world',
	};

	// votre code ici
	obj.name = 'le javascript';
	obj['name'] = 'le javascript';
	return obj;
}

module.exports = test;
