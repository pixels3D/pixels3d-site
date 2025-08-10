import React from "react";
import { Link, NavLink } from "react-router-dom";
export default function Navbar(){
  const link = ({isActive}:{isActive:boolean}) => ({opacity:isActive?1:.8});
  return (
    <header style={{position:"sticky",top:0,zIndex:40,backdropFilter:"blur(8px)",background:"rgba(7,7,17,.35)", borderBottom:"1px solid rgba(255,255,255,.06)"}}>
      <nav className="container" style={{display:"flex",alignItems:"center",gap:24, padding:"14px 24px"}}>
        <Link to="/" style={{fontWeight:800,letterSpacing:.3}}>Pixels<span style={{color:"#7c3aed"}}>3D</span></Link>
        <div style={{display:"flex",gap:18}}>
          <NavLink to="/work" style={link}>Travaux</NavLink>
          <NavLink to="/services" style={link}>Services</NavLink>
          <NavLink to="/about" style={link}>Studio</NavLink>
          <NavLink to="/contact" style={link}>Contact</NavLink>
        </div>
      </nav>
    </header>
  )
}
