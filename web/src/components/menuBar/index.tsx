// FUnções
import React from 'react';
import logo from '../../assets/rentamovie-darkmode.png';


//Navegaçao
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import MenuItem from '../menuItem';

export function MenuBar() {

    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = React.useState(false);

    // const toggleMenu = () => {
    //     setMenuOpen(!menuOpen);
    // };

    return (
        <>
            <div className="App-header">
                <Link to="/">
                    <img src={logo} className="App-logo" alt="logo" />
                </Link>
            </div>

            {/* <button className="toggle-menu" onClick={toggleMenu}>
                {menuOpen ? 'Fechar Menu' : 'Abrir Menu'}
            </button> */}

            <div className={`menubar ${menuOpen ? 'open' : ''}`}>

                {/* Home */}
                <MenuItem
                    menuName='Home'
                    className='button-nav'
                    onPress={() => {
                        navigate("/")
                        setMenuOpen(false);
                    }}
                />

                {/* Atores */}
                <MenuItem
                    menuName='Atores'
                    className='button-nav'
                    onPress={() => {
                        navigate("atores")
                        setMenuOpen(false)
                    }} />

                {/* Filmes */}
                <MenuItem
                    menuName='Filmes'
                    className='button-nav'
                    onPress={() => {
                        navigate("titulos")
                        setMenuOpen(false)
                    }} />

                {/* Diretores */}
                <MenuItem
                    menuName='Diretores'
                    className='button-nav'
                    onPress={() => {
                        navigate("diretores")
                        setMenuOpen(false)
                    }} />

                {/* Itens */}
                <MenuItem
                    menuName='Itens'
                    className='button-nav'
                    onPress={() => {
                        navigate("itens")
                        setMenuOpen(false)
                    }} />

                {/* Classes */}
                <MenuItem
                    menuName='Classes'
                    className='button-nav'
                    onPress={() => {
                        navigate("classes")
                        setMenuOpen(false)
                    }} />

            </div>
        </>
    )
}