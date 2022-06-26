import Icon, { Icons } from 'components/Icon';
import Todos from 'components/Todos';
import { Todo } from 'models/Todo';
import { useRef, useState } from 'react';
import {
  StyledAddButton,
  StyledContainer,
  StyledHeaderContainer,
  StyledLink,
  StyledTodoWrapper,
} from './Home.styled';

export default function Home() {
  const idRef = useRef(1);
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = () => {
    setTodos([new Todo('', idRef.current++, false, true), ...todos]);
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
