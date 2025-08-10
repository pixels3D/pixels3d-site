import React from "react";
import { useMotionValue, useTransform, animate } from "framer-motion";

export default function AnimatedCounter({ to = 1000, suffix = "" }: { to?: number; suffix?: string }) {
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, v => Math.floor(v).toLocaleString("fr-FR") + suffix);

  React.useEffect(() => {
    const controls = animate(mv, to, { duration: 1.6, ease: "easeOut" });
    return () => controls.stop();
  }, [to]);

  return <span>{rounded.get()}</span>;
}
