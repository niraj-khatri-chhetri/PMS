import React from 'react';
import styled from 'styled-components';
import { basic } from '../Styles/theme';

const StyledButton = styled.button`
  background: ${basic.primary.default};
  color: #fff;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  outline: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  letter-spacing: 0.8px;

  &:hover {
    opacity: 0.9;
  }
`;

const Index = ({ text, loading, className }) => {
  return (
    <StyledButton className={className} type="submit">
      {loading ? 'Loading...' : text}
    </StyledButton>
  );
};

export default Index;
