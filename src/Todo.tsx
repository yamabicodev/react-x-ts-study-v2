import { VFC } from "react";
import { TodoType } from "./types/todo";
/**
 * Todo componentはTodoTypeのidの項目は不要だが、
 * 単純にTodoTypeを型指定すると呼び元(App.tsx)でidを渡すようにエラーが出てしまう。
 *
 * 対処方法
 * 1. 定義した型の一部の項目だけ使いたい場合は
 *    Pick<{type-name}, "property1" | property2" ・・>
 * で型定義をする。
 *
 * 2.一部の項目だけ除外したい場合は
 *  Omit<{type-name}, "property1" | property2"  >
 * で型定義する。
 */
export const Todo1: VFC<Pick<TodoType, "title" | "userId" | "completed">> = (
  props
) => {
  const { title, userId, completed = false } = props;
  const completedMark = completed ? "[完了]" : "[未完了]";
  return <p>{`${completedMark} ${title}(ユーザーID: ${userId})`}</p>;
};

export const Todo2: VFC<Omit<TodoType, "id" | "userId">> = (props) => {
  const { title, completed = false } = props;
  const completedMark = completed ? "[完了]" : "[未完了]";
  return <p>{`${completedMark} ${title}`}</p>;
};
