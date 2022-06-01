import styled from '@emotion/styled';

export const StyledContainer = styled.div`
  padding-top: calc(6.4rem + 2.4rem);
  padding-bottom: calc(9.6rem + 4.8rem);
`;

export const StyledHeaderContainer = styled.div`
  padding: 3.2rem;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
`;

export const StyledLoginButton = styled.button`
  float: right;
  border: none;
  padding: 0;
  background-color: transparent;
  font-size: 0;
`;

export const StyledTodoWrapper = styled.div`
  padding: 0 3.2rem;
`;

export const StyledAddButton = styled.button`
  background-color: ${({ theme }) => theme.colors.blue50};
  border-radius: 0.4rem;
  color: white;
  padding: 0;
  width: 4.8rem;
  height: 4.8rem;
  position: fixed;
  left: 50%;
  transform: translate(-50%, -50%);
  bottom: 4.8rem;
  border: none;
  cursor: pointer;

  ${({ theme }) => theme.effects.shadows.default};
  ${({ theme }) => theme.typography.title};
`;
