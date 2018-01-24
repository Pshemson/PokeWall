import React from 'react';
import Pokemon from './Pokemon';

class Pokemony extends React.Component {
    render() {
        const { pokemonyLista = [], getPokemon } = this.props;

        if (!pokemonyLista.length) {
            return <h1>Wgrywanie pokemonów, proszę czekaj...</h1>
        }

        return (
            <div className="container">
                <h1>Lista Pokemonów</h1>
                <p>Kliknij na pokemona, aby uzyskać więcej informacji.</p>
               <Pokemon pokemonInfo={this.props.pokemon} showPopup={this.props.showPopup} closePopup={this.props.closePopup}/>
                <ul className="pokemonsList">
                    {pokemonyLista.map((ele, i) => {
                        return <li key={i} onClick={event => getPokemon(ele.url)}>{ele.name}</li>;
                    })}
                </ul>
            </div>
        );
    }
}

export default Pokemony;