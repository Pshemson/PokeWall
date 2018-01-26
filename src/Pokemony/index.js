import React from 'react';
import Pokemon from './Pokemon';

class Pokemony extends React.Component {
    render() {
        const { pokemonyLista = [], getPokemon, searchValue } = this.props;



        if (!pokemonyLista.length && searchValue) {
            return <h1>Nie ma takich pokemonów...</h1>
        }

        if (!pokemonyLista.length) {
            return <h1>Wgrywanie pokemonów, proszę czekaj...</h1>
        }

        return (
            <div className="container">
                <span className="subheading"><h1>Lista POKEMONÓW</h1>
                    <p>Kliknij na pokemona, aby uzyskać więcej informacji.</p></span>
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