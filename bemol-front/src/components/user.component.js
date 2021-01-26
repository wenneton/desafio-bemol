import React,  { useState, useEffect } from 'react';
import UserDataService from '../services/user.service';

export function User(props) {
    const [currentUser, setCurrentUser] = useState(null);
    const [message, setMessage] = useState('');

    useEffect(() => getUser(props.match.params.id), [props]);

    const getUser = id => {
        UserDataService.get(id)
            .then(response => {
                setCurrentUser(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    const deleteUser = () => {
        UserDataService.delete(currentUser.id)
            .then(response => {
                console.log(response.data);
                props.history.push('/users');
            })
            .catch(e => {
                console.log(e);
            });
    }

    const updateUser = () => {
        UserDataService.update(
            currentUser.id,
            currentUser
          )
            .then(response => {
              console.log(response.data);
              setMessage('O usuário foi alterado com sucesso!');
            })
            .catch(e => {
              console.log(e);
            });
    }

    return (
        <div>
          {currentUser ? (
            <div className="edit-form">
              <h4>Usuário</h4>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Nome</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={currentUser.name}
                    onChange={e => setCurrentUser({
                        ...currentUser,
                        name: e.target.value,
                    })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Data de Nascimento</label>
                  <input
                    type="text"
                    className="form-control"
                    id="birthDate"
                    value={currentUser.birthDate}
                    onChange={e => setCurrentUser({
                        ...currentUser,
                        birthDate: e.target.value,
                    })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name">CEP</label>
                  <input
                    type="text"
                    className="form-control"
                    id="zipCode"
                    value={currentUser.zipCode}
                    onChange={e => setCurrentUser({
                        ...currentUser,
                        zipCode: e.target.value,
                    })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Endereço</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    value={currentUser.address}
                    onChange={e => setCurrentUser({
                        ...currentUser,
                        address: e.target.value,
                    })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Número</label>
                  <input
                    type="text"
                    className="form-control"
                    id="addressNumber"
                    value={currentUser.addressNumber}
                    onChange={e => setCurrentUser({
                        ...currentUser,
                        addressNumber: e.target.value,
                    })}
                  />
                </div>
              </form>
  
              <button
                className="badge badge-danger mr-2"
                onClick={deleteUser}
              >
                Excluir
              </button>
  
              <button
                type="submit"
                className="badge badge-success"
                onClick={updateUser}
              >
                Atualizar
              </button>
              <p>{message}</p>
            </div>
          ) : (
            <div>
              <br />
              <p>Por favor, selecione um usuário...</p>
            </div>
          )}
        </div>
      );
}