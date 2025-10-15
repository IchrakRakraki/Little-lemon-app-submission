import styled from "styled-components";
import LargeLogo from "../assets/LargeLogo.png";
import { media } from "../styles/Theme";
import { ColumnGrid } from "../styles/StyledComponents";

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
const FooterCategory = styled.div`
  margin-top: 1rem;
  ${media.md`
    justify-self: end;
  `}
`;
const Footer = () => {
  return (
    <ColumnGrid>
      <CustomFooter>
        <img src={LargeLogo} alt="Little Lemon restaurant logo" />
        <FooterCategory>
          <h3>Doormat Navigation</h3>
          <ul>
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
          </ul>
        </FooterCategory>
        <FooterCategory>
          <h3>Contact</h3>
          <ul>
            <li>
              <a href="#google-maps">Adress</a>
            </li>
            <li>
              <a href="#call">Phone Number</a>
            </li>
            <li>
              <a href="#email">Email</a>
            </li>
          </ul>
        </FooterCategory>
        <FooterCategory>
          <h3>Social Media Links</h3>
          <ul>
            <li>
              <a href="#google-maps">Tiktok</a>
            </li>
            <li>
              <a href="#call">Instagram</a>
            </li>
            <li>
              <a href="#email">Facebook</a>
            </li>
          </ul>
        </FooterCategory>
      </CustomFooter>
    </ColumnGrid>
  );
};
export default Footer;
