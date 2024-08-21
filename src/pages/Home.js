import React from 'react';
import { Link } from 'react-router-dom';

export default function Home () {
    return (
        <div>
            <h2>Bienvenido a la App de Paseos Caninos</h2>
            <Link to="/schedule">Programar un Paseo</Link>
        </div>
    );
};