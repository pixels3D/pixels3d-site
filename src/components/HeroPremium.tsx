import React, { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Hero3D = lazy(() => import("./3d/Hero3D"));

export default function HeroPremium(){
  return (
    <section className="hero hero-premium">
      <div className="hero-left">
        <motion.span
          className="badge"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: .4 }}
        >
          Pixels 3D
        </motion.span>

        <motion.h1
          className="gradient-title"
          initial={{ y: 14, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay:.05, duration: .6 }}
        >
          Innovate <span className="grad">Without Limits</span>
        </motion.h1>

        <motion.p
          initial={{ y: 14, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay:.12, duration: .6 }}
        >
          XR temps réel, sites 3D et UI animées. Nous concevons des expériences premium
          pour marques ambitieuses, à la croisée du design et de l’ingénierie.
        </motion.p>

        <motion.div
          className="cta-row"
          initial={{ y: 14, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay:.18, duration: .6 }}
        >
          <Link className="btn" to="/work">Voir nos travaux</Link>
          <Link className="btn btn-ghost" to="/contact">Démarrer un projet</Link>
        </motion.div>
      </div>

      <div className="hero-right">
        <Suspense fallback={<div className="card skeleton" />}>
          <Hero3D />
        </Suspense>
      </div>
    </section>
  );
}
