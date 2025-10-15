import logo from "../assets/Logo.svg";
import hamburgerIcon from "../assets/hamburger_menu.svg";
import basketIcon from "../assets/basket.svg";
import styled from "styled-components";
import { media } from "../styles/Theme";
import { ColumnGrid } from "../styles/StyledComponents";

const StyledNav = styled.nav`
  grid-column: 1/-1;
  display: flex;
  width: 100%;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  margin: ${({ theme }) => theme.spacing.sm} 0;
  ${({ theme }) => media.md`
    display: grid;
    width: 100%;
    grid-template-columns: 148px 1fr;
    grid-gap: ${theme.spacing.lg};
    align-items: center;
  `};
  ${media.lg`
    grid-column: 2/-2;
  `}
  ${media.xl`
    grid-column: 3/-3;
  `}
`;

const MobileIcon = styled.img<{ leftIcon?: boolean }>`
  width: 32px;
  margin: ${({ leftIcon }) => (leftIcon ? "12px 12px 12px 0" : "12px 0 12px 12px")};
  ${media.md`
        display: none;
    `};
`;

const NavLinks = styled.ul`
  display: none;

  ${({ theme }) => media.md`
        display: flex;
        justify-content: space-between;
        justify-self: flex-end;
        align-items: center;
        gap: ${theme.spacing.md}
    `}
  ${({ theme }) => media.lg`
        gap: ${theme.spacing.lg}
    `}
`;

const Nav = () => {
  return (
    <ColumnGrid>
      <StyledNav>
        <MobileIcon src={hamburgerIcon} alt="Hamberger menu icon." leftIcon />
        <img src={logo} alt="Little Lemon restautant logo." />
        <MobileIcon src={basketIcon} alt="Hamberger menu icon." />
        <NavLinks>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#reservations">Reservations</a>
          </li>
          <li>
            <a href="#order">Order Online</a>
          </li>
          <li>
            <a href="#login">Login</a>
          </li>
        </NavLinks>
      </StyledNav>
    </ColumnGrid>
  );
};
export default Nav;
