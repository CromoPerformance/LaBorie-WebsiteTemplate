import { createContext, useContext, useState, useCallback } from 'react'

export const LANGS = ['pt', 'en', 'fr', 'es']

const dict = {
  /* ─────────────────────────── PORTUGUÊS ─────────────────────────── */
  pt: {
    langName: { pt: 'Português', en: 'English', fr: 'Français', es: 'Español' },

    header: {
      menu: 'Menu',
      closeMenu: 'Fechar menu',
      book: 'Reserve sua experiência',
      navHome: 'Sua Casa à Beira-Mar',
      navHistory: 'História & Herança',
      navRooms: 'Acomodações',
      navDining: 'Chez Françoise',
      navExperiences: 'Experiências',
      navWellness: 'La Borie Wellness',
      navWeddings: 'Casamentos',
      secHotel: 'O Hotel',
      secHotelLinks: ['40 Verões à Beira-Mar', 'História e Herança', 'Jardins Tropicais', 'Localização'],
      secDiscover: 'Descubra',
      secDiscoverLinks: ['Búzios', 'Sustentabilidade', 'Galeria', 'Contato'],
      utilPress: 'Imprensa',
      utilContacts: 'Contatos',
      utilCareers: 'Trabalhe Conosco',
    },

    cta: { book: 'Reserve sua experiência' },

    hero: {
      title: 'Le Relais La Borie, a sua casa à beira-mar desde 1986.',
      subtitle: 'Praia de Geribá, Armação dos Búzios, RJ',
      arrival: 'Chegada',
      departure: 'Saída',
      roomsGuests: 'Quartos & Hóspedes',
      room: 'Quarto',
      guests: 'Hóspedes',
      book: 'Reservar',
      imgAlt: 'Vista para o mar de Geribá, Le Relais La Borie',
    },

    about: {
      eyebrow: 'Sua casa à beira-mar',
      title: ['Onde a Herança Francesa', 'Encontra a Praia', 'de Geribá'],
      body: 'O único hotel boutique de charme estritamente "pé na areia" na Praia de Geribá. Nascido em 1986 da antiga casa de veraneio da família, mantemos viva a essência do acolhimento, quando "o hóspede para nós é único", e o inconfundível toque francês na decoração e no atendimento há quase 40 anos.',
      readMore: 'Nossa História',
      imgAltBw: 'Le Relais La Borie, herança familiar desde 1986',
      imgAltColor: 'Interior acolhedor com vista para o mar',
    },

    historia: {
      kicker: 'Uma história de família',
      numAria: '40 verões à beira-mar',
      title: ['Quarenta verões', 'à beira-mar'],
      lede: 'Em Geribá, uma casa de campo se tornou um refúgio à beira-mar. Quarenta anos depois, continua recebendo os mesmos hóspedes, os filhos deles e os netos.',
      col1Label: 'O começo',
      col1Text: 'Tudo começou em dezembro de 1986, quando Geribá ainda era uma vila de pescadores, com estradas de chão e pouquíssimas casas. A ideia era uma só: receber como se recebe amigos em casa, com a delicadeza francesa. Quarenta verões depois, é exatamente isso que continuamos fazendo, para você.',
      col2Label: 'O que não mudou',
      col2Text: 'O hóspede continua sendo tratado como único, a família segue presente no dia a dia e a atenção aos detalhes permanece em cada cantinho da casa. É por isso que gerações de famílias voltam todos os anos. E é por isso que você, ao chegar, vai sentir que sempre foi esperado.',
    },

    dining: {
      eyebrow: 'Gastronomia',
      title: ['Restaurante', 'Chez Françoise'],
      body: 'Uma homenagem à Sra. Françoise Lindemann, nossa cozinha celebra o melhor do encontro entre a tradição francesa e os ingredientes tropicais de Búzios. Ambiente intimista, serviço personalizado e sabores que ficam na memória, da famosa Tarte Tatin ao peixe ao suco de maracujá.',
      linkRestaurant: 'Conheça o Restaurante',
      linkPantagruels: 'Les Pantagruels',
      imgAlt: 'Restaurante Chez Françoise à beira-mar',
    },

    rooms: {
      eyebrow: 'Acomodações',
      title: ['Refúgios de', 'Charme e Conforto'],
      body: 'Nossas sete categorias de suítes foram idealizadas para proporcionar desconexão e tranquilidade. Desfrute da brisa do mar, lençóis impecáveis e o som suave das ondas como trilha sonora da sua estadia.',
      linkView: 'Ver Acomodações',
      linkAvailability: 'Disponibilidade',
    },

    suites: {
      view: 'Ver Suíte',
      prev: 'Anterior',
      next: 'Próximo',
      list: {
        luaDeMel: { title: 'Lua de Mel', body: 'Cama de dossel, banheira de hidromassagem dupla e varanda privativa com vista para o mar.' },
        suiteMasterMar: { title: 'Suíte Master Mar', body: 'Suíte superior no topo do hotel, com vista total do mar e dois ambientes climatizados.' },
        suiteMasterJardim: { title: 'Suíte Master Jardim', body: 'Suíte ampla e silenciosa nos jardins do hotel, inspirada no estilo do sul da França.' },
        masterMar: { title: 'Master Mar', body: 'Quarto superior aconchegante e charmoso com vista para o mar.' },
        masterJardim: { title: 'Master Jardim', body: 'Quarto superior aconchegante e charmoso nos jardins do hotel.' },
        confortMar: { title: 'Confort Mar', body: 'Quarto standard aconchegante com vista para o mar.' },
        confortJardim: { title: 'Confort Jardim', body: 'Quarto standard aconchegante nos jardins do hotel.' },
        confortJunior: { title: 'Confort Junior', body: 'Quarto intimista nos jardins, perfeito para casais.' },
      },
    },

    floral: {
      eyebrow: 'Casamentos & Lua de Mel',
      title: 'Celebre o Amor',
      body1: 'O Le Relais La Borie oferece um cenário deslumbrante e intimista para o seu dia especial. Seja um casamento exclusivo à beira-mar ou uma lua de mel romântica, cuidamos de cada detalhe com a nossa autêntica hospitalidade.',
      body2: 'Nosso atendimento humanizado e personalizado garante que suas memórias afetivas sejam inesquecíveis, celebrando o amor em um refúgio de sofisticação onde a França encontra a Praia de Geribá.',
      btn: 'Saiba Mais',
      imgAlt: 'Casamentos e Lua de Mel em Búzios',
    },

    indulge: {
      spa: {
        eyebrow: 'Wellness',
        title: 'La Borie Wellness',
        body: 'Nosso espaço Rêverie Tropicale é um convite ao relaxamento profundo. Desfrute de massagens exclusivas, sauna, jacuzzi e sessões de yoga ao nascer do sol, tudo pensado para restaurar o equilíbrio do corpo e da mente.',
        link: 'Saiba Mais',
        imgAlt: 'Espaço Rêverie Tropicale',
      },
      lifestyle: {
        eyebrow: 'Esportes & Natureza',
        title: 'Geribá Lifestyle',
        body: 'A praia de Geribá oferece o cenário perfeito para esportes aquáticos e conexão com a natureza. Apoiamos orgulhosamente atletas locais de surf e canoa havaiana, promovendo a autêntica cultura praiana de Búzios.',
        link: 'Descubra',
        imgAlt: 'Geribá Lifestyle e esportes',
      },
    },

    contact: {
      eyebrow: 'Contato',
      title: 'Fale Conosco',
      addrLabel: 'Endereço',
      addrLine1: 'Rua Gerbert Périssé, 1361',
      addrLine2: 'Praia de Geribá, Armação dos Búzios, RJ',
      reservasLabel: 'Reservas',
      hoursLabel: 'Horários',
      hoursLine1: 'Recepção e concierge',
      hoursLine2: 'todos os dias, 24 horas',
      name: 'Nome',
      email: 'E-mail',
      subject: 'Assunto',
      message: 'Mensagem',
      subjects: ['Reservas', 'Gastronomia', 'Eventos & Casamentos', 'La Borie Wellness', 'Outros'],
      submit: 'Enviar Mensagem',
      successTitle: 'Obrigado pela sua mensagem.',
      successText: 'Nossa equipe retornará em breve, com o mesmo carinho que recebemos cada hóspede desde 1986.',
    },

    footer: {
      explore: 'Explore',
      linkHotel: 'O Hotel',
      linkRooms: 'Acomodações',
      linkDining: 'Gastronomia',
      linkWellness: 'Wellness',
      linkWeddings: 'Casamentos',
      tagline: 'Desde 1986 | Búzios',
      address1: 'Rua Gerbert Périssé, 1361',
      address2: 'Praia de Geribá, Armação dos Búzios, RJ',
      copy: '© 2026 Hotel Le Relais La Borie. Todos os direitos reservados.',
      privacy: 'Política de Privacidade',
      terms: 'Termos de Serviço',
      careers: 'Trabalhe Conosco',
    },

    booking: {
      eyebrow: 'Le Relais La Borie',
      title: 'Reserve sua estadia',
      checkIn: 'Check-in',
      checkOut: 'Check-out',
      guests: 'Hóspedes',
      selectSuite: 'Selecione sua suíte',
      fullName: 'Nome completo',
      placeholderName: 'Seu nome',
      emailAddress: 'E-mail',
      placeholderEmail: 'seu@email.com',
      disclaimer: 'Ao confirmar, você concorda com nossa política de cancelamento. Nenhuma cobrança é feita até a chegada.',
      confirm: 'Confirmar reserva',
      close: 'Fechar',
      confirmedThanks: 'Obrigado, {name}',
      confirmedDesc1: 'Sua reserva para o',
      confirmedDesc2: 'foi recebida. Uma confirmação será enviada para',
      yourEmail: 'seu e-mail',
    },
  },

  /* ─────────────────────────── ENGLISH ─────────────────────────── */
  en: {
    langName: { pt: 'Português', en: 'English', fr: 'Français', es: 'Español' },

    header: {
      menu: 'Menu',
      closeMenu: 'Close menu',
      book: 'Reserve your stay',
      navHome: 'Your Home by the Sea',
      navHistory: 'History & Heritage',
      navRooms: 'Accommodations',
      navDining: 'Chez Françoise',
      navExperiences: 'Experiences',
      navWellness: 'La Borie Wellness',
      navWeddings: 'Weddings',
      secHotel: 'The Hotel',
      secHotelLinks: ['40 Summers by the Sea', 'History and Heritage', 'Tropical Gardens', 'Location'],
      secDiscover: 'Discover',
      secDiscoverLinks: ['Búzios', 'Sustainability', 'Gallery', 'Contact'],
      utilPress: 'Press',
      utilContacts: 'Contacts',
      utilCareers: 'Careers',
    },

    cta: { book: 'Reserve your stay' },

    hero: {
      title: 'Le Relais La Borie, your home by the sea since 1986.',
      subtitle: 'Geribá Beach, Armação dos Búzios, RJ',
      arrival: 'Arrival',
      departure: 'Departure',
      roomsGuests: 'Rooms & Guests',
      room: 'Room',
      guests: 'Guests',
      book: 'Book',
      imgAlt: 'View over the sea at Geribá, Le Relais La Borie',
    },

    about: {
      eyebrow: 'Your home by the sea',
      title: ['Where French Heritage', 'Meets the Beach', 'of Geribá'],
      body: 'The only boutique charm hotel strictly on the sand at Geribá Beach. Born in 1986 from the family summer house, we keep alive the essence of hospitality, where "every guest is unique", and the unmistakable French touch in our décor and service for almost 40 years.',
      readMore: 'Our Story',
      imgAltBw: 'Le Relais La Borie, a family heritage since 1986',
      imgAltColor: 'Cosy interior with sea view',
    },

    historia: {
      kicker: 'A family story',
      numAria: '40 summers by the sea',
      title: ['Forty summers', 'by the sea'],
      lede: 'In Geribá, a country house became a seaside refuge. Forty years later, it still welcomes the same guests, their children and their grandchildren.',
      col1Label: 'The beginning',
      col1Text: 'It all began in December 1986, when Geribá was still a fishing village, with dirt roads and very few houses. The idea was a simple one: to welcome as you welcome friends at home, with French elegance. Forty summers later, that is exactly what we still do, for you.',
      col2Label: 'What has never changed',
      col2Text: 'Every guest is still treated as unique, the family remains present every day and attention to detail lives on in every corner of the house. That is why generations of families return year after year. And why, when you arrive, you will feel you were always expected.',
    },

    dining: {
      eyebrow: 'Gastronomy',
      title: ['Restaurant', 'Chez Françoise'],
      body: 'A tribute to Mrs. Françoise Lindemann, our kitchen celebrates the best of French tradition meeting the tropical ingredients of Búzios. An intimate setting, personalised service and flavours to remember, from the famous Tarte Tatin to fish with passion fruit sauce.',
      linkRestaurant: 'Discover the Restaurant',
      linkPantagruels: 'Les Pantagruels',
      imgAlt: 'Chez Françoise restaurant by the sea',
    },

    rooms: {
      eyebrow: 'Accommodations',
      title: ['Retreats of', 'Charm and Comfort'],
      body: 'Our seven categories of suites were designed to bring disconnection and tranquillity. Enjoy the sea breeze, impeccable linen and the gentle sound of the waves as the soundtrack to your stay.',
      linkView: 'View Accommodations',
      linkAvailability: 'Availability',
    },

    suites: {
      view: 'View Suite',
      prev: 'Previous',
      next: 'Next',
      list: {
        luaDeMel: { title: 'Lua de Mel', body: 'Four-poster bed, double whirlpool tub and private balcony with sea view.' },
        suiteMasterMar: { title: 'Suíte Master Mar', body: 'Top-floor superior suite with panoramic sea views and two air-conditioned areas.' },
        suiteMasterJardim: { title: 'Suíte Master Jardim', body: 'Spacious, quiet suite in the hotel gardens, inspired by the style of southern France.' },
        masterMar: { title: 'Master Mar', body: 'Cosy, charming superior room with sea view.' },
        masterJardim: { title: 'Master Jardim', body: 'Cosy, charming superior room in the hotel gardens.' },
        confortMar: { title: 'Confort Mar', body: 'Cosy standard room with sea view.' },
        confortJardim: { title: 'Confort Jardim', body: 'Cosy standard room in the hotel gardens.' },
        confortJunior: { title: 'Confort Junior', body: 'Intimate garden room, perfect for couples.' },
      },
    },

    floral: {
      eyebrow: 'Weddings & Honeymoon',
      title: 'Celebrate Love',
      body1: 'Le Relais La Borie offers a breathtaking, intimate setting for your special day. Whether an exclusive beachfront wedding or a romantic honeymoon, we take care of every detail with our authentic hospitality.',
      body2: 'Our warm, personalised service ensures your memories are unforgettable, celebrating love in a sophisticated refuge where France meets Geribá Beach.',
      btn: 'Learn More',
      imgAlt: 'Weddings and Honeymoon in Búzios',
    },

    indulge: {
      spa: {
        eyebrow: 'Wellness',
        title: 'La Borie Wellness',
        body: 'Our Rêverie Tropicale space is an invitation to deep relaxation. Enjoy exclusive massages, sauna, jacuzzi and sunrise yoga sessions, all designed to restore balance to body and mind.',
        link: 'Learn More',
        imgAlt: 'Rêverie Tropicale space',
      },
      lifestyle: {
        eyebrow: 'Sports & Nature',
        title: 'Geribá Lifestyle',
        body: 'Geribá Beach is the perfect setting for water sports and a connection with nature. We proudly support local surf and outrigger canoe athletes, celebrating the authentic beach culture of Búzios.',
        link: 'Discover',
        imgAlt: 'Geribá lifestyle and sports',
      },
    },

    contact: {
      eyebrow: 'Contact',
      title: 'Get in Touch',
      addrLabel: 'Address',
      addrLine1: 'Rua Gerbert Périssé, 1361',
      addrLine2: 'Geribá Beach, Armação dos Búzios, RJ',
      reservasLabel: 'Reservations',
      hoursLabel: 'Opening Hours',
      hoursLine1: 'Reception and concierge',
      hoursLine2: 'every day, 24 hours',
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      subjects: ['Reservations', 'Gastronomy', 'Events & Weddings', 'La Borie Wellness', 'Other'],
      submit: 'Send Message',
      successTitle: 'Thank you for your message.',
      successText: 'Our team will be in touch shortly, with the same care with which we have welcomed every guest since 1986.',
    },

    footer: {
      explore: 'Explore',
      linkHotel: 'The Hotel',
      linkRooms: 'Accommodations',
      linkDining: 'Gastronomy',
      linkWellness: 'Wellness',
      linkWeddings: 'Weddings',
      tagline: 'Since 1986 | Búzios',
      address1: 'Rua Gerbert Périssé, 1361',
      address2: 'Geribá Beach, Armação dos Búzios, RJ',
      copy: '© 2026 Hotel Le Relais La Borie. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      careers: 'Careers',
    },

    booking: {
      eyebrow: 'Le Relais La Borie',
      title: 'Reserve your stay',
      checkIn: 'Check-in',
      checkOut: 'Check-out',
      guests: 'Guests',
      selectSuite: 'Select your suite',
      fullName: 'Full name',
      placeholderName: 'Your name',
      emailAddress: 'Email address',
      placeholderEmail: 'your@email.com',
      disclaimer: 'By confirming, you agree to our cancellation policy. No charge is made until arrival.',
      confirm: 'Confirm reservation',
      close: 'Close',
      confirmedThanks: 'Thank you, {name}',
      confirmedDesc1: 'Your reservation for the',
      confirmedDesc2: 'has been received. A confirmation will be sent to',
      yourEmail: 'your email',
    },
  },

  /* ─────────────────────────── FRANÇAIS ─────────────────────────── */
  fr: {
    langName: { pt: 'Português', en: 'English', fr: 'Français', es: 'Español' },

    header: {
      menu: 'Menu',
      closeMenu: 'Fermer le menu',
      book: 'Réservez votre séjour',
      navHome: 'Votre maison au bord de la mer',
      navHistory: 'Histoire & Héritage',
      navRooms: 'Hébergements',
      navDining: 'Chez Françoise',
      navExperiences: 'Expériences',
      navWellness: 'La Borie Wellness',
      navWeddings: 'Mariages',
      secHotel: "L'Hôtel",
      secHotelLinks: ['40 étés au bord de la mer', 'Histoire et héritage', 'Jardins tropicaux', 'Localisation'],
      secDiscover: 'Découvrir',
      secDiscoverLinks: ['Búzios', 'Durabilité', 'Galerie', 'Contact'],
      utilPress: 'Presse',
      utilContacts: 'Contacts',
      utilCareers: 'Recrutement',
    },

    cta: { book: 'Réservez votre séjour' },

    hero: {
      title: 'Le Relais La Borie, votre maison au bord de la mer depuis 1986.',
      subtitle: 'Plage de Geribá, Armação dos Búzios, RJ',
      arrival: 'Arrivée',
      departure: 'Départ',
      roomsGuests: 'Chambres & Hôtes',
      room: 'Chambre',
      guests: 'Hôtes',
      book: 'Réserver',
      imgAlt: 'Vue sur la mer de Geribá, Le Relais La Borie',
    },

    about: {
      eyebrow: 'Votre maison au bord de la mer',
      title: ["Où l'héritage français", 'Rencontre la plage', 'de Geribá'],
      body: "Le seul hôtel boutique de charme les pieds dans le sable sur la plage de Geribá. Né en 1986 de l'ancienne maison de vacances de la famille, nous cultivons l'essence de l'accueil, où « chaque hôte est unique », et la touche française indéniable dans la décoration et le service depuis près de 40 ans.",
      readMore: 'Notre histoire',
      imgAltBw: 'Le Relais La Borie, un héritage familial depuis 1986',
      imgAltColor: 'Intérieur chaleureux avec vue sur la mer',
    },

    historia: {
      kicker: 'Une histoire de famille',
      numAria: '40 étés au bord de la mer',
      title: ['Quarante étés', 'au bord de la mer'],
      lede: "À Geribá, une maison de campagne est devenue un refuge au bord de la mer. Quarante ans plus tard, elle accueille toujours les mêmes hôtes, leurs enfants et leurs petits-enfants.",
      col1Label: 'Le commencement',
      col1Text: "Tout a commencé en décembre 1986, quand Geribá était encore un village de pêcheurs, aux routes de terre et aux maisons très rares. L'idée était simple : recevoir comme on reçoit des amis à la maison, avec la délicatesse française. Quarante étés plus tard, c'est exactement ce que nous continuons de faire, pour vous.",
      col2Label: 'Ce qui n’a pas changé',
      col2Text: "Chaque hôte est toujours traité comme unique, la famille reste présente au quotidien et l'attention aux détails demeure dans chaque recoin de la maison. C'est pour cela que des générations de familles reviennent chaque année. Et c'est pour cela que, à votre arrivée, vous sentirez que vous étiez attendu.",
    },

    dining: {
      eyebrow: 'Gastronomie',
      title: ['Restaurant', 'Chez Françoise'],
      body: "Hommage à Madame Françoise Lindemann, notre cuisine célèbre la rencontre entre la tradition française et les ingrédients tropicaux de Búzios. Cadre intimiste, service personnalisé et saveurs mémorables, de la fameuse Tarte Tatin au poisson au fruit de la passion.",
      linkRestaurant: 'Découvrir le restaurant',
      linkPantagruels: 'Les Pantagruels',
      imgAlt: 'Restaurant Chez Françoise au bord de la mer',
    },

    rooms: {
      eyebrow: 'Hébergements',
      title: ['Refuges de', 'Charme et Confort'],
      body: "Nos sept catégories de suites ont été pensées pour la déconnexion et la tranquillité. Profitez de la brise marine, d'un linge impeccable et du bruit doux des vagues en trame de fond de votre séjour.",
      linkView: 'Voir les hébergements',
      linkAvailability: 'Disponibilité',
    },

    suites: {
      view: 'Voir la suite',
      prev: 'Précédent',
      next: 'Suivant',
      list: {
        luaDeMel: { title: 'Lua de Mel', body: "Lit à baldaquin, baignoire à remous double et balcon privé avec vue sur la mer." },
        suiteMasterMar: { title: 'Suíte Master Mar', body: "Suite supérieure au dernier étage, vue panoramique sur la mer et deux espaces climatisés." },
        suiteMasterJardim: { title: 'Suíte Master Jardim', body: "Suite spacieuse et calme dans les jardins de l'hôtel, inspirée du style du sud de la France." },
        masterMar: { title: 'Master Mar', body: "Chambre supérieure confortable et charmante avec vue sur la mer." },
        masterJardim: { title: 'Master Jardim', body: "Chambre supérieure confortable et charmante dans les jardins de l'hôtel." },
        confortMar: { title: 'Confort Mar', body: "Chambre standard confortable avec vue sur la mer." },
        confortJardim: { title: 'Confort Jardim', body: "Chambre standard confortable dans les jardins de l'hôtel." },
        confortJunior: { title: 'Confort Junior', body: 'Chambre intime dans les jardins, parfaite pour les couples.' },
      },
    },

    floral: {
      eyebrow: 'Mariages & Lune de miel',
      title: 'Célébrez l’Amour',
      body1: 'Le Relais La Borie offre un cadre superbe et intimiste pour votre grand jour. Qu’il s’agisse d’un mariage exclusif au bord de la mer ou d’une lune de miel romantique, nous soignons chaque détail avec notre hospitalité authentique.',
      body2: "Notre service personnalisé et chaleureux garantit des souvenirs inoubliables, célébrant l'amour dans un refuge de raffinement où la France rencontre la plage de Geribá.",
      btn: 'En savoir plus',
      imgAlt: 'Mariages et lune de miel à Búzios',
    },

    indulge: {
      spa: {
        eyebrow: 'Wellness',
        title: 'La Borie Wellness',
        body: "Notre espace Rêverie Tropicale est une invitation à la détente profonde. Profitez de massages exclusifs, du sauna, du jacuzzi et de séances de yoga au lever du soleil, tout est pensé pour restaurer l'équilibre du corps et de l'esprit.",
        link: 'En savoir plus',
        imgAlt: 'Espace Rêverie Tropicale',
      },
      lifestyle: {
        eyebrow: 'Sports & Nature',
        title: 'Geribá Lifestyle',
        body: "La plage de Geribá offre le cadre parfait pour les sports nautiques et la connexion avec la nature. Nous soutenons fièrement les athlètes locaux de surf et de pirogue hawaïenne, promouvant la culture balnéaire authentique de Búzios.",
        link: 'Découvrir',
        imgAlt: 'Style de vie et sports à Geribá',
      },
    },

    contact: {
      eyebrow: 'Contact',
      title: 'Contactez-nous',
      addrLabel: 'Adresse',
      addrLine1: 'Rua Gerbert Périssé, 1361',
      addrLine2: 'Plage de Geribá, Armação dos Búzios, RJ',
      reservasLabel: 'Réservations',
      hoursLabel: 'Horaires',
      hoursLine1: 'Réception et conciergerie',
      hoursLine2: 'tous les jours, 24 heures',
      name: 'Nom',
      email: 'E-mail',
      subject: 'Objet',
      message: 'Message',
      subjects: ['Réservations', 'Gastronomie', 'Événements & Mariages', 'La Borie Wellness', 'Autre'],
      submit: 'Envoyer le message',
      successTitle: 'Merci pour votre message.',
      successText: 'Notre équipe reviendra vers vous rapidement, avec la même attention avec laquelle nous accueillons chaque hôte depuis 1986.',
    },

    footer: {
      explore: 'Explorer',
      linkHotel: "L'Hôtel",
      linkRooms: 'Hébergements',
      linkDining: 'Gastronomie',
      linkWellness: 'Wellness',
      linkWeddings: 'Mariages',
      tagline: 'Depuis 1986 | Búzios',
      address1: 'Rua Gerbert Périssé, 1361',
      address2: 'Plage de Geribá, Armação dos Búzios, RJ',
      copy: '© 2026 Hôtel Le Relais La Borie. Tous droits réservés.',
      privacy: 'Politique de confidentialité',
      terms: 'Conditions de service',
      careers: 'Recrutement',
    },

    booking: {
      eyebrow: 'Le Relais La Borie',
      title: 'Réservez votre séjour',
      checkIn: 'Arrivée',
      checkOut: 'Départ',
      guests: 'Hôtes',
      selectSuite: 'Sélectionnez votre suite',
      fullName: 'Nom complet',
      placeholderName: 'Votre nom',
      emailAddress: 'Adresse e-mail',
      placeholderEmail: 'votre@email.com',
      disclaimer: "En confirmant, vous acceptez notre politique d'annulation. Aucun frais n'est débité avant l'arrivée.",
      confirm: 'Confirmer la réservation',
      close: 'Fermer',
      confirmedThanks: 'Merci, {name}',
      confirmedDesc1: 'Votre réservation pour la',
      confirmedDesc2: 'a bien été reçue. Une confirmation sera envoyée à',
      yourEmail: 'votre e-mail',
    },
  },

  /* ─────────────────────────── ESPAÑOL ─────────────────────────── */
  es: {
    langName: { pt: 'Português', en: 'English', fr: 'Français', es: 'Español' },

    header: {
      menu: 'Menú',
      closeMenu: 'Cerrar menú',
      book: 'Reserva tu estancia',
      navHome: 'Tu hogar frente al mar',
      navHistory: 'Historia y Herencia',
      navRooms: 'Habitaciones',
      navDining: 'Chez Françoise',
      navExperiences: 'Experiencias',
      navWellness: 'La Borie Wellness',
      navWeddings: 'Bodas',
      secHotel: 'El Hotel',
      secHotelLinks: ['40 veranos frente al mar', 'Historia y herencia', 'Jardines tropicales', 'Ubicación'],
      secDiscover: 'Descubre',
      secDiscoverLinks: ['Búzios', 'Sostenibilidad', 'Galería', 'Contacto'],
      utilPress: 'Prensa',
      utilContacts: 'Contactos',
      utilCareers: 'Trabaja con nosotros',
    },

    cta: { book: 'Reserva tu estancia' },

    hero: {
      title: 'Le Relais La Borie, tu hogar frente al mar desde 1986.',
      subtitle: 'Playa de Geribá, Armação dos Búzios, RJ',
      arrival: 'Llegada',
      departure: 'Salida',
      roomsGuests: 'Habitaciones y Huéspedes',
      room: 'Habitación',
      guests: 'Huéspedes',
      book: 'Reservar',
      imgAlt: 'Vista al mar de Geribá, Le Relais La Borie',
    },

    about: {
      eyebrow: 'Tu hogar frente al mar',
      title: ['Donde la herencia francesa', 'Se encuentra con la playa', 'de Geribá'],
      body: 'El único hotel boutique de encanto directamente sobre la arena en la playa de Geribá. Nacido en 1986 de la antigua casa veraniega de la familia, mantenemos viva la esencia del recibimiento, donde «cada huésped es único», y el inconfundible toque francés en la decoración y el servicio desde hace casi 40 años.',
      readMore: 'Nuestra historia',
      imgAltBw: 'Le Relais La Borie, un legado familiar desde 1986',
      imgAltColor: 'Interior acogedor con vistas al mar',
    },

    historia: {
      kicker: 'Una historia de familia',
      numAria: '40 veranos frente al mar',
      title: ['Cuarenta veranos', 'frente al mar'],
      lede: 'En Geribá, una casa de campo se convirtió en un refugio frente al mar. Cuarenta años después, sigue recibiendo a los mismos huéspedes, a sus hijos y a sus nietos.',
      col1Label: 'El comienzo',
      col1Text: 'Todo comenzó en diciembre de 1986, cuando Geribá aún era una aldea de pescadores, con caminos de tierra y muy pocas casas. La idea era una sola: recibir como se recibe a los amigos en casa, con la delicadeza francesa. Cuarenta veranos después, es exactamente lo que seguimos haciendo, para ti.',
      col2Label: 'Lo que no ha cambiado',
      col2Text: 'Cada huésped sigue siendo tratado como único, la familia permanece presente día a día y la atención a los detalles se mantiene en cada rincón de la casa. Por eso generaciones de familias vuelven todos los años. Y por eso, al llegar, sentirás que siempre te esperaban.',
    },

    dining: {
      eyebrow: 'Gastronomía',
      title: ['Restaurante', 'Chez Françoise'],
      body: 'Un homenaje a la Sra. Françoise Lindemann, nuestra cocina celebra el mejor encuentro entre la tradición francesa y los ingredientes tropicales de Búzios. Ambiente íntimo, servicio personalizado y sabores memorables, desde la famosa Tarte Tatin hasta el pescado con maracuyá.',
      linkRestaurant: 'Conoce el restaurante',
      linkPantagruels: 'Les Pantagruels',
      imgAlt: 'Restaurante Chez Françoise frente al mar',
    },

    rooms: {
      eyebrow: 'Habitaciones',
      title: ['Refugios de', 'Encanto y Confort'],
      body: 'Nuestras siete categorías de suites fueron pensadas para la desconexión y la tranquilidad. Disfruta de la brisa del mar, ropa de cama impecable y el suave sonido de las olas como banda sonora de tu estancia.',
      linkView: 'Ver habitaciones',
      linkAvailability: 'Disponibilidad',
    },

    suites: {
      view: 'Ver suite',
      prev: 'Anterior',
      next: 'Siguiente',
      list: {
        luaDeMel: { title: 'Lua de Mel', body: 'Cama baldaquín, bañera de hidromasaje doble y balcón privado con vistas al mar.' },
        suiteMasterMar: { title: 'Suíte Master Mar', body: 'Suite superior en la última planta, con vistas panorámicas al mar y dos ambientes climatizados.' },
        suiteMasterJardim: { title: 'Suíte Master Jardim', body: 'Suite amplia y silenciosa en los jardines del hotel, inspirada en el estilo del sur de Francia.' },
        masterMar: { title: 'Master Mar', body: 'Habitación superior acogedora y encantadora con vistas al mar.' },
        masterJardim: { title: 'Master Jardim', body: 'Habitación superior acogedora y encantadora en los jardines del hotel.' },
        confortMar: { title: 'Confort Mar', body: 'Habitación estándar acogedora con vistas al mar.' },
        confortJardim: { title: 'Confort Jardim', body: 'Habitación estándar acogedora en los jardines del hotel.' },
        confortJunior: { title: 'Confort Junior', body: 'Habitación íntima en los jardines, perfecta para parejas.' },
      },
    },

    floral: {
      eyebrow: 'Bodas y Luna de miel',
      title: 'Celebra el Amor',
      body1: 'Le Relais La Borie ofrece un escenario deslumbrante e íntimo para tu día especial. Ya sea una boda exclusiva frente al mar o una luna de miel romántica, cuidamos cada detalle con nuestra auténtica hospitalidad.',
      body2: 'Nuestro servicio humanizado y personalizado garantiza recuerdos inolvidables, celebrando el amor en un refugio de sofisticación donde Francia se encuentra con la playa de Geribá.',
      btn: 'Saber más',
      imgAlt: 'Bodas y luna de miel en Búzios',
    },

    indulge: {
      spa: {
        eyebrow: 'Wellness',
        title: 'La Borie Wellness',
        body: 'Nuestro espacio Rêverie Tropicale es una invitación a la relajación profunda. Disfruta de masajes exclusivos, sauna, jacuzzi y sesiones de yoga al amanecer, todo pensado para restaurar el equilibrio del cuerpo y la mente.',
        link: 'Saber más',
        imgAlt: 'Espacio Rêverie Tropicale',
      },
      lifestyle: {
        eyebrow: 'Deportes y Naturaleza',
        title: 'Geribá Lifestyle',
        body: 'La playa de Geribá ofrece el escenario perfecto para los deportes acuáticos y la conexión con la naturaleza. Apoyamos con orgullo a los atletas locales de surf y canoa hawaiana, promoviendo la auténtica cultura playera de Búzios.',
        link: 'Descubre',
        imgAlt: 'Estilo de vida y deportes en Geribá',
      },
    },

    contact: {
      eyebrow: 'Contacto',
      title: 'Ponte en contacto',
      addrLabel: 'Dirección',
      addrLine1: 'Rua Gerbert Périssé, 1361',
      addrLine2: 'Playa de Geribá, Armação dos Búzios, RJ',
      reservasLabel: 'Reservas',
      hoursLabel: 'Horarios',
      hoursLine1: 'Recepción y conserjería',
      hoursLine2: 'todos los días, 24 horas',
      name: 'Nombre',
      email: 'Correo electrónico',
      subject: 'Asunto',
      message: 'Mensaje',
      subjects: ['Reservas', 'Gastronomía', 'Eventos y Bodas', 'La Borie Wellness', 'Otro'],
      submit: 'Enviar mensaje',
      successTitle: 'Gracias por tu mensaje.',
      successText: 'Nuestro equipo te responderá pronto, con el mismo cariño con el que recibimos a cada huésped desde 1986.',
    },

    footer: {
      explore: 'Explorar',
      linkHotel: 'El Hotel',
      linkRooms: 'Habitaciones',
      linkDining: 'Gastronomía',
      linkWellness: 'Wellness',
      linkWeddings: 'Bodas',
      tagline: 'Desde 1986 | Búzios',
      address1: 'Rua Gerbert Périssé, 1361',
      address2: 'Playa de Geribá, Armação dos Búzios, RJ',
      copy: '© 2026 Hotel Le Relais La Borie. Todos los derechos reservados.',
      privacy: 'Política de Privacidad',
      terms: 'Términos de Servicio',
      careers: 'Trabaja con nosotros',
    },

    booking: {
      eyebrow: 'Le Relais La Borie',
      title: 'Reserva tu estancia',
      checkIn: 'Entrada',
      checkOut: 'Salida',
      guests: 'Huéspedes',
      selectSuite: 'Selecciona tu suite',
      fullName: 'Nombre completo',
      placeholderName: 'Tu nombre',
      emailAddress: 'Correo electrónico',
      placeholderEmail: 'tu@email.com',
      disclaimer: 'Al confirmar, aceptas nuestra política de cancelación. No se realiza ningún cargo hasta la llegada.',
      confirm: 'Confirmar reserva',
      close: 'Cerrar',
      confirmedThanks: 'Gracias, {name}',
      confirmedDesc1: 'Tu reserva para',
      confirmedDesc2: 'ha sido recibida. Se enviará una confirmación a',
      yourEmail: 'tu correo',
    },
  },
}

const LanguageContext = createContext(null)

function resolve(node, path) {
  for (const p of path) {
    if (node == null) return undefined
    node = node[p]
  }
  return node
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('pt')
  const t = useCallback((key) => {
    const path = key.split('.')
    const val = resolve(dict[lang], path)
    return val !== undefined ? val : resolve(dict.pt, path)
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within a LanguageProvider')
  return ctx
}