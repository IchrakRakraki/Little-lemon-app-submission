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
  background-color: ${({ theme }) => theme.color.background};
  position: sticky;
  z-index: 2;
  top: 0;
  ${({ theme }) => media.md`
    display: grid;
    width: 100%;
    grid-template-columns: 148px 1fr;
    grid-gap: ${theme.spacing.lg};
    align-items: center;
    padding: 1rem 0;
  `};
  ${media.lg`
    grid-column: 2/-2;
  `}
  ${media.xl`
    grid-column: 3/-3;
  `}
`;

const MobileIcon = styled.img<{ $isLeftIcon?: boolean }>`
  width: 32px;
  margin: ${({ $isLeftIcon }) => ($isLeftIcon ? "12px 12px 12px 0" : "12px 0 12px 12px")};
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

const NavLink = styled.li`
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

const Nav = () => {
  return (
    <ColumnGrid>
      <StyledNav>
        <MobileIcon src={hamburgerIcon} alt="Hamberger menu icon." $isLeftIcon />
        <img src={logo} alt="Little Lemon restautant logo." />
        <MobileIcon src={basketIcon} alt="Basket icon." />
        <NavLinks>
          <NavLink>
            <a href="/">Home</a>
          </NavLink>
          <NavLink>
            <a href="#about">About</a>
          </NavLink>
          <NavLink>
            <a href="#menu">Menu</a>
          </NavLink>
          <NavLink>
            <a href="/booking">Reservations</a>
          </NavLink>
          <NavLink>
            <a href="#order">Order Online</a>
          </NavLink>
          <NavLink>
            <a href="#login">Login</a>
          </NavLink>
        </NavLinks>
      </StyledNav>
    </ColumnGrid>
  );
};
export default Nav;
