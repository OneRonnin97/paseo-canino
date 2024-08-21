import React from 'react';
export default function WalkItem  ({ walk, removeWalk })  {
    return (
        <div>
            <span>{walk.date} a las {walk.time}</span>
            <button onClick={() => removeWalk(walk)}>Eliminar</button>
        </div>
    );
};