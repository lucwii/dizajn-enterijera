// Brand Colors
export const COLORS = {
  primary: '#9b8573',
  primaryDark: '#8b7355',
  accent: '#e8dfd5',
  bgGradient: {
    from: '#f8f5f2',
    via: '#faf8f6',
    to: '#f0ebe6'
  },
  text: {
    primary: '#2d2d2d',
    secondary: '#6b6b6b'
  },
  dark: '#2d2d2d'
}

export const PROJECTS = [
  {
    title: 'Modern Apartment',
    category: 'Residential',
    image: '/images/projects/project-2.jpg',
  },
  {
    title: 'Luxury Villa',
    category: 'Architecture',
    image: '/images/projects/project-1.jpg',
  },
  {
    title: 'Minimal Office',
    category: 'Commercial',
    image: '/images/projects/project-3.jpg',
  },
  {
    title: 'Interior Concept',
    category: 'Interior Design',
    image: '/images/projects/project-4.jpg',
  },
]

// Navigation Items
export const NAV_ITEMS = [
  { label: 'Početna', href: '/' },
  { label: 'Usluge', href: '/#usluge' },
  { label: 'O nama', href: '/#o-nama' },
  { label: 'Proces', href: '/#proces' },
  { label: 'Projekti', href: '/projects' },
  { label: 'Galerija', href: '/gallery' },
  { label: 'Kontakt', href: '/contact' }
]

// Hero Section
export const HERO = {
  badge: 'Dizajn Enterijera',
  title: {
    line1: 'PROSTOR KOJI',
    line2: 'PRIČA VAŠU PRIČU'
  },
  subtitle: 'Kreiramo jedinstvene enterijere koji odražavaju vašu ličnost i stil života. Od koncepta do realizacije, vaš san dom je naša misija.',
  cta: {
    primary: 'Zakažite konsultaciju',
    secondary: 'Pogledajte portfolio'
  },
  image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&h=1080&q=80&fit=crop' // Minimalist living room
}

// Statistics Section
export const STATS = [
  { number: 150, label: 'Završenih projekata', suffix: '+' },
  { number: 500, label: 'Zadovoljnih klijenata', suffix: '+' },
  { number: 10, label: 'Godina iskustva', suffix: '+' }
]

// Process Section
export const PROCESS = {
  preHeading: 'KAKO RADIMO',
  heading: 'Naš Proces',
  steps: [
    {
      number: '01',
      title: 'Konsultacija',
      description: 'Upoznajemo se sa vašom vizijom, potrebama i stilom života. Razgovaramo o budžetu i vremenskom okviru projekta.'
    },
    {
      number: '02',
      title: 'Dizajn',
      description: 'Kreiramo personalizovano rješenje sa 3D vizualizacijama, tehničkim planovima i detaljnom specifikacijom materijala.'
    },
    {
      number: '03',
      title: 'Realizacija',
      description: 'Nadziremo realizaciju projekta do finalnog detalja, osiguravajući da sve bude izvedeno prema najvišim standardima.'
    }
  ]
}

// About Section
export const ABOUT = {
  preHeading: 'O NAMA',
  heading: 'Kreatori Prostora',
  paragraphs: [
    'Sa više od 10 godina iskustva u dizajnu enterijera, naš tim stručnjaka posvećen je stvaranju prostora koji su istovremeno funkcionalni i estetski prefinjen. Vjerujemo da svaki prostor ima potencijal da postane nešto izuzetno.',
    'Naš pristup kombinuje klasičnu eleganciju sa savremenim trendovima, koristeći najkvalitetnije materijale i pažljivo birane detalje. Od prvog sketcha do finalne realizacije, sa vama smo na svakom koraku.'
  ],
  quote: 'Dizajn nije samo kako nešto izgleda, već kako funkcioniše i kako se osjeća.',
  image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=1000&q=80&fit=crop' // Interior design workspace
}

// Contact Section
export const CONTACT = {
  heading: 'Spremni da transformišete vaš prostor?',
  subheading: 'Kontaktirajte nas danas i započnimo vaš projekat zajedno.',
  cta: 'Zakažite konsultaciju',
  email: 'info@dizajn-enterijera.com',
  phone: '+381 60 123 4567'
}

// Working Hours
export const WORKING_HOURS = [
  { days: 'Ponedeljak - Petak', hours: '9:00 - 17:00', available: true },
  { days: 'Subota', hours: 'Po dogovoru', available: true },
  { days: 'Nedelja', hours: 'Zatvoreno', available: false }
]

// FAQ Items
export const FAQ_ITEMS = [
  {
    question: 'Koliko traje proces dizajniranja enterijera?',
    answer: 'Prosečan projekat traje 4-8 nedelja od inicijalne konsultacije do finalne prezentacije. Složeniji projekti mogu trajati i duže, dok manji projekti mogu biti završeni za 2-3 nedelje.'
  },
  {
    question: 'Da li nudite usluge nadzora nad izvođenjem radova?',
    answer: 'Da, nudimo kompletnu uslugu nadzora kako bismo osigurali da se vaš projekat izvede prema najvišim standardima. To uključuje redovne posete gradilištu i koordinaciju sa izvođačima.'
  },
  {
    question: 'Šta je uključeno u dizajnerski paket?',
    answer: 'Naš paket uključuje 3D vizualizacije, detaljne tehničke crteže, specifikaciju materijala i nameštaja, konsultacije sa izvođačima i kompletnu podršku tokom realizacije projekta.'
  },
  {
    question: 'Da li radite sa postojećim nameštajem klijenta?',
    answer: 'Apsolutno! Volimo da integrišemo komade koji imaju sentimentalnu vrednost ili poseban značaj u novi dizajn. To čini prostor još autentičnijim i personalizovanijim.'
  },
  {
    question: 'Kako izgleda početni proces konsultacije?',
    answer: 'Započinjemo sa detaljnim razgovorom o vašim potrebama, željenoj estetici, stilu života i budžetu. Poseta lokaciji sledi kako bismo razumeli prostor i njegove mogućnosti.'
  },
  {
    question: 'Da li nudite virtuelne konsultacije?',
    answer: 'Da, nudimo virtuelne konsultacije putem video poziva za klijente koji ne mogu da dođu lično. To uključuje detaljnu diskusiju i pregled prostora putem video snimaka.'
  }
]

// Team Members
export const TEAM_MEMBERS = [
  {
    name: 'Ana Petrović',
    role: 'Glavni dizajner',
    description: 'Sa više od 15 godina iskustva u dizajnu enterijera, Ana vodi naš tim u kreiranju prostora koji inspirišu.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&q=80&fit=crop', // Professional woman portrait
    specialty: 'Specijalizacija: Luksuzni stambeni prostori'
  },
  {
    name: 'Marko Jovanović',
    role: 'Arhitekta',
    description: 'Marko donosi tehničku ekspertizu i inovativna rešenja u sve naše projekte.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=1000&q=80&fit=crop', // Professional man portrait
    specialty: 'Specijalizacija: Komercijalni prostori'
  },
  {
    name: 'Jelena Nikolić',
    role: 'Dizajner enterijera',
    description: 'Jelena je stručnjakinja za izbor materijala i boja, stvarajući harmonične ambijente.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=1000&q=80&fit=crop', // Professional woman portrait
    specialty: 'Specijalizacija: Kolorne sheme i materijali'
  }
]

// SEO Metadata
export const METADATA = {
  title: 'Dizajn Enterijera - Vaš prostor, naša priča',
  description: 'Kreiramo jedinstvene enterijere koji odražavaju vašu ličnost i stil života. Od koncepta do realizacije, sa više od 10 godina iskustva.',
  keywords: ['dizajn enterijera', 'enterijer', 'dizajn', 'nameštaj', 'renoviranje', 'kuhinje', 'kupatila', 'dnevne sobe']
}

// Consultation Page
export const CONSULTATION_HERO = {
  badge: 'Besplatna konsultacija',
  title: {
    line1: 'Zakažite',
    line2: 'konsultaciju'
  },
  subtitle: 'Prvi korak ka prostoru iz snova. Podelite nam svoju viziju i zajedno ćemo je pretvoriti u stvarnost.',
  image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&h=1080&q=80&fit=crop'
}

export const CONSULTATION_SERVICES = [
  {
    id: 'interior-design',
    name: 'Dizajn enterijera',
    description: 'Kompletna usluga dizajna sa 3D vizualizacijama, tehničkim planovima i nadzorom realizacije.',
    icon: 'brush',
    features: ['3D vizualizacije', 'Tehnički crteži', 'Nadzor realizacije']
  },
  {
    id: 'consultation',
    name: 'Konsultacija',
    description: 'Jednosatni razgovor sa našim dizajnerom za savete i smernice za vaš projekat.',
    icon: 'home',
    features: ['60 min razgovor', 'Personalizovani saveti', 'Pisani izveštaj']
  },
  {
    id: 'renovation',
    name: 'Kompletna renovacija',
    description: 'Od ideje do ključeva - upravljamo celokupnim procesom renoviranja vašeg prostora.',
    icon: 'building',
    features: ['Upravljanje projektom', 'Koordinacija majstora', 'Finalna predaja']
  }
]

export const CONSULTATION_PROCESS = [
  {
    number: '01',
    title: 'Primamo vaš zahtev',
    description: 'Vaša poruka stiže direktno našem timu. Pregledamo je i pripremamo se za razgovor.',
    timeframe: 'U roku od 24h'
  },
  {
    number: '02',
    title: 'Kontaktiramo vas',
    description: 'Javljamo se telefonom ili emailom da dogovorimo termin za konsultaciju.',
    timeframe: '1-2 radna dana'
  },
  {
    number: '03',
    title: 'Besplatna konsultacija',
    description: 'Upoznajemo se sa vašom vizijom, potrebama i mogućnostima prostora.',
    timeframe: '30-60 minuta'
  },
  {
    number: '04',
    title: 'Personalizovani predlog',
    description: 'Pripremamo detaljan predlog saradnje sa rokovima i budžetom.',
    timeframe: '3-5 radnih dana'
  }
]

export const CONSULTATION_FAQ = [
  {
    question: 'Koliko košta inicijalna konsultacija?',
    answer: 'Inicijalna konsultacija je besplatna i traje oko 30 minuta. Tokom nje upoznajemo se sa vašim potrebama i predstavljamo naš pristup.'
  },
  {
    question: 'Koliko traje proces od konsultacije do početka rada?',
    answer: 'Nakon inicijalne konsultacije, pripremamo predlog u roku od 3-5 radnih dana. Po prihvatanju, rad počinje u dogovorenom terminu.'
  },
  {
    question: 'Da li nudite virtuelne konsultacije?',
    answer: 'Da, nudimo konsultacije putem video poziva za klijente koji nisu u mogućnosti da nas posete lično.'
  },
  {
    question: 'Šta treba da pripremim za konsultaciju?',
    answer: 'Pripremite fotografije prostora, okvirne dimenzije, inspiracije (Pinterest, magazini) i ideju o budžetu. Sve ostalo ćemo zajedno definisati.'
  }
]

export const TESTIMONIALS = [
  {
    quote: 'Od prvog razgovora do finalne realizacije, svaki korak je bio profesionalan i inspirativan. Naš dom sada izgleda kao iz magazina.',
    author: 'Marija i Petar Nikolić',
    project: 'Stan u Beogradu, 85m²'
  },
  {
    quote: 'Konsultacija mi je pomogla da razumem šta je zaista moguće sa mojim prostorom. Preporuka svima koji žele promenu.',
    author: 'Ana Jovanović',
    project: 'Konsultacija za kuhinju'
  },
  {
    quote: 'Renoviranje stana je bilo bezbolno iskustvo zahvaljujući ovom timu. Sve je završeno na vreme i iznad očekivanja.',
    author: 'Stefan Marković',
    project: 'Kompletna renovacija, 120m²'
  }
]
