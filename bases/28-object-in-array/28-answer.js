// Pour vérifier vos résultats lancez la commande "npm run test:base:3" dans le terminal

function test() {
	// Récupérez le nom de chaque auteur dans ce tableau d'objet
	// Le résultat devra être retourné sous forme de tableau ( ex, ce qui est attendu : ["Bill Gates", "Steeve Jobs", "Suzanne Collins"] )
	// Le faire sous forme de fonction pour que ce soit réutilisable

	const library = [
		{
			author: 'Bill Gates',
			title: 'The Road Ahead',
			readingStatus: true,
		},
		{
			author: 'Steve Jobs',
			title: 'Walter Isaacson',
			readingStatus: true,
		},
		{
			author: 'Suzanne Collins',
			title: 'Mockingjay: The Final Book of The Hunger Games',
			readingStatus: false,
		},
	];

	// votre code ici

	function getAuthors(books) {
		return books.map((book) => book.author);
	}

	return getAuthors(library);
}

module.exports = test;
