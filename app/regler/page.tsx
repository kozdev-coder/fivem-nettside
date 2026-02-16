export default function ReglerPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 via-black/90 to-black" />
      <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6 py-20">
        {/* Top bar */}
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-6 py-4 backdrop-blur-xl">
          <div className="text-sm tracking-[0.3em] text-white/70">EXIT RP</div>
          <a
            href="/"
            className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 transition"
          >
            Tilbake hjem
          </a>
        </div>

        {/* Title */}
        <h1 className="mt-14 text-5xl md:text-6xl font-bold text-center drop-shadow-[0_0_35px_rgba(59,130,246,0.9)]">
          EXIT RP Regelverk
        </h1>

        <p className="text-center text-white/60 mt-4">
          Gjeldende regler for Exit Rollespill – bindende for alle spillere
        </p>

        <div className="mt-14 space-y-10">
          {/* Intro */}
          <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h2 className="text-2xl font-semibold text-blue-400">
              Generelle regler for rollespill
            </h2>
            <ul className="mt-5 space-y-2 text-white/70 list-disc pl-5">
              <li><b>Metagaming:</b> Bruk av UAK-info i RP er forbudt.</li>
              <li><b>Powergaming:</b> Urealistiske handlinger uten motspill.</li>
              <li><b>Powerfarming:</b> Utnyttelse av systemer for rask gevinst.</li>
              <li><b>RDM:</b> Skade/drap uten RP-grunn.</li>
              <li><b>VDM:</b> Kjøretøy som våpen er forbudt.</li>
              <li><b>Greenzone:</b> Ingen krim på sykehus, politi, spawn.</li>
              <li><b>Combat logging:</b> Forbudt å logge ut i scenario.</li>
              <li><b>ERP:</b> Erotiske rollespill er ikke tillatt.</li>
              <li><b>Value of Life:</b> Verdsett liv realistisk.</li>
              <li><b>NLR:</b> Mister minne fra siste 15 min ved alvorlig skade.</li>
            </ul>
          </section>

          {/* Gjeng */}
          <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h2 className="text-2xl font-semibold text-blue-400">Gjengregler</h2>
            <p className="text-white/70 mt-3">
              Maks 11 medlemmer i aktive konflikter.
            </p>
          </section>

          {/* Grunnregler */}
          <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h2 className="text-2xl font-semibold text-blue-400">
              Grunnleggende regler
            </h2>
            <ul className="mt-5 space-y-2 text-white/70 list-disc pl-5">
              <li>FailRP er ikke tillatt</li>
              <li>Planlagte regelbrudd krever staff-godkjenning</li>
              <li>Bugs og glitches skal rapporteres</li>
              <li>Cheats/modifikasjoner er forbudt</li>
              <li>Misbruk av multikarakter er forbudt</li>
              <li>Streamere må skjule viktige lokasjoner</li>
            </ul>
          </section>

          {/* Krim */}
          <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h2 className="text-2xl font-semibold text-blue-400">
              Kriminelle regler
            </h2>
            <ul className="mt-5 space-y-2 text-white/70 list-disc pl-5">
              <li>Begrensninger på ran og gisler</li>
              <li>Maksbeløp ved spiller-ran</li>
              <li>Ingen tvang til å hente eiendeler</li>
              <li>Vipps-ran er forbudt</li>
              <li>Perming krever godkjenning</li>
              <li>Forceperming er forbudt</li>
            </ul>
          </section>

          {/* Karakter */}
          <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h2 className="text-2xl font-semibold text-blue-400">
              Karakterregler
            </h2>
            <ul className="mt-5 space-y-2 text-white/70 list-disc pl-5">
              <li>Realistiske navn</li>
              <li>Eiendeler overføres ikke ved død</li>
              <li>Perming kan velges innenfor regler</li>
            </ul>
          </section>

          {/* Ventetid */}
          <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h2 className="text-2xl font-semibold text-blue-400">
              Ventetid på ran
            </h2>
            <ul className="mt-5 space-y-2 text-white/70 list-disc pl-5">
              <li>Storbank – 42t</li>
              <li>Juvel – 32t</li>
              <li>Bank – 10t</li>
              <li>Butikk – 5t</li>
              <li>Husran – 2t</li>
              <li>ATM – 30 min</li>
            </ul>
          </section>

          {/* Jobb */}
          <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h2 className="text-2xl font-semibold text-blue-400">
              Jobbregler
            </h2>
            <ul className="mt-5 space-y-2 text-white/70 list-disc pl-5">
              <li>Ran av nødetater er forbudt</li>
              <li>Fakturaer skal være realistiske</li>
              <li>Salg av bedrifter krever søknad</li>
              <li>Ingen kriminalitet på vakt</li>
              <li>Jobbkasse kan ikke misbrukes</li>
            </ul>
          </section>
        </div>

        <footer className="mt-20 text-center text-white/40 space-y-2">
          <p>© {new Date().getFullYear()} EXIT RP</p>
          <p className="text-white/30 text-sm">
            Nettside laget av Fossland WebHost
          </p>
        </footer>
      </div>
    </main>
  );
}
