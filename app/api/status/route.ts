export const runtime = "nodejs";

export async function GET() {
  try {
    const joinCode = "vg59ee";

    const res = await fetch(
      "https://servers-frontend.fivem.net/api/servers/single/" + joinCode,
      { cache: "no-store" }
    );

    if (!res.ok) {
      return Response.json({ online: false });
    }

    const json = await res.json();
    const data = json.Data;

    return Response.json({
      online: true,
      players: data.clients ?? 0,
      maxPlayers: data.sv_maxclients ?? 64,
    });
  } catch (err) {
    return Response.json({ online: false });
  }
}
