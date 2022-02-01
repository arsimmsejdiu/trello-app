import { FC } from "react"; // FC = Function Component
import { useAppState } from "./state/AppStateContext";
import { AppContainer } from "./styles";
import { AddNewItem } from "./components/AddNewItem";
import { Column } from "./components/Column";

export const App: FC = () => {
  const { lists } = useAppState();
  return (
    <AppContainer>
      {lists.map((list) => (
        <Column key={list.id} id={list.id} text={list.text} />
      ))}
      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
    </AppContainer>
  );
};

export default App;
