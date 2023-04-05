/* eslint-disable no-unused-vars -- Remove me */
import React, { useEffect, useState } from 'react';
import PageTitle from './PageTitle';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const url = (path) => `${process.env.REACT_APP_BASE_URL}${path}`;

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    async function getToDos() {
      try {
        const res = await fetch(url('/api/todos'));
        const jsonData = await res.json();
        if (!res.ok) {
          throw new Error(`error ${res.status}`);
        } else {
          setTodos(jsonData);
        }
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    getToDos();
  }, []);

  function addTodo(newTodo) {
    async function postTodos(newTodo) {
      try {
        const res = await fetch(url('/api/todos'),{
          method: "Post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newTodo),
        })
        const jsonData = await res.json();
        setTodos(prev => todos.concat(jsonData));
      } catch (err) {
        setError(err) }
      }
      postTodos(newTodo);



  }

 function toggleCompleted(todoId) {
    for (let keys in todos) {
      if (todos[keys].todoId === todoId) {
        const status = { isCompleted: !todos[keys].isCompleted }
        console.log(status);
        async function swapToDos(todoId) {
          try {
            const res = await fetch(url(`/api/todos/${todoId}`), {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(status),
            })
            const jsonData = await res.json();
            console.log(jsonData);
            const newArray = todos.map((todo) => todo.todoId === todoId ? jsonData : todo)
            console.log(newArray);
            setTodos(newArray);
          } catch (err) {
            setError(err)
          }
        }
      swapToDos(todoId);
    }
  }
}


  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error('Fetch error:', error);
    return <div>Error! {error.message}</div>;
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col pt-5">
          <PageTitle text="Todo App" />
          <TodoForm onSubmit={addTodo} />
          <TodoList todos={todos} toggleCompleted={toggleCompleted} />
        </div>
      </div>
    </div>
  );
}
