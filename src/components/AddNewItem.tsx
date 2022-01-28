import { useState } from "react";
import { AddItemButton } from "../styles";
import { NewItemForm } from "./NewItemForm";

// onAdd is a callback function that will be called when we click the Create item button.
// toggleButtonText is the text we’ll render when this component is a button.
// dark is a flag that we’ll pass to the styled component.
type AddNewItemProps = {
  onAdd(text: string): void;
  toggleButtonText: string;
  dark?: boolean;
};

export const AddNewItem = (props: AddNewItemProps) => {
  const [showForm, setShowForm] = useState<boolean>(false); // show and unshow the form when we click the button
  const { onAdd, toggleButtonText, dark } = props;

  if (showForm) {
    // We show item creation form here
    return (
      <NewItemForm
        onAdd={(text) => {
          onAdd(text);
          setShowForm(false);
        }}
      />
    );
  }

  return (
    // It holds a showForm boolean state. When this state is true, we show an input with
    // the “Create” button. When it’s false, we render the button with toggleButtonText
    // on it.
    <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
      {toggleButtonText}
    </AddItemButton>
  );
};
