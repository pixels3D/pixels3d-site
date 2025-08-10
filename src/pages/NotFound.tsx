import React from "react";
import { Link } from "react-router-dom";
export default function NotFound(){
  return <main className="container"><h1>404</h1><p>Page introuvable.</p><Link to="/">Retour</Link></main>
}
