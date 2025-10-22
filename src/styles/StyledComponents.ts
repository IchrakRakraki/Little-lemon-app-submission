import styled from "styled-components";
import { media } from "./Theme";

export const ColumnGrid = styled.div`
  margin: 0 20px;
  ${media.sm`
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    align-items: center;
    `}
  ${media.md`
    grid-template-columns: repeat(12, 1fr);
    margin: 0 70px;
    `}
`;

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.color.error};
  font-size: ${({ theme }) => theme.fontSize.xs};
  flex-basis: 100%;
`;
