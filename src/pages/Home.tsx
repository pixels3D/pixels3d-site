import React, { Suspense, lazy } from "react";
import { Link } from "react-router-dom";

const Hero3D = lazy(() => import("../components/3d/Hero3D"));

export default function Home(){
  return (
    <main className="container">
      <section className="hero">
        <div style={{maxWidth:720}}>
          <span className="badge">Pixels 3D</span>
          <h1>Innovate Without Limits</h1>
          <p>XR temps réel, sites 3D et UI animées. Nous concevons des expériences premium pour marques ambitieuses.</p>
          <div style={{marginTop:18,display:"flex",gap:12}}>
            <Link className="btn" to="/work">Voir nos travaux</Link>
            <Link className="btn" style={{background:"rgba(255,255,255,.06)",color:"white"}} to="/contact">Démarrer un projet</Link>
          </div>
        </div>
        <div style={{width:420, minWidth:320}}>
          <Suspense fallback={<div className="card" style={{width:"100%",height:420,display:"grid",placeItems:"center"}}>Chargement 3D…</div>}>
            <Hero3D />
          </Suspense>
        </div>
      </section>

      <section style={{marginTop:48, display:"grid",gap:18, gridTemplateColumns:"repeat(3,1fr)"}}>
        {[
          {t:"Immersion 3D",d:"Démos interactives temps réel."},
          {t:"Design Système",d:"Composants cohérents et scalables."},
          {t:"Performance",d:"Chargements rapides, SEO propre."}
        ].map((c,i)=>(
          <div key={i} className="card">
            <h3 style={{margin:"0 0 6px"}}>{c.t}</h3>
            <p style={{margin:0,opacity:.85}}>{c.d}</p>
          </div>
        ))}
      </section>
    </main>
  )
}
