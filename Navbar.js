import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <Logo>AlumniConnect</Logo>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/directory">Directory</Link>
        <Link to="/donation">Donation</Link>
        <Link to="/events">Events</Link>
        <Link to="/jobs">Jobs</Link>
      </NavLinks>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: #0073e6;
`;

const Logo = styled.h1`
  color: #fff;
  font-size: 1.5rem;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
  a {
    color: #fff;
    text-decoration: none;
  }
`;

export default Navbar;
