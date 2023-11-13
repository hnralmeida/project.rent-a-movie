// FUnções
import React from 'react';
import logo from '../../assets/em-construcao.png';

export function Home() {
    return (
        <body className="App-content">
            <div className='container-img'>
                <img src={logo} alt="logo" width={400}/>
            </div>
        </body>
    );
}