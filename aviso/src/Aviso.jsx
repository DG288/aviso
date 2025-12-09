import React, { useState, useEffect } from "react";
import './Aviso.css';

const Aviso = () =>{
    const [titulo, setTitulo] = useState('');
    const [subtitulo, setSubtitulo] = useState('');

    function cambiarTitulo(tituloNuevo) {
        setTitulo(tituloNuevo);
    };
    function cambiarSubtitulo(subtituloNuevo) {
        setSubtitulo(subtituloNuevo);
    };

    useEffect(() => {
        cambiarTitulo('Evento');
        cambiarSubtitulo('??????????????????');
    }, [])

    return (
        <div className="aviso">
            <div className="aviso-imagen">
                <img src="https://imgur.com/SeK6sum.png" alt="Recurso" />
            </div>

            <div className="aviso-texto">
                <h1 className="aviso-titulo">{titulo}</h1>
                <hr className="aviso-divider" />
                <p className="aviso-subtitulo">{subtitulo}</p>
            </div>
        </div>
    );
};

export default Aviso;
