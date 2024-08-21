import React from 'react';


export default function WalkList  ({ walks, onRemoveWalk }) {
    return (
        <ul>
          {walks.map((walk) => (
            <li key={walk.id}>
              <span>
                {walk.date} - {walk.time}
              </span>
              <button onClick={() => onRemoveWalk(walk)}>Eliminar</button>
            </li>
          ))}
        </ul>
      );
};