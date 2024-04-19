import React from 'react';
import styled from 'styled-components';

// Styled components
const Nav = styled.nav`
  background-color: black;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  //   position: sticky;
  width: 100%;
  //   top: 0;
  //   left: 0;
`;

const Container = styled.div`
  max-width: 1280px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 1rem;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #fff;
`;

const LogoImage = styled.img`
  height: 2rem;
`;

const Title = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
  white-space: nowrap;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const Button = styled.button`
  background-color: ${(props) =>
    props.primary ? props.theme.primaryColor : 'transparent'};
  color: ${(props) => (props.primary ? '#fff' : props.theme.textColor)};
  border: ${(props) =>
    props.primary ? 'none' : `1px solid ${props.theme.borderColor}`};
  border-radius: 0.375rem;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.primary ? props.theme.primaryHoverColor : props.theme.hoverColor};
  }
`;

const Menu = styled.ul`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    margin-top: 1rem;
    list-style: none;
  }
`;

const MenuItem = styled.li`
  margin-right: 1rem;
`;

const NavLink = styled.a`
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  transition: color 0.3s ease, background-color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.hoverColor};
    background-color: ${(props) => props.theme.hoverBackgroundColor};
  }

  &.active {
    background-color: ${(props) => props.theme.activeBackgroundColor};
    color: ${(props) => props.theme.activeTextColor};
  }
`;

// Theme
const theme = {
  navBackground: '#fff',
  borderColor: '#e2e8f0',
  logoColor: '#1a202c',
  textColor: '#4a5568',
  hoverColor: '#cbd5e0',
  primaryColor: '#1e40af',
  primaryHoverColor: '#1a365d',
  hoverBackgroundColor: '#edf2f7',
  activeTextColor: '#fff',
  activeBackgroundColor: '#4a5568',
};

const Navbar = () => {
  return (
    <Nav>
      <Container>
        <Logo href="https://flowbite.com/">
          <LogoImage
            src="https://flowbite.com/docs/images/logo.svg"
            alt="Flowbite Logo"
          />
          <Title>Flowbite</Title>
        </Logo>
        <ButtonContainer>
          <Button primary>Get started</Button>
          <button type="button">
            <svg
              width="17"
              height="14"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </ButtonContainer>
        <Menu>
          <MenuItem>
            <NavLink href="#" className="active">
              Home
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink href="#">About</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink href="#">Services</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink href="#">Contact</NavLink>
          </MenuItem>
        </Menu>
      </Container>
    </Nav>
  );
};

export default Navbar;
