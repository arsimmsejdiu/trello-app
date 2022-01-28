import { FC } from "react";
import { ColumnContainer, ColumnTitle } from "../styles";
import { AddNewItem } from './AddNewItem';

type ColumnProps = {
  text?: string; // (the ? property) ColumnProps.text?: string | undefined
};

export const Column: FC<ColumnProps> = ({ text, children }) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
        {children}
      <AddNewItem  toggleButtonText="+ Add another task" onAdd={console.log} dark/>
    </ColumnContainer>
  );
};
