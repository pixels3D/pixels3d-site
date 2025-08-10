import React, { useState } from "react";
import { createLead } from "../lib/supabase";

export default function Contact(){
  const [loading,setLoading] = useState(false);
  const [ok,setOk] = useState(false);
  async function onSubmit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name")||""),
      email: String(fd.get("email")||""),
      budget: String(fd.get("budget")||""),
      message: String(fd.get("message")||""),
    };
    try{
      setLoading(true);
      await createLead(payload);
      setOk(true);
      (e.target as HTMLFormElement).reset();
    }catch(err){
      alert("Erreur d’envoi. Vérifie les variables d’env Netlify.");
      console.error(err);
    }finally{ setLoading(false); }
  }
  return (
    <main className="container">
      <h1>Contact</h1>
      {ok && <div className="card" style={{borderColor:"rgba(34,211,238,.5)"}}>Merci ! Nous revenons vers vous rapidement.</div>}
      <form onSubmit={onSubmit} className="card" style={{display:"grid",gap:12,maxWidth:680}}>
        <label>Nom<input name="name" required style={{width:"100%"}}/></label>
        <label>Email<input type="email" name="email" required style={{width:"100%"}}/></label>
        <label>Budget<input name="budget" placeholder="ex: 5-10k €" style={{width:"100%"}}/></label>
        <label>Message<textarea name="message" required rows={5} style={{width:"100%"}}/></label>
        <button className="btn" disabled={loading}>{loading?"Envoi…":"Envoyer"}</button>
      </form>
    </main>
  )
}
