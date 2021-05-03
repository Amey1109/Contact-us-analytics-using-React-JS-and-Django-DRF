import Login from "./components/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Analytics from "./components/Analytics";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          {/* <Route exact path="/ContactUs" component={ContactUs} />
          <Route exact path="/analytics" component={Analytics} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
