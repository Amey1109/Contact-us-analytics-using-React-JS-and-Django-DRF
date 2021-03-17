import Login from "./components/Login"
import {BrowserRouter,Route,Switch} from "react-router-dom"
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/home" component={Home}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
