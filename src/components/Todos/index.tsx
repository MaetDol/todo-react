import Todo from 'components/Todo';
import { TodoType } from 'models/Todo';
import { StyledItem, StyledList } from './styled';

export default function Todos({ todos, setTodos }: Props) {
  const deleteHandler = (id: number) => () => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const checkHandler = (id: number) => (checked: boolean) => {
    const todo = todos.find((todo) => todo.id === id);
    if (!todo) return;
    todo.checked = checked;
    setTodos([...todos]);
  };

  const contentHandler = (id: number) => (content: string) => {
    const todo = todos.find((todo) => todo.id === id);
    if (!todo) return;

    todo.content = content;
    setTodos([...todos]);
  };

  const onEditHandler = (id: number) => (editing: boolean) => {
    const todo = todos.find((todo) => todo.id === id);
    if (!todo) return;

    todo.editing = editing;
    setTodos([...todos]);
  };

  return (
    <StyledList>
      {todos.map((todo) => (
        <StyledItem key={todo.id}>
          <Todo
            checked={todo.checked}
            content={todo.content}
            deleteHandler={deleteHandler(todo.id)}
            setChecked={checkHandler(todo.id)}
            setContent={contentHandler(todo.id)}
            edit={todo.editing}
            setEdit={onEditHandler(todo.id)}
          />
        </StyledItem>
      ))}
    </StyledList>
  );
}

type Props = {
  todos: TodoType[];
  setTodos: (todos: TodoType[]) => void;
};
