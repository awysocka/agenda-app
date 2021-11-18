import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyles';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';
import ProtectedRoute from './auth/protected-route';
import Home from './views/Home';
import EventsList from './views/EventsListView';
import AddEvent from './views/AddEvent';
import EditEvent from './views/EditEvent';
import { theme } from './styles/theme';
import TagsListView from './views/TagsListView';
import AddTag from './views/AddTag';
import EditTag from './views/EditTag';
import Config from './views/Config';
import ConfigEdit from './views/ConfigEdit';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Auth0ProviderWithHistory>
          <GlobalStyle />
          <Switch>
            <ProtectedRoute path='/admin/new-event' component={AddEvent} />
            <ProtectedRoute path='/admin/edit/:id' component={EditEvent} />
            <ProtectedRoute path='/admin/tags/new-tag' component={AddTag} />
            <ProtectedRoute path='/admin/tags/edit/:id' component={EditTag} />
            <ProtectedRoute path='/admin/tags' component={TagsListView} />
            <ProtectedRoute path='/admin/config/edit' component={ConfigEdit} />
            <ProtectedRoute path='/admin/config' component={Config} />
            <ProtectedRoute path='/admin' component={EventsList} />
            <Route path='/' component={Home} />
          </Switch>
        </Auth0ProviderWithHistory>
      </Router>
    </ThemeProvider>
  );
}

export default App;
