// Je vous présente ici une liste de film
// chaque film dispose de trois élement: Un tableau de tags, un nom, et une notes
// Dans ces films triez ceux qui ont moins de 3 et qui ne font pas parti de la catégorie 'sf'
// Vous trierez ensuite ce tableau par note du plus petit au plus grand
// Pour finir ne mettez que le nom des films dans le retour
// Pour vérifier vos résultats lancez la commande "npm run test:6" dans votre terminal

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
    {
      nom: 'Snow Shark: Ancient Snow Beast',
      note: 1,
      tags: ['sf', 'requins', 'neige'],
    },
  ];

  return films
    .filter(function (item) {
      return item.note > 3 && item.tags.indexOf('sf') !== -1;
    })
    .sort(function (a, b) {
      return a.note - b.note;
    })
    .map(function (item) {
      return item.nom;
    });

  // Le résultat doit être de la manière suivante : ['Matrix','Star wars - 1 ère trilogie']
  // Envoyez votre résultat en faisant "return <variableContenantLeRésultat>"
}

module.exports = test;
