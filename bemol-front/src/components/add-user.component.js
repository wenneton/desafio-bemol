import React, { useState } from 'react';
import UserDataService from '../services/user.service';

export function AddUser() {
    const [submitted, setSubmitted] = useState(false);
    const [id, setId] = useState(null);
    const [name, setName] = useState('');
    const [zipCode, setZipCode] = useState('');
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
            <div>
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

              <div className="form-group">
                <label htmlFor="address">Endereço</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  required
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
  
              <button onClick={saveUser} className="btn btn-success">
                Enviar
              </button>
            </div>
          )}
        </div>
      );
}