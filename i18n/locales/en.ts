export default {
  site: 'The personal website of Hugo Delaunay, also known as Skyost, yet another developer.',
  me: {
    description1: 'My IRL name is <strong>Hugo Delaunay</strong> (it\'s been more than ten years now that I\'m using <q><strong>Skyost</strong></q> on the internet) and I\'m an amateur developer.',
    description2: 'You\'ll find on this website some information about me but also about my work.'
  },
  skills: {
    title: 'My skills',
    skill: {
      desktop: 'It\'s been some years now that I develop <strong>computer</strong> programs.',
      mobile: 'I\'m also developing some apps for <strong>Android</strong> and <strong>iOS</strong> devices.',
      web: 'I\'m sometimes working on <strong>web</strong> applications.'
    }
  },
  projects: {
    title: 'My projects',
    description1: 'You will find below two personal projects that I really want to share with you.',
    project: {
      werewolf: {
        name: 'Mobile Werewolf',
        description: 'Mobile Werewolf is an unofficial mobile version of the famous board game <q>Mafia</q>. The concept is simple : you and your friends are the inhabitants of a strange village where some of you turn into nasty werewolves at night.',
        image: 'werewolf/en'
      },
      authenticator: {
        name: 'Open Authenticator',
        description: 'Open Authenticator is a two factor authentication application, free and open-source. It allows all users to save their TOTPs (Time-Based One-Time Password) and to synchronize them between their devices so that they can be used as the second factor in the 2FA process.',
        image: 'openauthenticator'
      }
    },
    description2: 'If you want to see more projects, feel free to check out my <a href="https://github.com/Skyost">Github</a> profile. If you like what I do, or if you just want to support me, then you can make a donation using PayPal.',
    description3: 'Anyway, any help is greatly appreciated !'
  },
  contact: {
    title: 'Contact me',
    name: {
      label: 'First and last name / Pseudonym',
      placeholder: 'Enter your first and last name / Pseudonym',
      help: 'I need to know who I am talking to !'
    },
    email: {
      label: 'E-mail address',
      placeholder: 'Enter your e-mail address',
      help: 'And I also need to send you a reply 😊'
    },
    subject: {
      label: 'Subject',
      placeholder: 'Enter your message\'s subject',
      help: 'Tell me what are we going to talk about !'
    },
    message: {
      label: 'Message',
      placeholder: 'Enter your message',
      help: 'Minimum 100 characters.'
    },
    submit: 'Send',
    recaptcha: 'Protected by <a href="https://www.google.com/recaptcha/">reCaptcha</a>.',
    success: 'Message sent with success.',
    error: 'Error while sending your message. Please try again later.'
  },
  navbar: {
    me: 'Skyost',
    skills: 'My skills',
    projects: 'My projects',
    contact: 'Contact me'
  },
  error: {
    title: 'Error',
    pageNotFound: 'Page not found',
    description: 'You can keep browsing by going to <a href="javascript:history.back()">the previous page</a> or by going to <a href="/public">the home page</a>.',
    contactMe: 'If something should be here, please <a href="/public#contact">report it</a> to me.'
  }
}
