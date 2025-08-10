import React from "react";

export default function App(){
  return (
    <main className="container">
      <section className="hero">
        <div style={{maxWidth:680}}>
          <span className="badge">Pixels 3D</span>
          <h1>Innovate Without Limits</h1>
          <p>Design d’interfaces, expériences XR et métavers immersifs.
             Performances, élégance, précision.</p>
          <div style={{marginTop:18}}>
            <a className="btn" href="#">Get started</a>
          </div>
        </div>
        <div className="card" style={{width:360,minHeight:240}}>
          <h2>Showcase</h2>
          <p>Démo 3D / UI animée en préparation.</p>
        </div>
      </section>
    </main>
  );
}
