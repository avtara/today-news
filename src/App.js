import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Searchpage from "./pages/Searchpage";
import Page404 from "./pages/Page404";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/search" component={Searchpage}>
          <Route path="/:id" component={Searchpage} />
        </Route>
        <Route component={Page404} />
      </Switch>
    </Router>
  );
}

export default App;
