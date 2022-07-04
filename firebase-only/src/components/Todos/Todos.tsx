import { deleteTodo, setTodo } from 'api/todo';
import Todo from 'components/Todo';
import { Todo as TodoModel } from 'models/Todo';
import { StyledItem, StyledList } from './Todos.styled';

export default function Todos({ todos, setTodos }: Props) {
  const deleteHandler = (createAt: Date) => () => {
    setTodos(todos.filter((todo) => todo.created_at !== createAt));
    deleteTodo(createAt);
  };

  const checkHandler = (createAt: Date) => (checked: boolean) => {
    const todo = todos.find((todo) => todo.created_at === createAt);
    if (!todo) return;
    todo.checked = checked;
    setTodos([...todos]);
  };

  const contentHandler = (createAt: Date) => (content: string) => {
    const todo = todos.find((todo) => todo.created_at === createAt);
    if (!todo) return;

    todo.content = content;
    setTodos([...todos]);
  };

  const onEditHandler = (createAt: Date) => (editing: boolean) => {
    const todo = todos.find((todo) => todo.created_at === createAt);
    if (!todo) return;

    todo.editing = editing;
    setTodos([...todos]);
    if (!editing) {
      setTodo(todo);
    }
  };

  return (
    <StyledList>
      {todos.map((todo) => (
        <StyledItem key={todo.created_at.getTime()}>
          <Todo
            checked={todo.checked}
            content={todo.content}
            deleteHandler={deleteHandler(todo.created_at)}
            setChecked={checkHandler(todo.created_at)}
            setContent={contentHandler(todo.created_at)}
            edit={todo.editing}
            setEdit={onEditHandler(todo.created_at)}
          />
        </StyledItem>
      ))}
    </StyledList>
  );
}

type Props = {
  todos: TodoModel[];
  setTodos: (todos: TodoModel[]) => void;
};
