import React from 'react';
import styled from 'styled-components';
import { basic } from '../Styles/theme';

const StyledButton = styled.button`
  background: ${basic.primary.default};
  color: #fff;
  font-weight: 400;
  padding: 0.4rem 0.9rem;
  border-radius: 0.3rem;
  border: none;
  outline: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  letter-spacing: 0.8px;

  &:hover {
    opacity: 0.9;
  }
`;

const Index = ({ text, loading, className, onClick }) => {
  return (
    <StyledButton className={className} type="submit" onClick={onClick}>
      {loading ? 'Loading...' : text}
    </StyledButton>
  );
};

export default Index;
