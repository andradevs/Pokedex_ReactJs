import React from 'react';
import './styles/PokeList.css';
import { pokeClasses } from '../PokeClass';
import PokeCell from './PokeCell';

const PokeList = ({handleOnClick}) => {
    const cells = pokeClasses.map(pokeClass => {
        return (
            <PokeCell
                key={pokeClass.id}
                pokeClass={pokeClass}
                handleOnClick={handleOnClick}
            />
        );
    });
    return (
        <section className="poke-list">
            {cells}
        </section>
    )
}

export default PokeList;
