import { NOTFOUND } from "dns";
import React from "react";
import { Todo } from "../../../../typings";
import { notFound } from "next/navigation";

//when ever possible do server side rendering
export const dynamicParams = true;

type PageProps = {
  params: {
    todoid: string;
  };
};

const fetchTodo = async (todoid: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoid}`,
    { next: { revalidate: 60 } }
  );
  const todo = await res.json();
  return todo;
};

//reserved function to generate possible params
const generateStaticParams = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const todos: Todo[] = await res.json();

  //prebuilding first 10 pages to avoid rate limit by API
  const trimmedTodos = todos.splice(0, 10);

  return trimmedTodos.map((todo) => ({
    todoid: todo.id.toString(),
  }));
};

const TodoPage = async ({ params: { todoid } }: PageProps) => {
  const todo: Todo = await fetchTodo(todoid);

  if (!todo.id) return notFound();

  return (
    <>
      <div className="p-10 bg-yellow-200 border-2 m-2 shadow-lg">
        <p>
          #{todoid} : {todo.title}
        </p>
        <p>Completed : {todo.completed ? "YES" : "NO"}</p>

        <p className="border-t border-black mt-5 text-right">
          By User : {todo.userId}
        </p>
      </div>
    </>
  );
};

export default TodoPage;
