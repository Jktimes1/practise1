//import logo from './logo.svg';
import './App.css';
import Userform from './components/Userform';
import Userlist from './components/Userlist';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
            {/* <Userform/>
            <Userlist/> */}
            
<Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <Userform />
          </Route>
          <Route path="/users">
            <Userlist /> <Userform/>
          </Route>
          {/* <Route path="/">
            < />
          </Route> */}
        </Switch>
      </div>
    </Router>
    </div>
       

  );
}

export default App;
