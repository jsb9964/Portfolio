// Chaque objet fournit le contenu que ProjectDetailsView affiche pour son slug.
const projects = [
  {
    slug: 'blogger-responsive',
    categorie: 'Stage · Développement web',
    titre: 'Adapter un site à tous les écrans.',
    description: "Modernisation responsive d’un thème Blogger pour LCBO Athlétisme.",
    technologies: ['Blogger', 'Responsive'],
    image: '/images/apercu-lcboathle.png',
    alt: 'Aperçu du site LCBO Athlétisme',
    sections: [
      {
        titre: 'Le contexte',
        texte: "Dans le cadre d'un stage au sein de l'entreprise CYBERANDCO, j'ai réalisé un travail sur la modernisation d'un thème Blogger afin de le rendre responsive à la demande du cient."
      },
      {
        titre: 'Ce que j’ai réalisé',
        texte: "Le stage s'est déroulé sur 5 semaines, sur le site de LCBO Athlètisme. Ce qui m'as permis de réaliser un audit du site entier, puis de travailler sur les vues tablettes et téléphones, et enfin de faire de la recherche sur le référencement du site."
      }
    ],
    // Chaque objet représente un PDF et génère un lien dans la vue détail.
    documents: [
      {
        titre: 'Compte rendu final du site',
        description: 'Compte rendu des missions effectuées sur les 5 semaines.',
        nomFichier: 'recapitulatif-stage-juillet2026.pdf',
        url: '/projets/blogger-responsive/recapitulatif-stage-juillet2026.pdf'
      },
      {
        titre: 'Préparer l’environnement Blogger',
        description: 'Procédure de préparation de l’environnement de développement.',
        nomFichier: 'procedure-environnement-blogger.pdf',
        url: '/projets/blogger-responsive/Procedures/procedure-environnement-dev-blogger.pdf'
      },
      {
        titre: 'Tester l’affichage responsive',
        description: 'Procédure pour vérifier l’affichage sur différents écrans.',
        nomFichier: 'procedure-test-responsive.pdf',
        url: '/projets/blogger-responsive/Procedures/procedure-test-responsive.pdf'
      },
      {
        titre: 'Rapport — adaptations mobile',
        description: 'Modifications réalisées pour les écrans mobiles.',
        nomFichier: 'rapport-changements-responsive-mobile.pdf',
        url: '/projets/blogger-responsive/Bilans/rapport-changements-responsive-mobile.pdf'
      },
      {
        titre: 'Rapport — adaptations tablette',
        description: 'Modifications réalisées pour les écrans tablette.',
        nomFichier: 'rapport-changements-responsive-tablette.pdf',
        url: '/projets/blogger-responsive/Bilans/rapport-changements-responsive-tablette.pdf'
      },
      {
        titre: 'Rapport SEO',
        description: 'Constats et pistes d’amélioration du référencement.',
        nomFichier: 'rapport-seo-blogger.pdf',
        url: '/projets/blogger-responsive/Bilans/rapport-seo-blogger.pdf'
      }
    ],
    telechargement: '/projets/blogger-responsive.zip'
  },
  {
    slug: 'portfolio',
    categorie: "Projet personnel · Développement web",
    titre: 'Portfolio.',
    description: "Création de mon portfolio personnel.",
    technologies: ['Vue.js','Front-end','JavaScript'],
    image: '/images/apercu-portfolio.png',
    alt: 'Aperçu du portfolio',
    sections: [
      {
        titre: 'Le contexte',
        texte: "Dans le cadre de mon apprentissage en BTS SIO option SLAM, j'ai réalisé mon portfolio afin de développer ma présence en ligne."
      },
      {
        titre: 'Ce que j’ai réalisé',
        texte: "À venir..."
      }
    ],
    telechargement: '',
    lienGithub: 'https://github.com/jsb9964?tab=repositories'
  },
  {
    slug: 'pokeprojet',
    categorie: "Projet d'école · Développement web",
    titre: 'Pokeprojet: Un mini jeu pokémon.',
    description: "Création d'un jeu de combat pokémon.",
    technologies: ['PHP', 'Back-end','Front-end'],
    image: '/images/apercu-pokeprojet.png',
    alt: 'Aperçu du pokeprojet',
    sections: [
      {
        titre: 'Le contexte',
        texte: "Dans le cadre de mon apprentissage en BTS SIO option SLAM, on s'est lancés sur un projet de création de mini jeu de combat pokémon."
      },
      {
        titre: 'Ce que j’ai réalisé',
        texte: "À venir..."
      }
    ],
    telechargement: ''
  }
]

export default projects