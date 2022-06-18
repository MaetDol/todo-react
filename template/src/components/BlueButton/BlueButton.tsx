import { Button } from 'components';
import { MouseEventHandler } from 'react';
import { colors, typography } from 'styles';
import { typographyType } from 'styles/typography';

export default function BlueButton({
  content,
  typography: typo,
  onClick,
}: Props) {
  return (
    <Button
      content={content}
      textColor={colors.gray10}
      darkenTextColor={colors.gray40}
      backgroundColor={colors.blue50}
      darkenBackgroundColor={colors.blue70}
      lightenBackgroundColor={colors.blue30}
      typography={typo || typography.title}
      onClick={onClick}
    />
  );
}

type Props = {
  content: string;
  typography?: typographyType[keyof typographyType];
  onClick: MouseEventHandler<HTMLButtonElement>;
};
