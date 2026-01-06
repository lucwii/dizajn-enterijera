export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f5f2] via-[#faf8f6] to-[#f0ebe6]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-1.5 bg-[#e8dfd5] text-[#8b7355] text-sm font-medium rounded-full mb-6">
              Dizajn Enterijera
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-light text-[#2d2d2d] mb-6 tracking-tight">
            Vaš prostor,<br />
            <span className="font-serif italic text-[#9b8573]">naša priča</span>
          </h1>

          <p className="text-lg md:text-xl text-[#6b6b6b] max-w-2xl mx-auto mb-12 leading-relaxed">
            Kreiramo jedinstvene enterijere koji odražavaju vašu ličnost i stil života.
            Sa pažnjom prema svakom detalju, transformišemo prostor u dom vaših snova.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-[#9b8573] text-white rounded-sm hover:bg-[#8b7355] transition-all duration-300 font-medium">
              Zakažite konsultaciju
            </button>
            <button className="px-8 py-4 border border-[#9b8573] text-[#9b8573] rounded-sm hover:bg-[#9b8573] hover:text-white transition-all duration-300 font-medium">
              Pogledajte portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-[#2d2d2d] text-center mb-16">
            Naše <span className="font-serif italic text-[#9b8573]">usluge</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-[#f0ebe6] rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[#9b8573]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-2xl font-light text-[#2d2d2d] mb-4">Stambeni prostori</h3>
              <p className="text-[#6b6b6b] leading-relaxed">
                Dizajniramo dnevne sobe, spavaće sobe, kuhinje i kuppatila koja odražavaju vaš jedinstveni stil.
              </p>
            </div>

            <div className="p-8 bg-white rounded-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-[#f0ebe6] rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[#9b8573]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-light text-[#2d2d2d] mb-4">Poslovni prostori</h3>
              <p className="text-[#6b6b6b] leading-relaxed">
                Kreiramo funkcionalne i elegantne kancelarije, restorane i komercijalne prostore.
              </p>
            </div>

            <div className="p-8 bg-white rounded-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-[#f0ebe6] rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[#9b8573]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-light text-[#2d2d2d] mb-4">Konsultacije</h3>
              <p className="text-[#6b6b6b] leading-relaxed">
                Personalizovane konsultacije za boje, nameštaj i dekoraciju vašeg doma.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light text-[#2d2d2d] mb-8">
            O <span className="font-serif italic text-[#9b8573]">nama</span>
          </h2>
          <p className="text-lg text-[#6b6b6b] leading-relaxed max-w-3xl mx-auto mb-6">
            Sa višegodišnjim iskustvom u dizajnu enterijera, naš tim stručnjaka posvećen je stvaranju prostora
            koji su istovremeno funkcionalni i estetski prefinjen. Verujemo da svaki prostor ima potencijal
            da postane nešto izuzetno.
          </p>
          <p className="text-lg text-[#6b6b6b] leading-relaxed max-w-3xl mx-auto">
            Naš pristup kombinuje klasičnu eleganciju sa savremenim trendovima, stvarajući bezvremenski dizajn
            koji će vas inspirisati godinama.
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-6 bg-[#9b8573]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Spremni da transformišete vaš prostor?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Kontaktirajte nas danas i započnimo vaš projekat zajedno.
          </p>
          <button className="px-8 py-4 bg-white text-[#9b8573] rounded-sm hover:bg-[#f8f5f2] transition-all duration-300 font-medium">
            Kontaktirajte nas
          </button>
        </div>
      </section>
    </div>
  );
}
