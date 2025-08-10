import React from "react";
import { Link, useNavigate } from "react-router-dom";
import RadiantButton from "./ui/RadiantButton";

export default function HeroPremium(){
  const navigate = useNavigate();
  return (
    <section className="hero hero-premium">
      <div className="hero-left">
        <span className="badge">Pixels 3D</span>
        <h1 className="gradient-title">Innovate <span className="grad">Without Limits</span></h1>
        <p>XR temps réel, sites 3D et UI animées. Nous concevons des expériences premium pour marques ambitieuses.</p>
        <div className="cta-row">
          <RadiantButton className="btn" haloColor="#8b5cf6" maxAlpha={0.5} onClick={()=>navigate("/work")}>
            Voir nos travaux
          </RadiantButton>
          <Link className="btn btn-ghost" to="/contact">Démarrer un projet</Link>
        </div>
      </div>
      <div className="card" style={{height:300, display:"grid", placeItems:"center"}}>
        Aperçu 3D (branché plus tard)
      </div>
    </section>
  );
}
