import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const AlumniDirectory = () => {
  const [alumni, setAlumni] = useState([]);
  
  useEffect(() => {
    axios.get("/api/alumni").then((response) => {
      setAlumni(response.data);
    });
  }, []);

  return (
    <DirectoryContainer>
      <h1>Alumni Directory</h1>
      <SearchBar type="text" placeholder="Search alumni..." />
      <AlumniList>
        {alumni.map((alum) => (
          <AlumniCard key={alum.id}>
            <h2>{alum.name}</h2>
            <p>{alum.year} | {alum.department}</p>
          </AlumniCard>
        ))}
      </AlumniList>
    </DirectoryContainer>
  );
};

const DirectoryContainer = styled.div`
  padding: 2rem;
`;

const SearchBar = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  width: 100%;
`;

const AlumniList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
`;

const AlumniCard = styled.div`
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  text-align: center;
`;

export default AlumniDirectory;
