import styled from '@emotion/styled';

export const StyledWrapper = styled.div``;

export const StyledInputWrapper = styled.div`
  margin-top: 20rem;
  text-align: center;

  > :first-of-type {
    margin-bottom: 2.4rem;
  }

  > :last-child {
    margin: 3.2rem auto;
    display: block;
    width: fit-content;
    color: ${({ theme }) => theme.colors.gray30};
    ${({ theme }) => theme.typography.subtitle};
  }
`;

export const StyledButtonWrapper = styled.div`
  position: fixed;
  bottom: 4.8rem;
  left: 50%;
  transform: translateX(-50%);
`;
