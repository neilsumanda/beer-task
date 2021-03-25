
import {
  BrowserRouter as Router, Route,
  Switch,
  Link} from 'react-router-dom';
import './App.css';
import { Detail } from './components/detail';
import { Main } from './components/main';
import { GlobalContextProvider } from './contexts/GlobalContext';

function App() {
  return (
    <GlobalContextProvider>
      <div className="main">
        <Router>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/detail/:id" component={Detail} />
          </Switch>
        </Router>
        
      </div>
    </GlobalContextProvider>
  );
}

export default App;
