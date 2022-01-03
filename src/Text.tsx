import { FC, VFC } from "react";

type Props = {
  color: string;
  fontSize: string;
};
/**
 * functional componentの場合は
 * 明示的にfunctional componentの型定義ができる。
 * const func-name: FC<type-name> = (props) => {}
 * react のversion 17まではFCはchildrenも受け取れるようになっているが、
 * この挙動はよくないため、version 18からはchildrenは受け取れないようになる。
 * @param props
 */
export const Text1: FC<Props> = (props) => {
  const { color, fontSize } = props;
  return <p style={{ color: color, fontSize: fontSize }}>テキスト1です。</p>;
};

/**
 * version 17でchidrenを受け取らないようにするには、VFCを利用する。
 * @param props
 */
export const Text2: VFC<Props> = (props) => {
  const { color, fontSize } = props;
  return <p style={{ color: color, fontSize: fontSize }}>テキスト2です。</p>;
};
