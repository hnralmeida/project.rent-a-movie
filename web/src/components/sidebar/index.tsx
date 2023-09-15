// FUnções
import React from 'react';
import logo from '../../assets/rentamovie.png';

//Navegaçao
import { Navigate, useNavigate } from "react-router-dom";

export function Sidebar() {

    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <button className="toggle-menu" onClick={toggleMenu}>
                {menuOpen ? 'Fechar Menu' : 'Abrir Menu'}
            </button>

            <div className={`sidebar ${menuOpen ? 'open' : ''}`}>
                <button className='button-nav' onClick={() => {
                    navigate("/")
                    setMenuOpen(false);
                }}>
                    Home
                </button>
                <button className='button-nav' onClick={() => {
                    navigate("atores")
                    setMenuOpen(false)
                }}>
                    Atores
                </button>
                <button className='button-nav' onClick={() => {
                    navigate("filmes")
                    setMenuOpen(false)
                }}>
                    Filmes
                </button>
            </div>
        </>
    )
}