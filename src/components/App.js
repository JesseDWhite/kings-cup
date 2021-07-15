import '../App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import GameControl from './GameControl';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/'>
          <GameControl />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
