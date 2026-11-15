# Portfolio de Jani Subhana-Borthaire

Portfolio personnel réalisé avec Vue 3. Il présente mon parcours, mes projets, ma veille technologique et mes moyens de contact. Le site utilise Vue Router pour afficher les différentes pages sans recharger entièrement le document à chaque navigation.

## Technologies utilisées

- Vue 3 pour construire les pages et composants.
- Vue Router pour gérer les routes et les pages de l’application.
- Vite pour lancer le serveur de développement et créer la version de production.
- HTML et CSS pour la structure et la mise en forme.

## Lancer le projet

Prérequis : Node.js 22.18 ou supérieur, ou Node.js 24.12 ou supérieur.

```sh
npm install
npm run dev
```

Pour créer et prévisualiser la version de production :

```sh
npm run build
npm run preview
```

## Pages et navigation

| Adresse | Page |
| --- | --- |
| `/` | Accueil |
| `/about` | À propos |
| `/Projets` | Liste des projets |
| `/Projets/:slug` | Détail du projet correspondant au slug |
| `/Contact` | Coordonnées et liens de contact |
| `/Veille` | Articles de veille |
| Toute autre adresse | Page introuvable |

Les changements de page commencent en haut de la nouvelle page. Les pages sont chargées à la demande depuis le routeur.

## Organisation des fichiers

```text
src/
├── assets/       Feuilles de style CSS
├── components/   Éléments communs, comme l’en-tête et le pied de page
├── data/         Données des projets
├── router/       Configuration des routes
├── views/        Pages du portfolio
├── App.vue       Mise en page commune de l’application
└── main.js       Point de démarrage de Vue

public/
├── images/       Illustrations, aperçus et logos
├── pdf/          CV
└── projets/      Archives et documents téléchargeables liés aux projets
```

Chaque page possède sa feuille CSS dans `src/assets/`. Les règles partagées par tout le site se trouvent dans `src/assets/main.css`.

## Ajouter ou modifier un projet

Les projets sont décrits dans `src/data/projects.js`. Chaque projet possède un `slug`, un titre, une description, des technologies et un aperçu. La route `/Projets/:slug` transmet le slug à la page de détail, qui retrouve les données du projet correspondant.

Les documents téléchargeables d’un projet sont déclarés dans la propriété `documents`. Leurs fichiers doivent être placés dans `public/` et leur adresse doit correspondre au chemin indiqué dans les données du projet. L’archive complète est indiquée avec `telechargement`.

## Contenus à compléter


## Dépendances

Les dépendances du projet sont listées dans `package.json` et verrouillées par `package-lock.json`. Le dossier `node_modules/` est généré par `npm install` et n’a pas besoin d’être inclus dans une archive du code source.
