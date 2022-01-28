import React, { FC } from 'react'; // FC = Function Component
import { AppContainer } from './styles';

export const App: FC = ({ children }) => {
  return (
    <AppContainer>
      {children}
    </AppContainer>
  )
}

export default App;
