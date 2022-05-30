import Icon, { Icons } from 'components/Icon';
import { KeyboardEvent, useEffect, useRef, useState } from 'react';
import {
  StyledDeleteButton,
  StyledEditButton,
  StyledInput,
  StyledStatus,
  StyledText,
  StyledWrapper,
  StylessButton,
} from './styled';

export default function Todo({
  checked,
  setChecked,
  content,
  setContent,
  edit = false,
  deleteHandler,
}: Props) {
  const [editing, setEditing] = useState(edit);
  useEffect(() => {
    setEditing(edit);
  }, [edit]);

  const ref = useRef<HTMLInputElement>(null);
  const [prevContent, setPrevContent] = useState(content);
  const startEdit = () => {
    setEditing(!editing);
    setPrevContent(content);
    // display: none 에서 바뀌고 업데이트 되기전엔 focus 되지 않습니다
    // useLayoutEffect 를 고려해봐야합니다
    setTimeout(() => {
      if (ref.current) ref.current.focus();
    });
  };

  const onEdit = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') setEditing(false);
    if (e.key === 'Escape') {
      setEditing(false);
      setContent(prevContent);
    }
  };

  return (
    <StyledWrapper>
      <StylessButton onClick={() => setChecked(!checked)}>
        <StyledStatus checked={checked} />
      </StylessButton>
      <StyledText checked={checked} edit={editing}>
        {content}
      </StyledText>
      <StyledInput
        ref={ref}
        edit={editing}
        onChange={(e) => setContent(e.target.value)}
        onKeyDown={onEdit}
        value={content}
      />

      <StyledEditButton onClick={startEdit} checked={checked}>
        <Icon icon={Icons.edit} />
      </StyledEditButton>

      <StyledDeleteButton onClick={deleteHandler}>
        <Icon icon={Icons.cancel} />
      </StyledDeleteButton>
    </StyledWrapper>
  );
}

type Props = {
  checked: boolean;
  setChecked: (checked: boolean) => void;
  content: string;
  setContent: (content: string) => void;
  edit?: boolean;
  deleteHandler: () => void;
};
