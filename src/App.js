import './App.css';
import { Route, Redirect, useHistory } from "react-router-dom"
import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"
import { userStorageKey } from "./components/auth/authSettings"
import { DropList } from "./components/drops/DropList"

import { ApplicationViews } from './components/ApplicationViews';

function App() {
  const history = useHistory()
  return (
    <div className="ohDeer">
      <head>
      </head>
      <header className="goodWood-header">
        <h1>GOOD WOOD</h1>
      </header>
      <div className="navBorder"></div>
      <Route render={() => {
        if (sessionStorage.getItem(userStorageKey)) {
          return (
            <>
              <ApplicationViews />
            </>
          )
        } else {
          return <Redirect to="/login" />;
        }
      }} />

      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </div>
  );
}

export default App;
