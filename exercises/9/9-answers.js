// Vous avez à votre disposition un ensemble de nom et prénoms
// Créez une nouvelle propriété "fullname" pour chaque élément du tableau
// Full name contiendra la concaténation du nom ainsi que du prénom
// Pour vérifier vos résultats lancez la commande "npm run test:9" dans votre terminal

function test() {
  const persons = [
    {
      firstname: 'Jon',
      lastname: 'Snow',
    },
    {
      firstname: 'Daenerys',
      lastname: 'Targaryen',
    },
    {
      firstname: 'Tyrion',
      lastname: 'Lannister',
    },
  ];

  return persons.map(function (item) {
    item.fullname = item.firstname + ' ' + item.lastname;
    return item;
  });

  /* Le résultat doit être de la manière suivante : [
        {
            firstname: 'Jon',
            lastname: 'Snow',
            fullname: 'Jon Snow'
        },
        {
            firstname: 'Daenerys',
            lastname: 'Targaryen',
            fullname: 'Daenerys Targaryen'
        },
        {
            firstname: 'Tyrion',
            lastname: 'Lannister',
            fullname: 'Tyrion Lannister'
        }
    ]*/
  // Envoyez votre résultat en faisant "return <variableContenantLeRésultat>"
}

module.exports = test;
