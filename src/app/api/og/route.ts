import React from "react";
import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    React.createElement(
      "div",
      {
        style: {
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          background:
            "radial-gradient(1000px 600px at 10% 10%, #0ea5e920, transparent), radial-gradient(800px 400px at 80% 20%, #9333ea20, transparent), #0b0f1a",
          color: "white",
          padding: "64px",
        },
      },
      React.createElement(
        "div",
        { style: { fontSize: 52, fontWeight: 800 } },
        "Aditya Pachouri"
      ),
      React.createElement(
        "div",
        { style: { fontSize: 28, marginTop: 16, opacity: 0.9 } },
        "Full‑stack Developer • Open Source • AI/UX"
      )
    ),
    { width: 1200, height: 630 }
  );
}
