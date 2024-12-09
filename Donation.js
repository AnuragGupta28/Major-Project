import React, { useState } from "react";
import styled from "styled-components";

const Donation = () => {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle donation submission
  };

  return (
    <DonationContainer>
      <h1>Make a Donation</h1>
      <form onSubmit={handleSubmit}>
        <label>Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Donate</button>
      </form>
    </DonationContainer>
  );
};

const DonationContainer = styled.div`
  padding: 2rem;
  form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  button {
    background-color: #0073e6;
    color: #fff;
    padding: 0.5rem;
  }
`;

export default Donation;
