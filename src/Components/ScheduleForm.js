import React, { useState } from 'react';

export default function ScheduleForm({ onAddWalk }) {
  const [date, setDate] = useState('');
  const [timeStart, setTimeStart] = useState('');
  const [timeEnd, setTimeEnd] = useState('');
  const [text, setText] = useState('');
  const [walks, setWalks] = useState([]); // Estado para la lista de paseos

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWalk = { id: Date.now(), date, timeStart,timeEnd, text };
    onAddWalk(newWalk); // Llamamos a la función onAddWalk
    setWalks([...walks, newWalk]); // Agregamos el nuevo paseo a la lista
    setDate('');
    setTimeStart('');
    setTimeEnd('');
    setText('');
  };

  const handleDeleteWalk = (walkId) => {
    setWalks(walks.filter((walk) => walk.id !== walkId));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
            <label>Nombre Mascota: </label>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} required/>
        </div>
        <div>
          <label>Fecha:</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <div>
          <label>Hora inicio:</label>
          <input type="time" value={timeStart} onChange={(e) => setTimeStart(e.target.value)} required />
        </div>
        <div>
          <label>Hora termino:</label>
          <input type="time" value={timeEnd} onChange={(e) => setTimeEnd(e.target.value)} required />
        </div>
        <button type="submit">Agregar Paseo</button>
      </form>
      <ul>
        <h3>Lista de Paseos</h3>
        {walks.map((walk) => (
          <li key={walk.id}>
            {walk.text} - {walk.date} - H.Inicio {walk.timeStart} - H.Termino {walk.timeEnd} 
            <button onClick={() => handleDeleteWalk(walk.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}