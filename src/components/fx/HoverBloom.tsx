import React from "react";

export default function HoverBloom() {
  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 2,
        transition: "opacity .25s ease",
        background:
          "radial-gradient(420px 420px at var(--halo-x, -999px) var(--halo-y, -999px), color-mix(in oklab, var(--halo-color, #8b5cf6) 75%, transparent) var(--halo-alpha, 0), transparent 60%)",
        opacity: "1",
        mixBlendMode: "screen",
      }}
    />
  );
}
