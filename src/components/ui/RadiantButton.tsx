import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  haloColor?: string;
  maxAlpha?: number;
};

export default function RadiantButton({
  haloColor = "#8b5cf6",
  maxAlpha = 0.45,
  onMouseEnter,
  onMouseLeave,
  onMouseMove,
  onTouchStart,
  onTouchEnd,
  className,
  ...rest
}: Props) {
  const set = (k: string, v: string) =>
    document.documentElement.style.setProperty(k, v);

  const fadeIn = () => { set("--halo-color", haloColor); set("--halo-alpha", String(maxAlpha)); };
  const fadeOut = () => { set("--halo-alpha", "0"); };
  const follow = (x: number, y: number) => { set("--halo-x", `${x}px`); set("--halo-y", `${y}px`); };

  const handleEnter: React.MouseEventHandler<HTMLButtonElement> = (e) => { follow(e.clientX, e.clientY); fadeIn(); onMouseEnter?.(e); };
  const handleMove: React.MouseEventHandler<HTMLButtonElement> = (e) => { follow(e.clientX, e.clientY); onMouseMove?.(e); };
  const handleLeave: React.MouseEventHandler<HTMLButtonElement> = (e) => { fadeOut(); onMouseLeave?.(e); };

  const handleTouchStart: React.TouchEventHandler<HTMLButtonElement> = (e) => {
    const t = e.touches[0]; follow(t.clientX, t.clientY); fadeIn(); onTouchStart?.(e);
  };
  const handleTouchEnd: React.TouchEventHandler<HTMLButtonElement> = (e) => { fadeOut(); onTouchEnd?.(e); };

  return (
    <button
      {...rest}
      onMouseEnter={handleEnter}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className={className}
      style={{ position: "relative", overflow: "hidden", transition: "transform .15s ease", willChange: "transform", ...(rest.style||{}) }}
    />
  );
}
