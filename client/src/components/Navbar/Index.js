import React from 'react';
import styled from 'styled-components';
import { basic, color, theme } from '../Styles/theme';

import { Grid } from '../Styles/Index';
import { Link } from 'react-router-dom';

import StyledButton from '../Button';

const NavWrapper = styled.nav`
  width: 100%;
  height: 4rem;
  background-color: ${color.default.backgroundColor};
  border-bottom: 1px solid ${color.default.borderColor};
  position: sticky;
  top: 0;
  left: 0;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  color: ${color.default.textColor};
`;

const Title = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
  white-space: nowrap;
`;

const LogoImage = styled.img`
  height: 2rem;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 6fr 4fr; /* Adjust column widths as needed */
  height: 100%;
`;

const Menu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
`;

const MenuItem = styled.li`
  margin-right: 1rem;
`;

const NavLink = styled(Link)`
  color: ${color.default.textColor};
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  transition: color 0.3s ease, background-color 0.3s ease;

  &:hover {
    color: ${basic.primary.default};
  }

  &.active {
    background-color: ${theme.activeBackgroundColor};
    color: ${theme.activeBackgroundColor};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 4rem;
`;

const Index = () => {
  return (
    <NavWrapper>
      <Container>
        <Logo href="https://flowbite.com/">
          <LogoImage
            src="https://flowbite.com/docs/images/logo.svg"
            alt="Flowbite Logo"
          />
          <Title>S-door</Title>
        </Logo>

        <Menu>
          <MenuItem>
            <NavLink to="/signup">Signup</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/add-product">Add product</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/products">Products</NavLink>
          </MenuItem>
        </Menu>

        <ButtonContainer>
          <StyledButton className="mr-2" text="Signup" />
          <StyledButton className="mr-2" text="Login" />
        </ButtonContainer>
      </Container>
    </NavWrapper>
  );
};

export default Index;
