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
} from './Todo.styled';

export default function Todo({
  checked,
  setChecked,
  content,
  setContent,
  edit,
  setEdit,
  deleteHandler,
}: Props) {
  const ref = useRef<HTMLInputElement>(null);
  const focus = () => {
    setTimeout(() => {
      if (ref.current) ref.current.focus();
    });
  };

  useEffect(() => {
    if (edit) focus();
  }, [edit]);

  const [prevContent, setPrevContent] = useState(content);
  const startEdit = () => {
    setEdit(!edit);
    setPrevContent(content);
    // display: none 에서 바뀌고 업데이트 되기전엔 focus 되지 않습니다
    // useLayoutEffect 를 고려해봐야합니다
    focus();
  };

  const onEdit = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') setEdit(false);
    if (e.key === 'Escape') {
      doneEdit(prevContent);
    }
  };

  const doneEdit = (content: string) => {
    setEdit(false);
    setContent(content);
  };

  useEffect(() => {});

  return (
    <StyledWrapper>
      <StylessButton onClick={() => setChecked(!checked)}>
        <StyledStatus checked={checked} />
      </StylessButton>
      <StyledText checked={checked} edit={edit}>
        {content}
      </StyledText>
      <StyledInput
        ref={ref}
        edit={edit}
        onChange={(e) => setContent(e.target.value)}
        onKeyDown={onEdit}
        onBlur={() => doneEdit(content)}
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
  edit: boolean;
  setEdit: (editing: boolean) => void;
  deleteHandler: () => void;
};
