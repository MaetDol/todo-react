import { Todo } from 'models/Todo';
import React, { useEffect, useState } from 'react';
import { currentUser } from './firebase';
import { addDocument } from './firebase/db';
import { getDatas } from './firebase/db/db';

export function useAddTodo(
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
) {
  return (todo: Todo) => {
    const user = currentUser();
    if (!user) return;

    addDocument(user.uid, todo.serialize()).then(() =>
      setTodos((todos) => todos.concat(todo))
    );
  };
}

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  useEffect(() => {
    const user = currentUser();
    if (!user) return;
    if (!user.email) throw new Error(`Cannot found user's email. ${user}`);

    getDatas(user.uid).then(setTodos);
  }, []);

  return { todos, setTodos };
}
