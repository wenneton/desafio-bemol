import React, { Component } from "react";
import { Link, Switch, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import { AddUser } from './components/add-user.component';
import { User } from './components/user.component';
import { UsersList } from './components/users-list.component';


class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/users" className="navbar-brand">
            BemolTalk
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/users"} className="nav-link">
                Usuários
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Adicionar Usuários
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/users"]} component={UsersList} />
            <Route exact path="/add" component={AddUser} />
            <Route path="/users/:id" component={User} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;