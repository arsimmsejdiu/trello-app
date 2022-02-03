import { FC } from "react"; // FC = Function Component
import { useAppState } from "./state/AppStateContext";
import { AppContainer } from "./styles";
import { AddNewItem } from "./components/AddNewItem";
import { Column } from "./components/Column";
import { addList } from "./state/actions";

export const App: FC = () => {
  const { lists, dispatch } = useAppState();
  return (
    <AppContainer>
      {lists.map((list) => (
        <Column key={list.id} id={list.id} text={list.text} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={(text) => dispatch(addList(text))}
      />
    </AppContainer>
  );
};

export default App;
