import styled from "styled-components";

type ButtonProps = {
  buttonText: string;
  type?: string;
  onClick?: () => {};
};

const Button = styled.button<{ type?: string }>`
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.color.primary.light};
  border: none;
  cursor: pointer;
`;

const BtnText = styled.span`
  color: ${({ theme }) => theme.color.highlight.dark};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

const CTAButton: React.FC<ButtonProps> = ({ buttonText, type, onClick }) => {
  return (
    <Button type={type} onClick={onClick}>
      <BtnText>{buttonText}</BtnText>
    </Button>
  );
};

export default CTAButton;
