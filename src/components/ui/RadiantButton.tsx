import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  haloColor?: string;
  hoverAlpha?: number;   // intensité survol
  hoverRadius?: number;  // rayon survol
  burstAlpha?: number;   // intensité "burst"
  burstRadius?: number;  // rayon "plein écran"
};

function emitSet(detail: {x:number;y:number;color?:string;alpha?:number;radius?:number;}){
  window.dispatchEvent(new CustomEvent("halo:set", { detail }));
}
function emitOff(){ window.dispatchEvent(new CustomEvent("halo:off")); }

export default function RadiantButton({
  haloColor = "#8b5cf6",
  hoverAlpha = 0.45,
  hoverRadius = 900,
  burstAlpha = 0.65,
  burstRadius = 1600,
  onMouseEnter, onMouseMove, onMouseLeave,
  onMouseDown, onMouseUp,
  onTouchStart, onTouchEnd,
  className, ...rest
}: Props){
  const push = (e: {clientX:number; clientY:number}, alpha:number, radius:number) =>
    emitSet({ x: e.clientX, y: e.clientY, color: haloColor, alpha, radius });

  const handleEnter: React.MouseEventHandler<HTMLButtonElement> = (e) => { push(e, hoverAlpha, hoverRadius); onMouseEnter?.(e); };
  const handleMove:  React.MouseEventHandler<HTMLButtonElement> = (e) => { push(e, hoverAlpha, hoverRadius); onMouseMove?.(e); };
  const handleLeave: React.MouseEventHandler<HTMLButtonElement> = (e) => { emitOff(); onMouseLeave?.(e); };
  const handleDown:  React.MouseEventHandler<HTMLButtonElement> = (e) => { push(e, burstAlpha, burstRadius); onMouseDown?.(e); };
  const handleUp:    React.MouseEventHandler<HTMLButtonElement> = (e) => { push(e, hoverAlpha, hoverRadius); onMouseUp?.(e); };

  const handleTouchStart: React.TouchEventHandler<HTMLButtonElement> = (e) => {
    const t = e.touches[0]; emitSet({ x:t.clientX, y:t.clientY, color:haloColor, alpha:burstAlpha, radius:burstRadius }); onTouchStart?.(e);
  };
  const handleTouchEnd: React.TouchEventHandler<HTMLButtonElement> = (e) => { emitOff(); onTouchEnd?.(e); };

  return (
    <button
      {...rest}
      className={className}
      onMouseEnter={handleEnter}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onMouseDown={handleDown}
      onMouseUp={handleUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{ position:"relative", overflow:"hidden", transition:"transform .15s ease", willChange:"transform", ...(rest.style||{}) }}
    />
  );
}
