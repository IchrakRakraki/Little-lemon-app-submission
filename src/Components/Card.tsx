import styled from "styled-components";
import { media } from "../styles/Theme";

const MenuItem = styled.article`
  width: 100%;
  border-radius: ${({ theme }) => `${theme.borderRadius.md} ${theme.borderRadius.md} 0 0`};
  background-color: ${({ theme }) => theme.colors.highlight.light};
`;
const Thumbnail = styled.img`
  border-radius: ${({ theme }) => `${theme.borderRadius.md} ${theme.borderRadius.md} 0 0`};
  width: 100%;
  height: 180px;
  object-fit: cover;
`;
const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CardContent = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  display: grid;
  grid-template-rows: 1.5rem 8rem 1fr;
  ${media.md`
  grid-template-rows: 1.5rem 10rem 1fr;
  `}
`;
const DeliveryButton = styled.button`
  background-color: transparent;
  border: none;
  text-decoration: underline;
  font-weight: bolder;
  text-align: start;
  padding: 0.5rem 0;
`;

type CardProps = {
  title: string;
  price: number;
  description: string;
  imgSrc: string;
  altText: string;
};

const Card: React.FC<CardProps> = ({ title, price, description, imgSrc, altText }) => {
  return (
    <MenuItem>
      <Thumbnail src={imgSrc} alt={altText} />
      <CardContent>
        <CardHeader>
          <h3>{title}</h3>
          <span>${price}</span>
        </CardHeader>
        <p>{description}</p>
        <DeliveryButton>Order a delivery + icon</DeliveryButton>
      </CardContent>
    </MenuItem>
  );
};

export default Card;
