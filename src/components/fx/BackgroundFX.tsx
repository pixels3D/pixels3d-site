import React from "react";
import { motion } from "framer-motion";

function Stars() {
  // Canvas super léger d'étoiles
  const ref = React.useRef<HTMLCanvasElement | null>(null);
  React.useEffect(() => {
    const c = ref.current!; const ctx = c.getContext("2d")!;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => { c.width = innerWidth*DPR; c.height = innerHeight*DPR; draw(); };
    const draw = () => {
      ctx.clearRect(0,0,c.width,c.height);
      for (let i=0; i<180; i++){
        const x = Math.random()*c.width, y = Math.random()*c.height;
        const r = Math.random()*1.8;
        ctx.fillStyle = Math.random() > .5 ? "rgba(124,58,237,.55)" : "rgba(34,211,238,.45)";
        ctx.beginPath(); ctx.arc(x,y,r,0,Math.PI*2); ctx.fill();
      }
    };
    resize(); addEventListener("resize", resize);
    return () => removeEventListener("resize", resize);
  }, []);
  return <canvas ref={ref} style={{position:"fixed", inset:0, zIndex:0, opacity:.25, pointerEvents:"none"}}/>;
}

export default function BackgroundFX(){
  return (
    <>
      <Stars />
      <motion.div
        aria-hidden
        initial={{ opacity: .0 }}
        animate={{ opacity: .6 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{
          position:"fixed", inset:0, zIndex:0, pointerEvents:"none",
          background: `
            radial-gradient(900px 600px at 12% 78%, rgba(34,211,238,.18), transparent 60%),
            radial-gradient(1200px 800px at 88% 14%, rgba(124,58,237,.22), transparent 55%)
          `
        }}
      />
    </>
  );
}
