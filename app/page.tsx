"use client";

import { useEffect, useState, useRef } from "react";

export default function Home() {
  const [status, setStatus] = useState("Sjekker status...");
  const [loading, setLoading] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const loadStatus = () => {
      fetch("/api/status")
        .then((res) => res.json())
        .then((data) => {
          if (data.online) {
            const players = data.players ?? "?";
            const maxPlayers = data.maxPlayers ?? "?";
            setStatus(`🟢 Online – ${players}/${maxPlayers}`);
          } else {
            setStatus("🔴 Offline");
          }
        })
        .catch(() => setStatus("🔴 Offline"));
    };

    loadStatus();
    const interval = setInterval(loadStatus, 30000);

    if (audioRef.current) {
      audioRef.current.volume = 0.4;
      audioRef.current.play().catch(() => {});
    }

    const timeout = setTimeout(() => setLoading(false), 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  // LOADING SCREEN
  if (loading) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden">
        <audio ref={audioRef} src="/radio.mp3" />

        <div className="absolute w-[500px] h-[500px] bg-blue-600/20 blur-3xl rounded-full animate-pulse" />

        <h1 className="text-7xl font-bold tracking-widest drop-shadow-[0_0_60px_rgba(59,130,246,1)] animate-pulse">
          EXIT RP
        </h1>

        <p className="mt-6 text-white/40 animate-pulse">
          Kobler til byen...
        </p>

        <div className="mt-10 w-56 h-1 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-blue-500 animate-loading" />
        </div>
      </div>
    );
  }

  return (
    <main className="relative min-h-screen text-white overflow-hidden bg-black">
      {/* BG */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 scale-125"
        style={{ backgroundImage: "url(/wp8012934.jpg)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-black/80 to-black" />

      <div className="relative mx-auto max-w-6xl px-6 py-20">
        {/* NAVBAR */}
        <header className="sticky top-4 z-50 flex items-center justify-between backdrop-blur-xl bg-black/40 px-6 py-4 rounded-2xl border border-white/10">
          <div className="tracking-[0.3em] text-white/70 text-sm">
            EXIT RP
          </div>

          <a
            href="https://discord.gg/z9JU9QUDZw"
            target="_blank"
            className="bg-blue-600 px-5 py-2 rounded-xl hover:bg-blue-700 transition"
          >
            Discord
          </a>
        </header>

        {/* HERO */}
        <section className="mt-28 text-center">
          <h1 className="text-7xl font-bold drop-shadow-[0_0_40px_rgba(59,130,246,1)]">
            EXIT RP
          </h1>

          <p className="mt-4 text-blue-400 font-semibold text-lg">
            {status}
          </p>

          <p className="mt-6 text-white/60 max-w-xl mx-auto">
            Seriøst norsk FiveM-rollespill med fokus på kvalitet,
            stabilitet og ekte historier.
          </p>

          <div className="mt-12 flex gap-4 justify-center flex-wrap">
            <a
              href="https://discord.gg/z9JU9QUDZw"
              target="_blank"
              className="bg-blue-600 px-8 py-4 rounded-xl hover:bg-blue-700 transition"
            >
              Søk Whitelist
            </a>

            <a
              href="https://cfx.re/join/vg59ee"
              className="bg-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition shadow-[0_0_25px_rgba(34,197,94,0.6)]"
            >
              Spill nå
            </a>

            <a
              href="/regler"
              className="border border-white/20 px-8 py-4 rounded-xl hover:bg-white/10 transition"
            >
              Les Regler
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-32 text-center text-white/40 space-y-2">
          <p>© {new Date().getFullYear()} EXIT RP</p>
          <p className="text-white/30 text-sm">
            Nettside laget av Fossland WebHost
          </p>
        </footer>
      </div>
    </main>
  );
}
