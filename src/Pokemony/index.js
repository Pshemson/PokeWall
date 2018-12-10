import React from 'react';
import InfiniteLoader from 'react-infinite-loader'
import Pokemon from './Pokemon';

class Pokemony extends React.Component {
  handleVisit = () => {
   console.log('Load more pokemons...');
  };

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
                <span className="subheading"><h2>Lista POKEMONÓW</h2>
                    <p>Kliknij na pokemona, aby uzyskać więcej informacji.</p></span>
               <Pokemon pokemonInfo={this.props.pokemon} showPopup={this.props.showPopup} closePopup={this.props.closePopup}/>
                <ul className="pokemonsList">
                    {pokemonyLista.map((ele, i) => {
                        return <li key={i} onClick={event => getPokemon(ele.url)}>{ele.name}</li>;
                    })}
                </ul>
              <InfiniteLoader onVisited={ () => this.handleVisit() } />
            </div>
        );
    }
}

export default Pokemony;