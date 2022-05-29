import styled from '@emotion/styled';
import { Color } from 'styles/colors';

export const StyledButton = styled.button<{
  textColor: Color;
  darkenTextColor: Color;

  backgroundColor: Color;
  darkenBackgroundColor: Color;
  lightenBackgroundColor: Color;

  typography: string;
}>`
  ${(props) => props.typography};
  color: ${(props) => props.textColor};
  background-color: ${(props) => props.backgroundColor};
  ${({ theme }) => theme.effects.shadows.default};
  border-radius: 0.4rem;
  border: none;
  padding: 0.8rem 1.6rem;
  cursor: pointer;

  transition: background-color 0.06s ease-in-out, color 0.06s ease-in-out;

  &:hover {
    background-color: ${(props) => props.lightenBackgroundColor};
  }

  &:active {
    background-color: ${(props) => props.darkenBackgroundColor};
    color: ${(props) => props.darkenTextColor};
  }
`;
