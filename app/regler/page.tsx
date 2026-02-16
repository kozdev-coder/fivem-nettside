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
          Offisielt regelverk for EXIT RP – 16+
        </p>

        {/* Content */}
        <div className="mt-14 space-y-10">
          <section className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 backdrop-blur-xl">
            <h2 className="text-2xl font-semibold text-blue-400">Innledning</h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              Den viktigste regelen på EXIT RP er sunn fornuft. Vi forventer moden
              spillestil og realistisk rollespill. Staff har alltid siste ord ved
              tolkning av regler.
            </p>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 backdrop-blur-xl">
            <h2 className="text-2xl font-semibold text-blue-400">Grunnleggende regler</h2>
            <ul className="mt-5 space-y-2 text-white/70 list-disc pl-5">
              <li>16 års aldersgrense (ingen unntak)</li>
              <li>Fungerende mikrofon er påkrevd</li>
              <li>Hold deg i karakter til enhver tid</li>
              <li>Vis respekt IK og UAK</li>
              <li>Twitch TOS skal følges</li>
              <li>Ikke spill på selvmord, overgrep eller alvorlig sykdom</li>
              <li>RP er samarbeid – spill fair</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 backdrop-blur-xl">
            <h2 className="text-2xl font-semibold text-blue-400">Krav til karakter</h2>
            <ul className="mt-5 space-y-2 text-white/70 list-disc pl-5">
              <li>Realistisk navn (ingen kjendiser/ordspill)</li>
              <li>Karakter må være 16+</li>
              <li>Ingen hybridkarakterer</li>
              <li>Karakterutvikling skal være troverdig</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 backdrop-blur-xl">
            <h2 className="text-2xl font-semibold text-blue-400">RP-regler</h2>
            <ul className="mt-5 space-y-2 text-white/70 list-disc pl-5">
              <li>Ingen RDM/VDM</li>
              <li>Ingen metagaming</li>
              <li>Ingen powergaming</li>
              <li>Combat logging er forbudt</li>
              <li>Bug-misbruk gir straff</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 backdrop-blur-xl">
            <h2 className="text-2xl font-semibold text-blue-400">New Life Rule</h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              Ved død husker du lite av hendelsen. Du kan ikke returnere til scenario
              før 1 time.
            </p>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 backdrop-blur-xl">
            <h2 className="text-2xl font-semibold text-blue-400">Kriminelle handlinger</h2>
            <ul className="mt-5 space-y-2 text-white/70 list-disc pl-5">
              <li>Maks 8 personer per krim-handling</li>
              <li>Frivillige gisler er ikke lov</li>
              <li>Motorsykkel ved ran er ikke lov</li>
              <li>Pocketwipe er forbudt</li>
              <li>Looting skal skje med skjønn</li>
            </ul>
          </section>
        </div>

        <footer className="mt-20 text-center text-white/40 space-y-2">
          <p>© {new Date().getFullYear()} EXIT RP</p>
          <p className="text-white/30 text-sm">Nettside laget av Fossland WebHost</p>
        </footer>
      </div>
    </main>
  );
}
