import React from "react";
import { Link } from "react-router-dom";
export default function Footer(){
  return (
    <footer style={{marginTop:64, borderTop:"1px solid rgba(255,255,255,.06)", background:"rgba(7,7,17,.35)"}}>
      <div className="container" style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:24,padding:"24px"}}>
        <div>
          <div style={{fontWeight:800,marginBottom:8}}>Pixels 3D</div>
          <p style={{opacity:.8,margin:0}}>XR, Web 3D & interfaces premium.</p>
        </div>
        <div>
          <div style={{opacity:.7,marginBottom:8}}>Plateforme</div>
          <ul style={{listStyle:"none",padding:0,margin:0,display:"grid",gap:6}}>
            <li><Link to="/work">Études de cas</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">À propos</Link></li>
          </ul>
        </div>
        <div>
          <div style={{opacity:.7,marginBottom:8}}>Légal</div>
          <ul style={{listStyle:"none",padding:0,margin:0,display:"grid",gap:6}}>
            <li><Link to="/legal">Mentions légales</Link></li>
            <li><a href="mailto:contact@pixels3d.fr">contact@pixels3d.fr</a></li>
          </ul>
        </div>
      </div>
      <div className="container" style={{opacity:.6,padding:"8px 24px 24px"}}>© Pixels3D — {new Date().getFullYear()}</div>
    </footer>
  )
}
