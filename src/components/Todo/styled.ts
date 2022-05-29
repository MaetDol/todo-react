import styled from '@emotion/styled';

export const StyledWrapper = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.gray10};
`;

export const StyledStatus = styled.span<{
  checked: boolean;
}>`
  display: inline-block;
  --size: ${(props) => (props.checked ? '1.2rem' : '2.4rem')};
  width: var(--size);
  height: var(--size);
  margin-right: calc(1.2rem - (var(--size) / 2) + 0.8rem);
  margin-left: calc(1.2rem - (var(--size) / 2));

  border-radius: ${(props) => (props.checked ? '1.2rem' : '0.4rem')};
  background-color: ${(props) =>
    props.checked ? props.theme.colors.gray60 : props.theme.colors.gray20};

  transition-duration: 0.1s;
  transition-timing-function: ease-in-out;
  transition-property: background-color, border-radius;
`;

export const StyledText = styled.span<{
  checked: boolean;
  edit: boolean;
}>`
  flex: 1;
  ${({ theme }) => theme.typography.body};
  display: ${(props) => (props.edit ? 'none' : 'initial')};
  color: ${(props) =>
    props.checked ? props.theme.colors.gray60 : props.theme.colors.gray20};

  transition: color 0.1s ease-in-out;
`;

export const StyledInput = styled.input<{ edit: boolean }>`
  ${({ theme }) => theme.typography.body};
  display: ${(props) => (props.edit ? 'initial' : 'none')};
  color: ${(props) =>
    props.checked ? props.theme.colors.gray60 : props.theme.colors.gray20};
  flex: 1;
  background: transparent;
  border: 0;
  padding: 0;
`;

export const StylessButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
`;

export const StyledEditButton = styled(StylessButton)<{
  checked: boolean;
}>`
  fill: ${(props) =>
    props.checked ? props.theme.colors.gray60 : props.theme.colors.gray20};
  margin-left: 0.8rem;
  transition: fill 0.1s ease-in-out;
`;

export const StyledDeleteButton = styled(StylessButton)`
  margin-left: 1.6rem;
`;
