import type { MouseEvent, FC } from "react";
import styled from "styled-components";

type ButtonProps = {
  buttonText: string;
  type?: "button" | "submit" | "reset";
  // eslint-disable-next-line no-unused-vars
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
};

const Button = styled.button<{ type?: string }>`
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.color.primary.light};
  border: none;
  color: ${({ theme }) => theme.color.highlight.dark};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontSize.sm};
  width: auto;
  height: auto;
`;

const CTAButton: FC<ButtonProps> = ({ buttonText, type = "button", onClick }) => {
  return (
    <Button type={type} onClick={onClick}>
      {buttonText}
    </Button>
  );
};

export default CTAButton;
