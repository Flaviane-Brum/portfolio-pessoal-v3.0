import * as S from "./styles";
import { useCallback, useEffect, useState } from "react";
export const TypeWriter = ({ value }) => {
  const [text, setText] = useState("");

  const typeWriter = useCallback(
    (text, i = 0) => {
      if (i < value.length) {
        setText(text.slice(0, i + 1));
        setTimeout(() => {
          typeWriter(text, i + 1);
        }, 100);
      }
    },
    [value.length]
  );

  useEffect(() => {
    typeWriter(value);
  }, [typeWriter, value]);

  return (
    <S.Container>
      {text}
      <S.TextCursor />
    </S.Container>
  );
};
