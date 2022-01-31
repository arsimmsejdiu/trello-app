import { useState } from "react";
import { NewItemButton, NewItemFormContainer, NewItemInput } from "../styles";
import { useFocus } from '../utils/useFocus';

// onAdd is a callback passed through AddNewItemProps.
type NewItemFormProps = {
  onAdd(text: string): void;
};

export const NewItemForm = ({ onAdd }: NewItemFormProps) => {
  const [text, setText] = useState("");
  const inputRef = useFocus();

  return (
    // The component uses a controlled input. We’ll store the value for it in the text state.
    // Whenever you type in the text inside this input, the text state is updated.
    // Here we didn’t have to provide any type for the event argument of our onChange
    // callback. TypeScript gets the type from React type definitions
    <NewItemFormContainer>
      <NewItemInput ref={inputRef} value={text} onChange={(e) => setText(e.target.value)} />
      <NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
    </NewItemFormContainer>
  );
};
