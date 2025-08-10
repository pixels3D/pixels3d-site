import React from "react";
import { Link } from "react-router-dom";
export default function Work(){
  const cases = [
    {slug:"metaverse-retail",title:"Metaverse Retail",tag:"WebGL / XR"},
    {slug:"lux-landing-3d",title:"Luxury Landing 3D",tag:"3D Hero"},
    {slug:"data-viz-immersive",title:"Immersive Data viz",tag:"R3F"}
  ];
  return (
    <main className="container">
      <h1>Études de cas</h1>
      <div style={{display:"grid",gap:18,gridTemplateColumns:"repeat(3,1fr)"}}>
        {cases.map(c=>(
          <Link key={c.slug} to={`/work/${c.slug}`} className="card">
            <h3 style={{margin:"0 0 6px"}}>{c.title}</h3>
            <p style={{opacity:.8}}>{c.tag}</p>
          </Link>
        ))}
      </div>
    </main>
  )
}
