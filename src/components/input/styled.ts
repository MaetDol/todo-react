import styled from '@emotion/styled';

export const StyledInput = styled('input')`
  background-color: ${({ theme }) => theme.colors.gray10};
  ${({ theme }) => theme.typography.body}
  ${({ theme }) => theme.effects.shadows.default}
  color: ${({ theme }) => theme.colors.gray80};
  border-radius: 0.4rem;
  padding: 0.4rem 0.8rem;
  border: none;
  outline-color: ${({ theme }) => theme.colors.blue40};

  &::placeholder {
    ${({ theme }) => theme.typography.body}
    color: ${({ theme }) => theme.colors.gray30}
  }
`;
