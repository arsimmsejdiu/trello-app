import { FC } from "react";
import { ColumnContainer, ColumnTitle } from "../styles";

type ColumnProps = {
  text?: string; // (the ? property) ColumnProps.text?: string | undefined
};

export const Column: FC<ColumnProps> = ({ text, children }) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
        {children}
    </ColumnContainer>
  );
};
