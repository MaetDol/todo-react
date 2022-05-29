import { Color } from 'styles/colors';
import { Typography } from 'styles/typography';
import { StyledButton } from './styled';

export default function Button({
  textColor,
  darkenTextColor,
  backgroundColor,
  darkenBackgroundColor,
  lightenBackgroundColor,
  typography,
  content,
}: props) {
  return (
    <StyledButton
      textColor={textColor}
      darkenTextColor={darkenTextColor}
      backgroundColor={backgroundColor}
      darkenBackgroundColor={darkenBackgroundColor}
      lightenBackgroundColor={lightenBackgroundColor}
      typography={typography}
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
};
