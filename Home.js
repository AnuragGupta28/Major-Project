import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";

const Home = () => {
  return (
    <>
      <Navbar />
      <Main>
        <h1>Welcome to AlumniConnect</h1>
        <p>Connect, contribute, and thrive with your alumni network.</p>
      </Main>
      <Footer />
    </>
  );
};

const Main = styled.main`
  padding: 2rem;
  text-align: center;
`;

export default Home;
