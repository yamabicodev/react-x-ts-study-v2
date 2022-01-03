import axios from "axios";
import { useState } from "react";
import "./styles.css";

import { Text1, Text2 } from "./Text";
import { Todo1, Todo2 } from "./Todo";
import { UserProfile } from "./UserProfile";

import { TodoType } from "./types/todo";
import { User } from "./types/user";

export default function App() {
  /* UserProfile */
  const user1: User = {
    name: "yamabico",
    hobbies: ["ダイビング", "旅行"]
  };
  const user2: User = {
    name: "yamabico"
  };

  /* TODO */
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };

  return (
    <div className="App">
      <Text1 color={"red"} fontSize={"24px"}>
        Children受け取れる
      </Text1>
      {/* <Text2 color={"red"} fontSize={"24px"}>
        Children受け取れない
      </Text2> */}
      <Text2 color={"red"} fontSize={"24px"} />
      <hr />
      <UserProfile user={user1} />
      <hr />
      <UserProfile user={user2} />
      <hr />
      <button onClick={onClickFetchData}>データ取得</button>
      <hr />
      {todos.map((todo) => (
        <Todo1
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
      <hr />
      {todos.map((todo) => (
        <Todo2 key={todo.id} title={todo.title} completed={todo.completed} />
      ))}
    </div>
  );
}
