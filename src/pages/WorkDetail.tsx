import React from "react";
import { useParams, Link } from "react-router-dom";
export default function WorkDetail(){
  const { slug } = useParams();
  return (
    <main className="container">
      <Link to="/work" style={{opacity:.8}}>&larr; Retour</Link>
      <h1 style={{marginTop:8, textTransform:"capitalize"}}>{slug?.replaceAll("-"," ")}</h1>
      <div className="card" style={{minHeight:240}}>Visuel / vidéo à intégrer ici.</div>
    </main>
  )
}
