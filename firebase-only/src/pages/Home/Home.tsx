import { currentUser } from 'api/firebase';
import { useAddTodo, useTodos } from 'api/todo';
import Icon, { Icons } from 'components/Icon';
import Todos from 'components/Todos';
import { Todo } from 'models/Todo';
import {
  StyledAddButton,
  StyledContainer,
  StyledHeaderContainer,
  StyledLink,
  StyledTodoWrapper,
  StyledUserName,
} from './Home.styled';

export default function Home() {
  const { todos, setTodos } = useTodos();
  const addTodo = useAddTodo(setTodos);

  const addHandler = () => {
    addTodo(new Todo('', false, true));
  };

  const email = currentUser()?.email;

  return (
    <StyledContainer>
      <StyledHeaderContainer>
        <StyledUserName>{email}</StyledUserName>
        <StyledLink to="/login">
          <Icon icon={Icons.login} />
        </StyledLink>
      </StyledHeaderContainer>
      <StyledTodoWrapper>
        <Todos setTodos={setTodos} todos={todos} />
      </StyledTodoWrapper>
      <StyledAddButton onClick={addHandler}>+</StyledAddButton>
    </StyledContainer>
  );
}
