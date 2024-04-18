import React from 'react';
import styled from 'styled-components';
import { basic } from '../Styles/theme';

const StyledButton = styled.button`
  background: ${basic.primary.default};
  color: ${basic.primary.text};
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  outline: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  // &:hover {
  //   background-color: #2563eb; /* Blue-700 */
  // }
`;

const index = ({ text, isLoading }) => {
  return (
    <div className="flex items-center justify-between">
      <StyledButton
        type="submit"
        // className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        {isLoading ? 'Loading...' : text}
      </StyledButton>
    </div>
  );
};

export default index;
