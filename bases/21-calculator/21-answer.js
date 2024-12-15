// Pour vérifier vos résultats lancez la commande "npm run test:base:3" dans le terminal

function test() {
	// Créer les fonctions d'une calculatrice, permettant de faire les choses suivantes :
	// - additionner
	// - soustraire
	// - multiplier
	// - diviser
	// chaque fonciton devrait fonctionner indépendament des autres
	// Toutes ces fonctions seront utilisées au sein d'une dernière permettant de lancer les calculs
	// exemple : calc(2,3,"+") devrait avoir comme résultat 5
	// exemple : calc(2,3,"-") devrait avoir comme résultat -1
	// exemple : calc(2,3,"*") devrait avoir comme réultat 6
	// exemple : calc(2,3,"/") devrait avoir comme réultat 0.6666666666666666
	// indice : un "switch" pourrait s'avérer utile ici
	// indice il faudra retouner la fonction calc comme ceci : return calc; Sans quoi, les tests ne pourront pas passer. (Je viens tester les différentes fonctionnalités voir si votre code répond bien à celles ci)
	// C'est ce qui s'appelle faire passer une référence, de cette manière, je peux utiliser votre fonction dans mon code !
	// votre code ici

	function add(a, b) {
		return a + b;
	}

	function substract(a, b) {
		return a - b;
	}

	function multiply(a, b) {
		return a * b;
	}

	function divide(a, b) {
		return a / b;
	}

	function calc(a, b, op) {
		switch (op) {
			case '+':
				return add(a, b);
			case '-':
				return substract(a, b);
			case '*':
				return multiply(a, b);
			case '/':
				return divide(a, b);
			default:
				return 'No available operator';
		}
	}

	return calc;
}

module.exports = test;
