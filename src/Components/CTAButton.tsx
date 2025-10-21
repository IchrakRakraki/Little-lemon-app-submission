import type { MouseEvent, FC } from "react";
import styled from "styled-components";

type ButtonProps = {
  buttonText: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
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
  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.color.highlight.light};
    color: ${({ theme }) => theme.color.mutedText};
  }
`;

const CTAButton: FC<ButtonProps> = ({ buttonText, type = "button", disabled, onClick }) => {
  return (
    <Button type={type} onClick={onClick} disabled={disabled}>
      {buttonText}
    </Button>
  );
};

export default CTAButton;
