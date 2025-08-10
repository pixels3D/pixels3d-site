import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

type Props = React.PropsWithChildren<{ className?: string }>;

export default function GlowCard({ className, children }: Props) {
  return (
    <motion.div
      initial={{ y: 8, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: .5, ease: "easeOut" }}
      className={clsx("glow-card", className)}
    >
      {children}
    </motion.div>
  );
}
