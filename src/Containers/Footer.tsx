import styled from "styled-components";
import LargeLogo from "../assets/LargeLogo.png";
import { media } from "../styles/Theme";
import { ColumnGrid } from "../styles/StyledComponents";
const Background = styled.div`
  background-color: ${({ theme }) => theme.color.highlight.light};
`;
const CustomFooter = styled.footer`
  grid-column: 1/-1;
  ${media.sm`
        display: grid;
        width: 100%;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        grid-gap: 20px;
    `}
  ${media.md`
        grid-template-columns: repeat(4, minmax(0, 1fr));
    `}
    ${media.lg`
    grid-column: 2/-2;
  `}
  ${media.xl`
    grid-column: 3/-3;
  `}
`;

const Title = styled.h3`
  font-family: ${({ theme }) => theme.font.primary};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.color.primary.dark};
  padding-bottom: ${({ theme }) => theme.spacing.md};
`;
const FooterCategory = styled.div`
  margin-top: 1rem;
  ${media.md`
    justify-self: end;
  `}
`;
const NavLink = styled.li`
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  padding: ${({ theme }) => theme.spacing.sm} 0;
`;
const Footer = () => {
  return (
    <Background>
      <ColumnGrid>
        <CustomFooter>
          <img src={LargeLogo} alt="Little Lemon restaurant logo" />
          <FooterCategory>
            <Title>Doormat Navigation</Title>
            <ul>
              <NavLink>
                <a href="#home">Home</a>
              </NavLink>
              <NavLink>
                <a href="#about">About</a>
              </NavLink>
              <NavLink>
                <a href="#menu">Menu</a>
              </NavLink>
              <NavLink>
                <a href="#reservations">Reservations</a>
              </NavLink>
              <NavLink>
                <a href="#order">Order Online</a>
              </NavLink>
              <NavLink>
                <a href="#login">Login</a>
              </NavLink>
            </ul>
          </FooterCategory>
          <FooterCategory>
            <Title>Contact</Title>
            <ul>
              <NavLink>
                <a href="#google-maps">Adress</a>
              </NavLink>
              <NavLink>
                <a href="#call">Phone Number</a>
              </NavLink>
              <NavLink>
                <a href="#email">Email</a>
              </NavLink>
            </ul>
          </FooterCategory>
          <FooterCategory>
            <Title>Social Media Links</Title>
            <ul>
              <NavLink>
                <a href="#google-maps">Tiktok</a>
              </NavLink>
              <NavLink>
                <a href="#call">Instagram</a>
              </NavLink>
              <NavLink>
                <a href="#email">Facebook</a>
              </NavLink>
            </ul>
          </FooterCategory>
        </CustomFooter>
      </ColumnGrid>
    </Background>
  );
};
export default Footer;
