import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthScreen from './components/AuthScreen';
import Feed from './pages/Feed';
import Confessions from './pages/Confessions';
import Resources from './pages/Resources';
import Chat from './pages/Chat';
import DMs from './pages/DMs';
import Profile from './pages/Profile';
import Admin from './pages/Admin';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/auth" component={AuthScreen} />
          <Route path="/feed" component={Feed} />
          <Route path="/confessions" component={Confessions} />
          <Route path="/resources" component={Resources} />
          <Route path="/chat" component={Chat} />
          <Route path="/dms" component={DMs} />
          <Route path="/profile" component={Profile} />
          <Route path="/admin" component={Admin} />
          <Route path="/" exact component={Feed} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;