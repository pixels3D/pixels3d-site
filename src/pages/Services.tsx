import React from "react";
export default function Services(){
  const items = [
    {t:"Sites 3D & WebGL",d:"Showrooms, configurateurs et storytelling immersif."},
    {t:"XR / WebXR",d:"Expériences AR/VR cross-device."},
    {t:"UI/UX Premium",d:"Design système, micro-interactions, accessibilité."},
  ];
  return (
    <main className="container">
      <h1>Services</h1>
      <div style={{display:"grid",gap:18,gridTemplateColumns:"repeat(3,1fr)"}}>
        {items.map((x,i)=>(
          <div key={i} className="card"><h3 style={{marginTop:0}}>{x.t}</h3><p style={{opacity:.9}}>{x.d}</p></div>
        ))}
      </div>
    </main>
  )
}
