import styled from "styled-components";
import Rating from "./Rating";

const Testimonial = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.md};
  box-shadow: ${({ theme }) => theme.boxShadow.img};
`;
const CardHeader = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`;
const Avatar = styled.img`
  border-radius: 50%;
  height: 32px;
  width: 32px;
  object-fit: cover;
`;

const UserName = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  font-weight: lighter;
  color: #6e6f6e;
`;

type TestimonialCardProps = {
  rating: number;
  avatar: string;
  fullName: string;
  userName: string;
  review: string;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  rating,
  avatar,
  fullName,
  userName,
  review,
}) => {
  return (
    <Testimonial>
      <Rating starsCount={rating} />
      <CardHeader>
        <Avatar className="avatar" src={avatar} alt={`Avatar of ${fullName}`} />
        <div>
          <h3>{fullName}</h3>
          <UserName>{userName}</UserName>
        </div>
      </CardHeader>

      <p>{review}</p>
    </Testimonial>
  );
};

export default TestimonialCard;
