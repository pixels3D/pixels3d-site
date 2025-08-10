import React from "react";
import GlowCard from "./ui/GlowCard";
import AnimatedCounter from "./ui/AnimatedCounter";

export function SectionMetrics(){
  const metrics = [
    { k: "Projets livrés", v: 120, s:"+" },
    { k: "Satisfaction", v: 99, s:"%" },
    { k: "Temps moyen de déploiement", v: 3, s:" j" },
  ];
  return (
    <section className="container" style={{marginTop: 28}}>
      <h2 className="subtle-title">Pixels3D en chiffres</h2>
      <div className="grid3">
        {metrics.map((m,i)=>(
          <GlowCard key={i}>
            <div className="metric">
              <div className="metric-value"><AnimatedCounter to={m.v} suffix={m.s} /></div>
              <div className="metric-key">{m.k}</div>
            </div>
          </GlowCard>
        ))}
      </div>
    </section>
  );
}

export function SectionPartners(){
  const logos = ["partner-1","partner-2","partner-3","partner-4","partner-5","partner-6"];
  return (
    <section className="container" style={{marginTop: 28}}>
      <h2 className="subtle-title">Nos partenaires</h2>
      <div className="partners">
        {logos.map((l,i)=>(
          <div key={i} className="partner">
            {/* Remplacez par /public/partners/*.png si vous avez vos logos */}
            <div className="partner-logo">{l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
