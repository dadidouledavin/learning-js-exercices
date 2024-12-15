// Je vous présente ici une liste de film
// chaque film dispose de trois élement: Un tableau de tags, un nom, et une notes
// Les notes sont écrites en String
// Trouvez un moyen de transformer ces notes en Number
// Une fois l'élément converti en nombre, rammenez la node sur 20 (actuellement sur 10)
// Une fois cela réalisé, triez les films par notes du plus petit au plus grand
// Pour vérifier vos résultats lancez la commande "npm run test:8" dans votre terminal

function test() {
  const films = [
    {
      nom: 'Star wars - 1 ère trilogie',
      note: '9',
      tags: ['sf', 'espace', 'pewpew'],
    },
    {
      nom: 'Seigneur des anneaux',
      note: '8',
      tags: ['fantaisie', 'forêt', 'piedspoilus'],
    },
    {
      nom: 'Matrix',
      note: '6',
      tags: ['sf', 'pillule', 'smith'],
    },
    {
      nom: '300',
      note: '7',
      tags: ['historique', 'baston', 'hommetoutnus'],
    },
    {
      nom: 'Les razmokets',
      note: '10',
      tags: ['dessin annimés', 'Dynosaure', 'enfant'],
    },
  ];

  /* Le résultat doit être de la manière suivante : [
        {
            nom: 'Les razmokets',
                note: 20,
            tags: ['dessin annimés', 'Dynosaure', 'enfant']
        },
        {
            nom: 'Star wars - 1 ère trilogie',
                note: 18,
            tags: ['sf', 'espace', 'pewpew']
        },
        {
            nom: 'Seigneur des anneaux',
                note: 16,
            tags: ['fantaisie', 'forêt', 'piedspoilus']
        },
        {
            nom: '300',
                note: 14,
            tags: ['historique', 'baston', 'hommetoutnus']
        },
        {
            nom: 'Matrix',
                note: 12,
            tags: ['sf', 'pillule', 'smith']
        }
    ]*/
  // Envoyez votre résultat en faisant "return <variableContenantLeRésultat>"
}

module.exports = test;
