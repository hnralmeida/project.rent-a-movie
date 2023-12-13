import React, { useState } from 'react';
import listTitle from '../../services/listTitle';

const HomeSearch = () => {

    // Dados do servidor
    const [listSelected, setListSelected] = useState<any[]>([]);

    // Dados da pesquisa
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('title');

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFilter(event.target.value);
    };

    const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Perform search based on searchTerm and filter
        listTitle().then((title) => {
            setListSelected(title);
        });
    };

    return (
        <div className='column-content'>
            <form onSubmit={handleSearchSubmit} >
                <div className='homeSearch'>
                    <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Procurar na locadora..." />
                    <select value={filter} onChange={handleFilterChange}>
                        <option value="title">Filme</option>
                        <option value="actor">Ator</option>
                        <option value="director">Diretor</option>
                    </select>
                </div>
                <div className='button-td-div'>
                    <button type="submit" className='submit-button '>Search</button>
                </div>
            </form>

            <div className='movie-list'>
                {listSelected.map((movie) => (
                    <div className='movie-list-item'>
                        <div className='movie-list-item-title'>{movie.name} ({movie.year})</div>
                        <div className='movie-list-item-synopsis'>{movie.synopsis}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeSearch;
