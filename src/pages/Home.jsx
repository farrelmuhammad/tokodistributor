import React from "react";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Content />
      <Footer />
    </>
  );
};

export default Home;
