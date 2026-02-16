export default function Home() {
  return (
    <main className="relative min-h-screen text-white overflow-hidden bg-black">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-35"
        style={{ backgroundImage: "url(/wp8012934.jpg)" }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />

      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <header className="flex items-center justify-between">
          <div className="text-sm tracking-widest text-white/70">
            MIDNIGHT RP
          </div>

          <a
            href="https://discord.gg/"
            className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
          >
            Discord
          </a>
        </header>

        <section className="mt-16">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.25em] text-white/60">
              FiveM • Rollespill • Whitelist
            </p>

            <h1 className="mt-4 text-5xl font-bold">
              Realistisk rollespill.
            </h1>

            <p className="mt-6 text-white/70">
              Jobs, økonomi, gjenger, boligsystem og aktive admins.  
              Bli med i et seriøst RP-miljø.
            </p>

            <div className="mt-10 flex gap-3">
              <a
                href="https://discord.gg/"
                className="rounded-xl bg-white px-6 py-3 font-semibold text-black"
              >
                Bli med på Discord
              </a>

              <a
                href="#regler"
                className="rounded-xl border border-white/15 px-6 py-3"
              >
                Les regler
              </a>
            </div>
          </div>
        </section>

        <section id="regler" className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-xl font-semibold">Regler</h2>
          <ul className="mt-4 space-y-2 text-white/70 text-sm list-disc pl-5">
            <li>Ingen failRP eller powergaming</li>
            <li>Respekter alle spillere</li>
            <li>Bruk /report ved problemer</li>
          </ul>
        </section>

        <footer className="mt-14 text-center text-white/50 text-sm">
          © {new Date().getFullYear()} Midnight RP
        </footer>
      </div>
    </main>
  );
}
