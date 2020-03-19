import React from 'react';
import { ThemeProvider } from 'emotion-theming';

import GlobalStyles from './Globalstyles';
import Header from './components/Header';
import Searchbar from './components/Searchbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Thanks from './pages/Thanks';
import Start from './pages/Start';
import Add from './pages/Add';
import styled from '@emotion/styled';
import lightTheme from './themes/lightTheme';
import darkTheme from './themes/darkTheme';

const Main = styled.main`
  padding: 30px;
`;

const App = () => {
  const [theme, setTheme] = React.useState(lightTheme);
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header
          onToggleThemeClick={() => {
            setTheme(theme === lightTheme ? darkTheme : lightTheme);
          }}
        ></Header>
        <Searchbar></Searchbar>
        <Main>
          <Switch>
            <Route exact path="/">
              <Start />
            </Route>
            <Route path="/Add">
              <Add />
            </Route>
            <Route path="/Thanks">
              <Thanks />
            </Route>
          </Switch>
        </Main>
      </ThemeProvider>
    </Router>
  );
};

export default App;
