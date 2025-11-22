import { NextResponse } from "next/server";

export async function GET() {
  const teamId = process.env.APPLE_TEAM_ID || "TEAM_ID";
  const appId = `${teamId}.com.anonymous.nearbyshops-frontend`;

  const data = {
    applinks: {
      apps: [],
      details: [
        {
          appID: appId,
          paths: ["/whatsapp*"],
        },
      ],
    },
  };

  return NextResponse.json(data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

