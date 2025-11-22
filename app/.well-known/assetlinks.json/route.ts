import { NextResponse } from "next/server";

export async function GET() {
  const fingerprintsString =
    process.env.ANDROID_SHA256_FINGERPRINTS || "YOUR_SHA256_FINGERPRINT";
  const fingerprints = fingerprintsString
    .split(",")
    .map((fp) => fp.trim())
    .filter((fp) => fp.length > 0);

  const data = [
    {
      relation: ["delegate_permission/common.handle_all_urls"],
      target: {
        namespace: "android_app",
        package_name: "com.anonymous.nearbyshops_frontend",
        sha256_cert_fingerprints: fingerprints,
      },
    },
  ];

  return NextResponse.json(data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

