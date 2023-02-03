import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
import { Login } from "./components/Landing/Login";
import { Profile } from "./components/Landing/Profile";
import { Longout } from "./components/Landing/Logout";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAunthenticated } = useAuth0();
  return (
    <div className="App">
      {isAunthenticated ? (
        <>
          <Profile />
          <Longout />
        </>
      ) : (
        <Login />
      )}
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/home" component={Home} />
          <Route path="/product/:id" component={Detail} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
