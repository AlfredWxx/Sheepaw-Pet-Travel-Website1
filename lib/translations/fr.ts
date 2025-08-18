export const fr = {
  // Navigation
  nav: {
    home: 'Accueil',
    services: 'Services',
    contact: 'Contact',
    freeConsultation: 'Consultation Gratuite'
  },

  // Hero section
  hero: {
    title: 'Un voyage transfrontalier rassurant pour vos compagnons à quatre pattes',
    subtitle: 'Professionnel, sûr et attentionné - la distance n\'est plus un problème, l\'amour se poursuit dans chaque coin',
    features: {
      fullProtection: 'Protection complète',
      professionalTransport: 'Transport professionnel',
      caringService: 'Service attentionné',
      globalCoverage: 'Couverture mondiale'
    },
    buttons: {
      freeConsultation: 'Consultation gratuite',
      learnMore: 'En savoir plus'
    }
  },

  // Services
  services: {
    title: 'Nos services chaleureux',
    subtitle: 'Nous offrons des services de transport transfrontalier professionnels, sûrs et attentionnés pour vos compagnons à quatre pattes, rendant chaque voyage chaleureux',
    items: {
      chinaToCanada: {
        title: '🇨🇳→🇨🇦 Le chemin du retour',
        description: 'Planifier le voyage de retour le plus sûr pour vos compagnons à quatre pattes',
        price: '¥8,000-15,000',
        features: ['Transport professionnel', 'Protection complète', 'Suivi en temps réel']
      },
      canadaToChina: {
        title: '🇨🇦→🇨🇳 Moment de réunion',
        description: 'Ne laissez plus la réunion attendre, livraison chaleureuse',
        price: '¥8,000-15,000',
        features: ['Escorte sécurisée', 'Service chaleureux', 'Dédouanement rapide']
      },
      documentService: {
        title: '📋 Services d\'assistance',
        description: 'Nous nous occupons des procédures fastidieuses, vous n\'avez qu\'à câliner vos compagnons',
        price: '¥3,000-5,000',
        features: ['Assistance procédurale', 'Préparation des documents', 'Conseils professionnels']
      }
    },
    whyChooseUs: {
      title: 'Pourquoi nous choisir',
      subtitle: 'Chaque détail reflète notre souci pour vos compagnons à quatre pattes, vous donnant confiance dans votre choix',
      features: {
        caring: {
          title: 'Soins attentionnés pour chaque compagnon',
          description: 'Nous comprenons l\'importance de vos compagnons pour vous, chaque détail est soigneusement organisé'
        },
        protection: {
          title: 'Protection complète, tranquillité d\'esprit',
          description: 'De l\'expédition à l\'arrivée, une équipe professionnelle vous accompagne tout au long du voyage'
        },
        realtime: {
          title: 'Partage en temps réel, traces d\'amour',
          description: 'Mise à jour en temps réel du statut pendant le transport, vous permettant de connaître la situation de vos compagnons à tout moment'
        },
        local: {
          title: 'Équipes locales, service local',
          description: 'Équipes professionnelles en Chine et au Canada, offrant le service le plus attentionné et localisé'
        }
      }
    }
  },

  // Contact form
  contact: {
    title: 'Laissez-nous créer un plan personnalisé pour vos compagnons',
    subtitle: 'Remplissez le formulaire ci-dessous, nos conseillers professionnels vous contacteront dans les 24 heures pour planifier le plan de transport le plus approprié pour vos compagnons',
    sections: {
      aboutYou: '📝 Parlez-nous de vous',
      aboutPet: '🐾 À propos de vos compagnons',
      serviceNeeds: '✈️ Vos besoins de service',
      moreInfo: '💬 Plus d\'informations à nous donner'
    },
    fields: {
      name: {
        label: 'Nom',
        placeholder: 'Comment vous appeler ?',
        error: 'Veuillez entrer votre nom'
      },
      phone: {
        label: 'Téléphone',
        placeholder: 'Numéro de téléphone de contact',
        error: 'Veuillez entrer un numéro de téléphone valide'
      },
      email: {
        label: 'Email',
        placeholder: 'Adresse email habituelle',
        error: 'Veuillez entrer une adresse email valide'
      },
      petType: {
        label: 'Type d\'animal',
        placeholder: 'Veuillez sélectionner le type d\'animal',
        error: 'Veuillez sélectionner le type d\'animal',
        options: {
          dog: 'Chien',
          cat: 'Chat',
          bird: 'Oiseau',
          rabbit: 'Lapin',
          other: 'Autre'
        }
      },
      route: {
        label: 'Route de transport',
        placeholder: 'Veuillez sélectionner la route de transport',
        error: 'Veuillez sélectionner la route de transport',
        options: {
          chinaToCanada: '🇨🇳 → 🇨🇦 Chine vers Canada',
          canadaToChina: '🇨🇦 → 🇨🇳 Canada vers Chine',
          other: 'Autre route'
        }
      },
      timeline: {
        label: 'Délai prévu',
        placeholder: 'Veuillez sélectionner le délai prévu',
        error: 'Veuillez sélectionner le délai prévu',
        options: {
          asap: 'Le plus tôt possible',
          oneMonth: 'Dans 1 mois',
          twoThreeMonths: 'Dans 2-3 mois',
          threeSixMonths: 'Dans 3-6 mois',
          flexible: 'Délai flexible'
        }
      },
      message: {
        label: 'Besoins détaillés',
        placeholder: 'Dites-nous vos besoins spéciaux et ceux de vos compagnons, comme l\'état de santé, les exigences spéciales, etc...',
        error: 'Veuillez décrire vos besoins en détail'
      }
    },
    submit: 'Commencer la consultation',
    submitting: 'Envoi en cours...',
    success: 'Soumission réussie ! Nous vous contacterons dans les 24 heures',
    error: 'Échec de la soumission, veuillez réessayer plus tard ou nous contacter directement',
    emergency: 'Pour les besoins urgents, veuillez nous contacter directement',
    contactInfo: {
      wechat: 'WeChat: sheepaw_pet',
      phone: 'Téléphone: +1 (555) 123-4567'
    }
  },

  // Footer
  footer: {
    description: 'Nous comprenons l\'importance de vos compagnons pour vous, chaque détail est soigneusement organisé. La distance n\'est plus un problème, l\'amour se poursuit dans chaque coin.',
    quickLinks: 'Liens rapides',
    contactInfo: 'Informations de contact',
    phone: 'Téléphone',
    email: 'Email',
    address: 'Adresse',
    addressValue: 'Canada & Chine',
    copyright: '© 2024 Sheepaw Pet Travel. Tous droits réservés.',
    privacy: 'Politique de confidentialité',
    terms: 'Conditions de service',
    slogan: 'Service attentionné pour chaque compagnon'
  }
}

