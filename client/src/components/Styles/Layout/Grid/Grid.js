// Grid.js
import React from 'react';
import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  gap: ${(props) => props.gap || '20px'};
  background: ${(props) => props.background};
  width: 80%;

  margin: auto;
  padding: ${({ padding }) => padding};
  @media (max-width: 768px) {
    /* For small devices, set 2 columns */
    grid-template-columns: repeat(2, ${(props) => props.itemWidth});
  }

  @media (max-width: 576px) {
    /* For extra small devices, set 1 column */
    grid-template-columns: ${(props) => props.itemWidth};
  }
`;

const Grid = ({ columns, gap, children, background, padding }) => {
  return (
    <GridContainer
      columns={columns}
      gap={gap}
      background={background}
      padding={padding}
    >
      {children}
    </GridContainer>
  );
};

export default Grid;
