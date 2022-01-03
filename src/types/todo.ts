/**
 * 型宣言の共通化
 * ルール
 * - ";"で区切ること。
 * - optionalな項目は?をつける
 */
export type TodoType = {
  // required
  id: number;
  // required
  userId: string;
  // required
  title: string;
  // optional
  completed?: boolean;
};
