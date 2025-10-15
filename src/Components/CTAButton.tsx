import styled from "styled-components";

type ButtonProps = {
  buttonText: string;
};

const Button = styled.button`
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.primary.light};
  border: none;
  cursor: pointer;
`;

const CTAButton: React.FC<ButtonProps> = ({ buttonText }) => {
  return <Button>{buttonText}</Button>;
};

export default CTAButton;
