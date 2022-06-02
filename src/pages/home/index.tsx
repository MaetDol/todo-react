import Icon, { Icons } from 'components/Icon';
import Todos from 'components/Todos';
import { TodoType } from 'models/Todo';
import { useRef, useState } from 'react';
import {
  StyledAddButton,
  StyledContainer,
  StyledHeaderContainer,
  StyledLink,
  StyledTodoWrapper,
} from './styled';

export function Home() {
  const idRef = useRef(1);
  const [todos, setTodos] = useState<TodoType[]>([]);

  const addTodo = () => {
    setTodos([
      {
        checked: false,
        id: idRef.current++,
        content: '',
        editing: true,
      },
      ...todos,
    ]);
  };

  return (
    <StyledContainer>
      <StyledHeaderContainer>
        <StyledLink to="/login">
          <Icon icon={Icons.login} />
        </StyledLink>
      </StyledHeaderContainer>
      <StyledTodoWrapper>
        <Todos setTodos={setTodos} todos={todos} />
      </StyledTodoWrapper>
      <StyledAddButton onClick={addTodo}>+</StyledAddButton>
    </StyledContainer>
  );
}
