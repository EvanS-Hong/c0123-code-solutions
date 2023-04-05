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
    /* Find the index of the todo with the matching todoId in the state array.
     * Get its "isCompleted" status.
     * Make a new object containing ONE PROPERTY: the opposite "isCompleted" status.
     * Use fetch to send a PATCH request to `/api/todos/${todoId}`
     * Once the response JSON is received and parsed,
     *   - create a shallow copy of the todos array from state
     *   - replace the old todo with the todo received from the server
     *   - handle errors appropriate (as mentioned above)
     *
     * NOTE: "toggle" means to flip back and forth, so clicking a todo
     * in the list repeatedly should "toggle" its isCompleted status back and forth.
     *
     * DO NOT try to calculate the index of the todo by subtracting 1 from the id.
     *
     * DO NOT MUTATE the original state array, nor any objects within it.
     *
     * TIP: `Array.map` is a convenient way to make a copy of an array -- compare
     * the Todo IDs and map the existing Todo if it is not the one that was
     * just updated, and map the updated array if it is.
     * TIP: When calling fetch, be sure to SERIALIZE the updates in the body with JSON.stringify()
     * And specify the "Content-Type" header as "application/json"
     */
    for (let keys in todos) {
      if (todos[keys].todoId === todoId) {
        const status = {
          todoId: todos[keys].todoId,
          isCompleted: `${todos[keys].isCompleted}`,
          task: todos[keys].task
        }
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
