import React from "react";

// Écoute des CustomEvents "halo:set" et "halo:off" pour piloter le halo.
// Inertie lissée (raf) + variables CSS globales (--halo-x/--halo-y/--halo-alpha/--halo-color/--halo-radius)
export default function HoverBloom(){
  const state = React.useRef({
    curX: -999, curY: -999, curAlpha: 0, curRadius: 500,
    tx: -999, ty: -999, ta: 0, tr: 500, color: "#8b5cf6",
    raf: 0
  });

  React.useEffect(() => {
    const s = state.current;
    const setVars = () => {
      const root = document.documentElement.style;
      root.setProperty("--halo-x", `${s.curX}px`);
      root.setProperty("--halo-y", `${s.curY}px`);
      root.setProperty("--halo-alpha", `${s.curAlpha}`);
      root.setProperty("--halo-radius", `${s.curRadius}px`);
      root.setProperty("--halo-color", s.color);
    };

    const lerp = (a:number,b:number,t:number)=> a+(b-a)*t;

    const tick = () => {
      const kPos = 0.12;     // inertie position
      const kAmp = 0.18;     // inertie alpha
      const kRad = 0.15;     // inertie rayon
      s.curX = lerp(s.curX, s.tx, kPos);
      s.curY = lerp(s.curY, s.ty, kPos);
      s.curAlpha = lerp(s.curAlpha, s.ta, kAmp);
      s.curRadius = lerp(s.curRadius, s.tr, kRad);
      setVars();
      s.raf = requestAnimationFrame(tick);
    };
    s.raf = requestAnimationFrame(tick);

    const onSet = (e: Event) => {
      const ev = e as CustomEvent<{x:number;y:number;color?:string;alpha?:number;radius?:number;}>;
      s.tx = ev.detail.x; s.ty = ev.detail.y;
      if (ev.detail.color) s.color = ev.detail.color!;
      if (ev.detail.alpha !== undefined) s.ta = ev.detail.alpha!;
      if (ev.detail.radius !== undefined) s.tr = ev.detail.radius!;
    };
    const onOff = () => { s.ta = 0; s.tr = Math.max(s.tr, 500); };

    window.addEventListener("halo:set", onSet as EventListener);
    window.addEventListener("halo:off", onOff);

    return () => {
      cancelAnimationFrame(s.raf);
      window.removeEventListener("halo:set", onSet as EventListener);
      window.removeEventListener("halo:off", onOff);
    };
  }, []);

  return (
    <div
      aria-hidden
      style={{
        position:"fixed", inset:0, pointerEvents:"none", zIndex:2,
        // 2 couches: wash large + cœur intense, contrôlées par variables
        background: `
          radial-gradient(
            var(--halo-radius, 600px) var(--halo-radius, 600px)
            at var(--halo-x, -999px) var(--halo-y, -999px),
            color-mix(in oklab, var(--halo-color, #8b5cf6) 85%, transparent)
            calc(var(--halo-alpha, 0) * 100%),
            transparent 70%
          ),
          radial-gradient(
            calc(var(--halo-radius, 600px) * 0.45) calc(var(--halo-radius, 600px) * 0.45)
            at var(--halo-x, -999px) var(--halo-y, -999px),
            color-mix(in oklab, var(--halo-color, #8b5cf6) 98%, white 2%)
            calc(var(--halo-alpha, 0) * 100%),
            transparent 60%
          )
        `,
        mixBlendMode:"screen",
        transition:"opacity .25s ease"
      }}
    />
  );
}
