import React from "react";
import HeroPremium from "../components/HeroPremium";
import { SectionMetrics, SectionPartners } from "../components/Sections";

export default function Home(){
  return (
    <main className="container">
      <HeroPremium />
      <SectionMetrics />
      <SectionPartners />
    </main>
  );
}
