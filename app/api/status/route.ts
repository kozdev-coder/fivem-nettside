export const runtime = "nodejs";

export async function GET() {
  try {
    // HER setter du server IP senere
    const res = await fetch("http://DIN-IP:30120/info.json");

    if (!res.ok) {
      return Response.json({ online: false });
    }

    const data = await res.json();

    return Response.json({
      online: true,
      players: data.players || 0,
      maxPlayers: data.sv_maxclients || 64,
    });
  } catch {
    return Response.json({ online: false });
  }
}
