import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyles';
import Home from './views/Home';
import EventsList from './views/EventsListView';
import AddEvent from './views/AddEvent';
import EditEvent from './views/EditEvent';
import { theme } from './styles/theme';
import TagsListView from './views/TagsListView';
import AddTag from './views/AddTag';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route path='/admin/new-event'>
            <AddEvent />
          </Route>
          <Route path='/admin/edit/:id'>
            <EditEvent />
          </Route>
          <Route path='/admin/tags/new-tag'>
            <AddTag />
          </Route>
          <Route path='/admin/tags'>
            <TagsListView />
          </Route>
          <Route path='/admin'>
            <EventsList />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
