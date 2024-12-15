# Learning JS Exercices

Bienvenue dans ce dépôt qui regroupe une série d’exercices destinés à vous accompagner dans votre apprentissage de JavaScript. Ce repository est structuré pour vous permettre d’acquérir des bases solides, puis de consolider vos connaissances par la pratique.

## Structure du repository

Le dépôt est organisé en deux dossiers :

1. **base** :  
   Ce dossier contient des exercices simples axés sur les notions fondamentales de JavaScript.  
   Vous y trouverez notamment des exercices pour vous familiariser avec :

    - Les variables et les types de données (string, number, boolean, array, object, etc.)
    - Les opérateurs arithmétiques, logiques et de comparaison
    - Les structures de contrôle (if, else, switch, boucles for et while)
    - Les fonctions de base

    **Commencez par ce dossier** afin d’acquérir les bases nécessaires avant de passer aux exercices plus avancés.

2. **exercises** :  
   Une fois les exercices du dossier `base` complétés avec succès, vous pouvez passer aux exercices du dossier `exercises`.  
   Ces exercices couvrent des notions plus avancées ou combinent les différentes compétences acquises dans le dossier `base`. Ils vous aideront à renforcer votre compréhension et votre maîtrise du langage.

## Comment travailler sur les exercices

1. **Cloner le dépôt**

    ```bash
    git clone https://github.com/KristenGarnier/learning-js-exercices.git
    cd learning-js-exercices
    ```

2. **Installer les dépendances** (si nécessaire)  
   Si un `package.json` est présent, exécutez :

    ```bash
    npm install
    ```

    Assurez-vous d’avoir Node.js et npm installés sur votre machine.

3. **Réaliser les exercices**

    - Rendez-vous dans les fichiers du dossier `base` pour commencer. Lisez attentivement les instructions fournies dans chaque fichier, puis complétez le code demandé.
    - Une fois que vous avez terminé le dossier `base`, vous pouvez aborder le dossier `exercises`.

4. **Désactiver les assistants IA dans VS Code**  
   Pour tirer le meilleur parti de ces exercices, **désactivez tout assistant IA** (type GitHub Copilot ou autres extensions d’auto-complétion “intelligentes”). L’objectif est de comprendre ce que vous faites, pas simplement d’arriver à une solution. Le véritable apprentissage se fait en résolvant les problèmes par vous-même.

## Vérifier votre code avec les tests

Des tests unitaires sont fournis pour chaque exercice afin de valider votre solution. Pour exécuter les tests, utilisez :

-   **Tous les tests** :

    ```bash
    npm test
    ```

-   **Test d’un seul exercice du dossier `base`** :  
    Utilisez la commande :

    ```bash
    npm run test:base:{numéro-de-l-exercice}
    ```

    Par exemple, pour le premier exercice du dossier `base`, vous pourriez avoir :

    ```bash
    npm run test:base:1
    ```

-   **Test d’un seul exercice du dossier `exercises`** :  
    Utilisez la commande :
    ```bash
    npm run test:{numéro-de-l-exercice}
    ```
    Par exemple, pour le premier exercice du dossier `exercises` :
    ```bash
    npm run test:1
    ```

Les tests vous indiqueront si votre solution est correcte ou non. Une fois que les tests passent au vert, cela signifie que votre code répond correctement à l’exercice.

## Utilisation de `console.log`

Pour vous aider à déboguer votre code et comprendre ce qu’il se passe, n’hésitez pas à utiliser `console.log` dans votre code JavaScript. Par exemple :

```js
console.log(maVariable);
```

Lors de l’exécution des tests, toutes les sorties `console.log` seront affichées dans le terminal. Vous pourrez ainsi visualiser la valeur de vos variables, le résultat de certaines opérations, ou toute autre information utile pour corriger et améliorer votre code.

## Correction et assistance

Pour chaque exercice, un fichier `answers.js` est disponible, contenant une proposition de correction. **N’y allez que si vous êtes réellement bloqués !** Essayer de trouver par vous-même vous aidera à renforcer votre compréhension.

## Conseils et bonnes pratiques

-   Progressez à votre rythme. Assurez-vous de bien comprendre les notions abordées dans `base` avant de passer aux `exercises`.
-   Faites un usage judicieux du `console.log` pour suivre l’évolution de vos variables et comprendre les erreurs éventuelles.
-   N’hésitez pas à consulter la documentation officielle de JavaScript (MDN Web Docs) et d’autres ressources d’apprentissage en ligne.
-   Développez votre logique et votre compréhension, plutôt que de chercher la vitesse de résolution.

Bonne pratique et bon apprentissage du JavaScript !
