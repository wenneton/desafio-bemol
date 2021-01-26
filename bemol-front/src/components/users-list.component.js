import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import UserDataService from '../services/user.service';

export function UsersList() {
    const [searchName, setSearchName] = useState('');
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);

    useEffect(() => retrieveUsers(), [])


    const searchForName = () => {
        UserDataService.findByName(this.state.searchName)
            .then(response => {
                setUsers(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    const retrieveUsers = () => {
        UserDataService.getAll()
            .then(response => {
                setUsers(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    const refreshList = () => {
        retrieveUsers();
        setCurrentUser(null);
        setCurrentIndex(-1);
    }

    const removeAllUsers = () => {
        UserDataService.deleteAll()
            .then(response => {
                console.log(response.data);
                refreshList();
            })
            .catch(e => {
                console.log(e);
            });
    }


    return (
        <div className="list row">
          <div className="col-md-8">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Procure pelo nome..."
                value={searchName}
                onChange={e => setSearchName(e.target.value)}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={searchForName}
                >
                  Pesquisar
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h4>Lista de Usuários Cadastrados</h4>
  
            <ul className="list-group">
              {users &&
                users.map((user, index) => (
                  <li
                    className={
                      "list-group-item " +
                      (index === currentIndex ? "active" : "")
                    }
                    onClick={() => {
                        setCurrentUser(user);
                        setCurrentIndex(index);
                    }}
                    key={index}
                  >
                    {user.name}
                  </li>
                ))}
            </ul>
  
            <button
              className="m-3 btn btn-sm btn-danger"
              onClick={removeAllUsers}
            >
              Remover Todos
            </button>
          </div>
          <div className="col-md-6">
            {currentUser ? (
              <div>
                <h4>Usuário</h4>
                <div>
                  <label>
                    <strong>Nome:</strong>
                  </label>{" "}
                  {currentUser.name}
                </div>
                <div>
                  <label>
                    <strong>Data de Nascimento:</strong>
                  </label>{" "}
                  {currentUser.birthDate}
                </div>
                <div>
                  <label>
                    <strong>CEP</strong>
                  </label>{" "}
                  {currentUser.zipCode}
                </div>
                <div>
                  <label>
                    <strong>Endereço</strong>
                  </label>{" "}
                  {currentUser.address}
                </div>
                <div>
                  <label>
                    <strong>Número</strong>
                  </label>{" "}
                  {currentUser.addressNumber}
                </div>
  
                <Link
                  to={"/users/" + currentUser.id}
                  className="badge badge-warning"
                >
                  Editar
                </Link>
              </div>
            ) : (
              <div>
                <br />
                <p>Selecione um usuário...</p>
              </div>
            )}
          </div>
        </div>
      );
}