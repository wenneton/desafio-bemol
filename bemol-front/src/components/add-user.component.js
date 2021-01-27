import React, { useState } from 'react';
import UserDataService from '../services/user.service';

export function AddUser() {
    const [submitted, setSubmitted] = useState(false);
    const [id, setId] = useState(null);
    const [name, setName] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [invalidZipCode, setInvalidZipCode] = useState(false);
    const [address, setAddress] = useState('');
    const [addressNumber, setAddressNumber] = useState('');
    const [birthDate, setBirthDate] = useState('');
    
    const newUser = () => {
        setId(null);
        setName('');
        setZipCode('');
        setAddress('');
        setAddressNumber('');
        setBirthDate('');

        setSubmitted(false);
    }

    const saveUser = () => {
        var data = {
          name,
          zipCode,
          address,
          addressNumber,
          birthDate
        };
    
        UserDataService.create(data)
          .then(response => {
            setId(response.data.id,);
            setName(response.data.name);
            setZipCode(response.data.zipCode);
            setAddress(response.data.address);
            setAddressNumber(response.data.addressNumber);
            setBirthDate(response.data.birthDate);
    
            setSubmitted(true);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }

    const searchZipCode = e => {
        UserDataService.getAddress(zipCode)
            .then(response => {
                setAddress(response.data.logradouro + ', ' +
                    response.data.bairro + ', ' +
                    response.data.localidade);
                setInvalidZipCode(false);
            })
            .catch(err => {
                console.log(err);
                setInvalidZipCode(true);
            } )
    }
    

    return (
        <div className="submit-form">
          {submitted ? (
            <div>
              <h4>Usuário adicionado com sucesso!</h4>
              <button className="btn btn-success" onClick={newUser}>
                Adicionar novo
              </button>
            </div>
          ) : (
            <div className="container">
              <div className="form-group">
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  name="name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="birthDate">Data de Nascimento</label>
                <input
                  type="text"
                  className="form-control"
                  id="birthDate"
                  required
                  value={birthDate}
                  onChange={e => setBirthDate(e.target.value)}
                  name="birthDate"
                />
              </div>

              <div className="form-group">
                <label htmlFor="zipCode">CEP</label>
                <div>
                    <input
                    type="text"
                    className="form-control"
                    id="zipCode"
                    required
                    value={zipCode}
                    onChange={e => setZipCode(e.target.value)}
                    name="zipCode"
                    />
                </div>
                <div>
                </div>
                <button onClick={searchZipCode} className="btn btn-primary mt-1">
                Pesquisar CEP
                </button>
                {invalidZipCode ? <p className="alert alert-danger mt-1"> Cep Inválido</p> : ''}
              </div>

              <div className="form-group">
                <label htmlFor="address">Endereço</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  required
                  disabled
                  value={address}
                  onChange={e => setAddress(e.target.value)}
                  name="address"
                />
              </div>

              <div className="form-group">
                <label htmlFor="address">Número</label>
                <input
                  type="text"
                  className="form-control"
                  id="addressNumber"
                  required
                  value={addressNumber}
                  onChange={e => setAddressNumber(e.target.value)}
                  name="addressNumber"
                />
              </div>
            
            <div className="">
              <button onClick={saveUser} className="btn btn-success">
                Enviar
              </button>
            </div>
            </div>
          )}
        </div>
      );
}