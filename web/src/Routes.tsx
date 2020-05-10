import * as React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import LoginView from "./modules/user/login-view";
import RegisterView from "./modules/user/register-view";
import UsersView from "./modules/user/users-view";

const Routes = () => {
  return (
    <BrowserRouter>
      <div>
        <header>
          <div>
            <Link to="/register">Register</Link>
          </div>
          <div>
            <Link to="/login">Login</Link>
          </div>
          <div>
            <Link to="/users">Users</Link>
          </div>
        </header>

        <Switch>
          <Route path="/login" component={LoginView} />
          <Route path="/register" component={RegisterView} />
          <Route path="/users" component={UsersView} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Routes;
