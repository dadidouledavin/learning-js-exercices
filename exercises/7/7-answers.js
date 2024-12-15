// Je vous présente ici une liste de film
// chaque film dispose de trois élement: Un tableau de tags, un nom, et une notes
// Nous voulons rajouter un film à ce tableau
// Vérifiez si cet élément n'est pas déjà présent dans le tableau
// Trouvez une méthode permettant de chercher simplement dans un tableau tout en renvoyant vrai ou faux
// Pour vérifier vos résultats lancez la commande "npm run test:7" dans votre terminal

function test() {
  const films = [
    {
      nom: 'Star wars - 1 ère trilogie',
      note: 9,
      tags: ['sf', 'espace', 'pewpew'],
    },
    {
      nom: 'Seigneur des anneaux',
      note: 8,
      tags: ['fantaisie', 'forêt', 'piedspoilus'],
    },
    {
      nom: 'Matrix',
      note: 6,
      tags: ['sf', 'pillule', 'smith'],
    },
    {
      nom: '300',
      note: 7,
      tags: ['historique', 'baston', 'hommetoutnus'],
    },
    {
      nom: 'Les razmokets',
      note: 10,
      tags: ['dessin annimés', 'Dynosaure', 'enfant'],
    },
  ];

  const nouveauFilm = {
    nom: 'Seigneur des anneaux',
    note: 8,
    tags: ['fantaisie', 'forêt', 'piedspoilus'],
  };

  return films.some(function (item) {
    return item.nom === nouveauFilm.nom;
  });

  // Le résultat doit être de la manière suivante : true
  // Envoyez votre résultat en faisant "return <variableContenantLeRésultat>"
}

module.exports = test;
