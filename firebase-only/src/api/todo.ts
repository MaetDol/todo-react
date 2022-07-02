import { Todo } from 'models/Todo';
import React, { useEffect, useState } from 'react';
import { Utils } from 'utils/util';
import { currentUser } from './firebase';
import { addDocument } from './firebase/db';
import { getDatas, updateDocument } from './firebase/db/db';

function baseDocument(sid: string, ...paths: string[]) {
  return `account/${sid}/todos/${paths.join('/')}`;
}

function fromFirestore(data: any): Todo {
  if (!data) return new Todo('', false, false);

  const { content, done, created_at, updated_at } = data;
  const todo = new Todo(content, done, false);
  todo.created_at = created_at
    ? Utils.fromFirestoreDate(created_at)
    : new Date();
  todo.updated_at = updated_at
    ? Utils.fromFirestoreDate(updated_at)
    : new Date();
  return todo;
}

export function useAddTodo(
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
) {
  return (todo: Todo) => {
    const user = currentUser();
    if (!user) return;

    addDocument(
      baseDocument(user.uid, todo.created_at.getTime().toString()),
      todo.serialize()
    ).then(() => setTodos((todos) => todos.concat(todo)));
  };
}

export function setTodo(todo: Todo) {
  const user = currentUser();
  if (!user) return;

  return updateDocument(
    baseDocument(user.uid, todo.created_at.getTime().toString()),
    todo.serialize()
  );
}

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  useEffect(() => {
    const user = currentUser();
    if (!user) return;

    getDatas(baseDocument(user.uid)).then((datas) => {
      setTodos(datas.map(fromFirestore));
    });
  }, []);

  return { todos, setTodos };
}
