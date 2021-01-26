import React, { useState } from 'react';

export function AddUser() {
    const [name, setName] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [address, setAddress] = useState('');
    const [birthDate, setBirthDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name);
        console.log(address);
        console.log(zipCode);
        console.log(birthDate);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <label>
                Nome:
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </label>
            <label>
                CEP:
                <input type="text" value={zipCode} onChange={e => setZipCode(e.target.value)} />
            </label>
            <label>
                Endereço:
                <input type="text" value={address} onChange={e => setAddress(e.target.value)} />
            </label>
            <label>
                Data de Nascimento:
                <input type="text" value={birthDate} onChange={e => setBirthDate(e.target.value)} />
            </label>
            <input type="submit" value="Enviar" />
            </form>
        </div>
      );
}