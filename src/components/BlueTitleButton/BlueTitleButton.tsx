import { Button } from 'components';
import { colors, typography } from 'styles';

export default function BlueTitleButton({ content }: Props) {
  return (
    <Button
      content={content}
      textColor={colors.gray10}
      darkenTextColor={colors.gray40}
      backgroundColor={colors.blue50}
      darkenBackgroundColor={colors.blue70}
      lightenBackgroundColor={colors.blue30}
      typography={typography.title}
    />
  );
}

type Props = {
  content: string;
};
