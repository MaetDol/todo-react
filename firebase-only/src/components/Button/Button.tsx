import { MouseEventHandler } from 'react';
import { Color } from 'styles/colors';
import { Typography } from 'styles/typography';
import { StyledButton } from './Button.styled';

export default function Button({
  textColor,
  darkenTextColor,
  backgroundColor,
  darkenBackgroundColor,
  lightenBackgroundColor,
  typography,
  content,
  onClick,
}: props) {
  return (
    <StyledButton
      textColor={textColor}
      darkenTextColor={darkenTextColor}
      backgroundColor={backgroundColor}
      darkenBackgroundColor={darkenBackgroundColor}
      lightenBackgroundColor={lightenBackgroundColor}
      typography={typography}
      onClick={onClick}
    >
      {content}
    </StyledButton>
  );
}

type props = {
  textColor: Color;
  darkenTextColor: Color;
  backgroundColor: Color;
  darkenBackgroundColor: Color;
  lightenBackgroundColor: Color;
  typography: Typography;
  content: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};
