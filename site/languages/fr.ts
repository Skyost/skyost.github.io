export default {
  site: 'Le site web personnel de Hugo Delaunay, aussi connu sous le nom de Skyost, encore un autre développeur.',
  me: {
    description1: 'Mon nom IRL est <strong>Hugo Delaunay</strong> (cela fait désormais plus de dix ans que j\'utilise le pseudonyme <q><strong>Skyost</strong></q> sur internet) et je suis développeur amateur.',
    description2: 'Vous trouverez sur ce site web quelques informations sur moi mais aussi sur mes différents travaux.'
  },
  skills: {
    title: 'Mes compétences',
    skill: {
      desktop: 'Cela fait quelques années que je développe des programmes pour <strong>ordinateurs</strong>.',
      mobile: 'Je développe également des applications et des librairies pour <strong>Android</strong> et <strong>iOS</strong>.',
      web: 'Il m\'arrive de travailler sur certains projets <strong>web</strong> !'
    }
  },
  projects: {
    title: 'Mes projets',
    description1: 'Vous trouverez ci-dessous deux projets personnels que je souhaite particulièrement vous faire découvrir.',
    project: {
      werewolf: {
        name: 'Mobile Werewolf',
        description: 'Mobile Werewolf est une version mobile non officielle du célèbre jeu de société <q>Les Loups-garous de Thiercelieux</q>. Le concept est simple : vous et vos amis êtes les habitants d\'un étrange village où certains d\'entre-vous deviennent de méchants loups-garous la nuit tombée.',
        image: 'werewolf/fr'
      },
      authenticator: {
        name: 'Open Authenticator',
        description: 'Open Authenticator est une application d\'authentification à deux facteurs multiplateforme, gratuite et open-source. Elle permet à ses utilisateurs d\'enregistrer leurs TOTPs (Time-Based One-Time Password) et de les synchroniser entre leurs appareils afin de pouvoir server de facteur d\'authentification lors d\'une connexion.',
        image: 'openauthenticator'
      }
    },
    description2: 'Si vous souhaitez voir plus de mes projets, vous pouvez consulter mon profil sur <a href="https://github.com/Skyost">Github</a>. Si vous aimez ce que je fais, ou si vous souhaitez juste me supporter, alors vous pouvez me faire un don via PayPal.',
    description3: 'Toute aide est grandement appréciée !'
  },
  contact: {
    title: 'Me contacter',
    name: {
      label: 'Nom et prénom / Pseudonyme',
      placeholder: 'Entrez votre nom et prénom / pseudonyme',
      help: 'J\'ai besoin de savoir à qui je parle !'
    },
    email: {
      label: 'Adresse e-mail',
      placeholder: 'Entrez votre adresse e-mail',
      help: 'J\'ai également besoin de vous envoyer une réponse 😊'
    },
    subject: {
      label: 'Objet',
      placeholder: 'Entrez l\'objet de votre message',
      help: 'Dîtes-moi à propos de quoi vous souhaitez parler !'
    },
    message: {
      label: 'Message',
      placeholder: 'Entrez votre message',
      help: 'Minimum 100 caractères.'
    },
    submit: 'Envoyer',
    recaptcha: 'Protégé par <a href="https://www.google.com/recaptcha/">reCaptcha</a>.',
    success: 'Message transmis avec succès.',
    error: 'Erreur pendant l\'envoi du message. Veuillez réessayer plus tard.'
  },
  navbar: {
    me: 'Skyost',
    skills: 'Mes compétences',
    projects: 'Mes projets',
    contact: 'Me contacter'
  },
  error: {
    title: 'Erreur',
    pageNotFound: 'Page non trouvée',
    description: 'Vous pouvez continuer votre navigation en allant sur <a href="javascript:history.back()">la page précédente</a> ou en allant sur <a href="/">la page d\'accueil</a>.',
    contactMe: 'Si quelque chose devait se trouver ici, n\'hésitez pas à <a href="/#contact">me contacter</a> pour me le signaler.'
  }
}
