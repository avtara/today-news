import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Searchpage from "./pages/Searchpage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/search" component={Searchpage}>
          <Route path="/:id" component={Searchpage} />
        </Route>
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

export default App;
