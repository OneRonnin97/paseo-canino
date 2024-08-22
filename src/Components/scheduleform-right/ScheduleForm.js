import React, { useState, useEffect } from 'react';

import './scheduleform.css'


export default function ScheduleForm({ onAddWalk }) {
  const [date, setDate] = useState('');
  const [timeStart, setTimeStart] = useState('');
  const [timeEnd, setTimeEnd] = useState('');
  const [text, setText] = useState('');
  const [address, setAddress] = useState('');
  const [walks, setWalks] = useState([]); // Estado para la lista de paseos
  const [map, setMap] = useState(null); // Estado para el mapa
  const [marker, setMarker] = useState(null); // Estado para el marcador
  const [minDate, setMinDate] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWalk = { id: Date.now(), date, timeStart,timeEnd, text, address  };
    onAddWalk(newWalk); // Llamamos a la función onAddWalk
    setWalks([...walks, newWalk]); // Agregamos el nuevo paseo a la lista
    setDate('');
    setTimeStart('');
    setTimeEnd('');
    setText('');
    setAddress('');
  };

  const handleDeleteWalk = (walkId) => {
    setWalks(walks.filter((walk) => walk.id !== walkId));
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  useEffect(() => {
    const today = new Date();
    const minDateStr = today.toISOString().split('T')[0]; // Format: YYYY-MM-DD
    setMinDate(minDateStr);
  }, []);

  return (
    <div className='container'>

    
    <div className='form-paseo'>
        <h2 className='title-header'>Programar Paseo</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
            <label className='label-form'>Nombre Mascota: </label>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} required/>
        </div>
        <div className='form-group'>
          <label className='label-form'>Fecha: </label>
          <input type="date" value={date} 
          onChange={(e) => setDate(e.target.value)} 
          min={minDate} 
          required 
          />
        </div>
        <div className='form-group'>
          <label className='label-form'>Hora inicio: </label>
          <input type="time" value={timeStart} onChange={(e) => setTimeStart(e.target.value)} required />
        </div>
        <div className='form-group'>
          <label className='label-form'>Hora termino: </label>
          <input type="time" value={timeEnd} onChange={(e) => setTimeEnd(e.target.value)} required />
        </div>
        <div className='form-group'>
            <label className='label-form'>Dirección: </label>
            <input type="text" value={address} onChange={handleAddressChange} required />
          </div>
        <button type="submit">Agregar Paseo</button>
        
      </form>
      <ul className='lista-paseos'>
        <h3>Lista de Paseos</h3>
        {walks.map((walk) => (
          <li key={walk.id}>
            {walk.text} - {walk.date} - H.Inicio {walk.timeStart} - H.Termino {walk.timeEnd} 
            <button onClick={() => handleDeleteWalk(walk.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      
    </div>
    </div>
  );
}