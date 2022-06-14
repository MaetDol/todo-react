import { Button } from 'components';
import { colors, typography } from 'styles';
import { typographyType } from 'styles/typography';

export default function BlueButton({ content, typography: typo }: Props) {
  return (
    <Button
      content={content}
      textColor={colors.gray10}
      darkenTextColor={colors.gray40}
      backgroundColor={colors.blue50}
      darkenBackgroundColor={colors.blue70}
      lightenBackgroundColor={colors.blue30}
      typography={typo || typography.title}
    />
  );
}

type Props = {
  content: string;
  typography?: typographyType[keyof typographyType];
};
