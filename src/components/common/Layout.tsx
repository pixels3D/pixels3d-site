import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BackgroundFX from "../../components/fx/BackgroundFX";

export default function Layout(){
  return (
    <>
      <BackgroundFX />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
