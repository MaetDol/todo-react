import { StyledInput } from './Input.styled';

export default function Input({
  placeholder,
  setValue,
  value,
  type = 'text',
}: props) {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      onChange={(e) => setValue(e.target.value)}
      value={value}
    />
  );
}

type props = {
  placeholder?: string;
  type?: 'text' | 'number';
  value: string;
  setValue: (value: string) => void;
};
