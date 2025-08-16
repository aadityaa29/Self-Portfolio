import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";
import { projects } from "@/content/projects";

export const runtime = "edge";

export async function GET(req: NextRequest, { params }: { params: { slug: string } }) {
  const p = projects.find((x) => x.slug === params.slug);
  const title = p?.title ?? "Aditya Pachouri";
  const desc = p?.description ?? "Developer Portfolio";
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #0ea5e9 0%, #9333ea 50%, #111827 100%)",
          color: "white",
          padding: "48px",
        }}
      >
        <div style={{ fontSize: 56, fontWeight: 800 }}>{title}</div>
        <div style={{ fontSize: 28, marginTop: 16, opacity: 0.9 }}>{desc}</div>
        <div style={{ position: "absolute", bottom: 32, right: 48, fontSize: 24 }}>
          adityapachouri.dev
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
