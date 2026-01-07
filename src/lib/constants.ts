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

// Navigation Items
export const NAV_ITEMS = [
  { label: 'Početna', href: '/' },
  { label: 'Usluge', href: '#usluge' },
  { label: 'O nama', href: '#o-nama' },
  { label: 'Proces', href: '#proces' },
  { label: 'Projekti', href: '/projekti' },
  { label: 'Galerija', href: '/galerija' },
  { label: 'Kontakt', href: '/kontakt' }
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

// Services Section
export const SERVICES = {
  preHeading: 'ŠTA RADIMO',
  heading: 'Naše Usluge',
  items: [
    {
      number: '01',
      icon: 'home',
      title: 'Stambeni prostori',
      description: 'Dizajniramo dnevne sobe, spavaće sobe, kuhinje i kupatila koja odražavaju vaš jedinstveni stil i odgovaraju vašim potrebama.'
    },
    {
      number: '02',
      icon: 'building',
      title: 'Poslovni prostori',
      description: 'Kreiramo funkcionalne i elegantne kancelarije, restorane i komercijalne prostore koji ostavljaju trajan utisak na vaše klijente.'
    },
    {
      number: '03',
      icon: 'brush',
      title: 'Konsultacije',
      description: 'Personalizovane konsultacije za boje, nameštaj i dekoraciju vašeg doma. Pomažemo vam da donesete prave odluke za vaš prostor.'
    }
  ]
}

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

// SEO Metadata
export const METADATA = {
  title: 'Dizajn Enterijera - Vaš prostor, naša priča',
  description: 'Kreiramo jedinstvene enterijere koji odražavaju vašu ličnost i stil života. Od koncepta do realizacije, sa više od 10 godina iskustva.',
  keywords: ['dizajn enterijera', 'enterijer', 'dizajn', 'nameštaj', 'renoviranje', 'kuhinje', 'kupatila', 'dnevne sobe']
}
