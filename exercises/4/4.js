// Vous avez à disposition une liste des habitants de la comté
// Seulement il manque notre ami Bilbon Sacquet
// Seulement Bilbon Sacquet n'est présent uniquement si Frodon Sacquet est présent
// Ajoutez Biblon au tableau des habitants de la compté en prenant soin de vérifier si Frodon est bien présent
// Utilisez la fonction .indexOf
// Pour vérifier vos résultats lancez la commande "npm run test:4" dans votre terminal

function test() {
  const compte = [
      'Frodon Sacquet',
      'Samsagace Gamegie',
      'Meriadoc Brandebouc',
      'Peregrin Touque',
    ],
    bilbon = 'Bilbon Sacquet';

    if (!compte.indexOf('Fredon Sacquet')) {
      compte.push(bilbon);
    }
    return compte;

  // Le résultat doit être de la manière suivante : ['Frodon Sacquet','Samsagace Gamegie','Meriadoc Brandebouc','Peregrin Touque', 'Bilbon Sacquet']
  // Envoyez votre résultat en faisant "return <variableContenantLeRésultat>"
}

module.exports = test;
