import React from "react";
import Dashboard from "../components/dashboard/Dashboard";
import Footer from "../components/Footer";
import FooterMain from "../components/FooterMain";
import Header from "../components/Header";


const Home = () => {
  return (
    <div>
      <Header />
      <Dashboard />
      <FooterMain />
      <Footer/>
    </div>
  );
};

export default Home;
