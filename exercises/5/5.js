// Vous avez à disposition une liste de youtubeur
// chaque élement de la liste est un objet avec le nom du youtubeur ainsi que son nombre d'abonné
// Triez ces youtubeurs afin qu'ils soient du plus grand nombre de vues au plus petit
// Dans le tableau de retour ne mettez que les noms des chaines
// Pour vérifier vos résultats lancez la commande "npm run test:5" dans votre terminal

function test() {
  const youtubeGame = [
    {
      nom: 'Le fossoyeur de films',
      abonnes: 673572,
    },
    {
      nom: 'BenzaieTv',
      abonnes: 600725,
    },
    {
      nom: 'Dep MMI Le Puy',
      abonnes: 103,
    },
    {
      nom: 'e-penser',
      abonnes: 958072,
    },
  ];

  // Le résultat doit être de la manière suivante : ['e-penser','Le fossoyeur de films','BenzaieTv','Dep MMI Le Puy']
  // Envoyez votre résultat en faisant "return <variableContenantLeRésultat>"
}

module.exports = test;
