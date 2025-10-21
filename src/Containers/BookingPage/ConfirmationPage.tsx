import styled from "styled-components";
import { ColumnGrid } from "../../styles/StyledComponents";
import { media } from "../../styles/Theme";
const Container = styled.div`
  ${media.sm`
        grid-column: 1/-1;
      `}
  ${media.lg`
        grid-column: 2/-2;
      `}
      ${media.xl`
        grid-column: 3/-3;
      `}
`;
const ConfirmationPage = () => {
  return (
    <ColumnGrid>
      <Container>
        <h1>Thank you! </h1>
        <p>Your reservation has been successfully booked!</p>
      </Container>
    </ColumnGrid>
  );
};

export default ConfirmationPage;
