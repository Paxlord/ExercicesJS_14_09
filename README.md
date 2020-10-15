# Evaluation javascript 14 septembre 2020

Ci-présent une explications du fonctionnements et les limites si il y en a.

## Exercice 1 : Grille qui change de couleur

### Fonctionnement : 

Ce programme fonctionne en exécutant la fonction ```javascript gridGenerator(x,y); ``` au sein d'une fonction ```javascript setInterval()``` qui permet d'exécuter la fonction à une intervalle régulière

Le fonctionnement de ``` gridGenerator() ``` est très simple : elle prend en paramètres la taille de la grille voulue et génère à l'aide d'une double boucle une table html. Lorsqu'on génère l'élément td on lui assigne une couleur aléatoire. 



## Exercice 2 : Barre de chargement

### Fonctionnement : 

Ce programme fonctionne en créant un objet de type draw_bar et en l'initialisant avec un élément parent en paramètre : ```javascript drawBar.Initialize(document.body)```

## Exercice 3 : Morpion

### Fonctionnement : 

Pour son fonctionnement tout se passe dans la classe MorpionXO, la classe morpion possède tous les attributs qui permettent de jouer au jeu.

#### Méthode Initialize

Dans cette méthode nous mettons l'état de notre morpion à zéro : Le tableau de Cell est remplie de nouvelle Cell vide, et les tableaux qui permettront de déterminé le gagnant sont remis à zéro et remplie en fonction de la taille donnée. On appelle ensuite la Méthode Draw

#### Méthode Draw

Cette méthode s'occupe uniquement de la partie DOM du Morpion, Donc nous générons une table HTML de taille définie et nous la remplissons de cellule. On ajoute également un EventListener sur le click de la souris et on attache également à chaque cellule son index dans un paramètre index. Lorsqu'on clic sur une cellule la fonction HandleClick se lance et elle appelle la méthode Update.

#### Méthode Update

Cette méthode s'occupe uniquement de la partie logique du jeu. Dans cette méthode on récupère l'index de la cellule cliqué et on accède à la case de notre plateau de jeu. Si elle est vide on la remplie du signe de notre joueur actuel et on appelle deux méthode pour savoir si le joueur à gagné.

#### Méthode CountPlaced

Cette méthode s'occupe de faire correspondre la case cliqué à sa ligne/colonne/diagonale correspondante et de l'incrémenter. C'est utile pour déterminer le gagnant avec une complexité O(1).

#### Méthode CheckForWinner

Cette méthode s'occupe de compter lorsqu'un coup est effectuer si la ligne/colonne/diagonale correspondante est à 3. Si jamais elle l'est c'est qu'on à un gagnant. 

#### Méthode WinRoutine

Enfin, cette méthode ajoute un point au joueur correspondant lorsqu'il gagne la manche. Si c'est la partie qui est gagné, cette fonction passe le flag gameOver à true et la méthode Draw s'occupe d'afficher le message de victoire.


## Exercice 4 : WorldMap SVG
### Fonctionnement : 

Pour récupérer le svg avec son bon format, on envoie une XMLHttpRequest synchrone à l'url fourni. Ensuite, on peut simplement récupérer l'élément svg dans la responseXML comme si c'était un document html classique.

Ensuite on récupère tout les path de notre svg et on leur ajoute 3 évènements, mouseenter, mouseexit, click.

## Exercice 5 : Validation du formulaire

### Fonctionnement : 

On attache à notre élément form un eventListener sur submit. Lorsqu'un submit est effectué on compare la valeur de chaque items avec son regex correspondant : 
1. regexNomPrenom doit être une série de lettre majuscule ou minuscule.
2. regexAddresse doit être une série qui commence par un nombre et qui est suivie d'au moins deux mots
3. regexEmail doit être une chaine qui correspond à "aaaaaa@aaa.aaa"

## Exercice 6 : Validation du formulaire

### Fonctionnement : 

Simple fonction qui s'occupe de valider si un numéro de télephone est valide ou non. Le regex regarde si : le numéro commence bien par 0 suivi de 1,7,6 puis qu'il est bien suivi par une suite 4 nombres composés de 2 chiffres chacun.

## Exercice 7 : Calcul de moyenne

### Fonctionnement : 

Simple fonction qui calcule une moyenne à partir d'un tableau de nombres donné en paramètre.

## Exercice 8 : Bataille navale

### Fonctionnement : 

La bataille navale est constitué de plusieurs fontions pour jouer au jeu. La classe Bateau est une classe qui permet d'assigner une taille de bateau à un nom de bateau. à noter que le jeu ne supporte pas plusieurs bateau de la même taille sur un même plateau. 

#### Fonction GetNameFromTailleList

Cette fonction retourne le nom d'un bateau dans une liste en fonction de la taille donnée en paramètre. 

#### Fonction CheckIfAllBoatSank, CheckIfOneBoatSank

Ces deux fonctions parcourent le plateau de jeu et retourne si un bateau en particulier à coulé ou si tous les bateaus ont coulés.

#### Fonction DrawBoard

Cette fonction s'occupe de générer la table html et de l'ajouter à la DOM. Ainsi que d'ajouter à chaque cellule un Eventlistener sur le clic de la souris.


#### Fonction HandleClick

Cette fonction s'occupe de gérer l'état du jeu. Pour chaque clic sur une cellule on teste les conditions vue plus haut et affiche un message.

## Exercice 9 : Palindrome

### Fonctionnement : 

Comme l'exercice imposait uniquement des boucles et aucune fonctions en intégré en javascript, ce programme est plutot limité. Il faut rentrer une phrase sans catactères spéciaux et sans majuscule. L'utilisation de string.charAt() et des regex permettrait de rendre la fonction plus flexible.


