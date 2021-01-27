import React,  { useState, useEffect } from 'react';
import UserDataService from '../services/user.service';

export function User(props) {
    const [currentUser, setCurrentUser] = useState(null);
    const [message, setMessage] = useState('');
    const [invalidZipCode, setInvalidZipCode] = useState(false);

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

    const searchZipCode = e => {
        e.preventDefault();
        UserDataService.getAddress(currentUser.zipCode)
            .then(response => {
                setCurrentUser({
                    ...currentUser,
                    address: response.data.logradouro + ', ' +
                    response.data.bairro + ', ' +
                    response.data.localidade
                });
                setInvalidZipCode(false);
            })
            .catch(err => {
                console.log(err);
                setInvalidZipCode(true);
            } )
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
                    <div>
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
                    <button onClick={searchZipCode} className="btn btn-primary mt-1">
                        Pesquisar CEP
                    </button>
                    {invalidZipCode ? <p className="alert alert-danger mt-1"> Cep Inválido</p> : ''}
                </div>
                <div className="form-group">
                  <label htmlFor="name">Endereço</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    value={currentUser.address}
                    disabled
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