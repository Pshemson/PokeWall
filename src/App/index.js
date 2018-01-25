import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header';
import Pokemony from '../Pokemony';
import Footer from '../Footer';
import ScrollBtn from '../ScrollToTop';


document.addEventListener('DOMContentLoaded', () => {
    class App extends React.Component {
        constructor() {
            super();
            this.state = {
                pokemony: [],
                searchValue: '',
                filteredPokemons: [],
                pokemon: {},
                showPopup: false,
                showPotentialPokemons: false,
            };
        }

        componentDidMount() {
            fetch(`https://pokeapi.co/api/v2/pokemon/?limit=200`)
                .then(r => r.json())
                .then(data => {
                    const pobranePokemony = data.results.map((e) => {
                        return {
                            name: e.name,
                            url: e.url,
                        }
                    });
                    this.setState({
                        pokemony: pobranePokemony
                    });
                });
        }


        ////Wyszukiwarka (while typing)
        //handleSearchChange = event => {
        //    const searchValue = event.target.value;
        //    const pokemonsy = this.state.pokemony.slice();
//
        //    const filteredPokemons = pokemony.filter((e) => {
        //        return e.name.toLowerCase().includes(searchValue.toLowerCase());
        //    }).map(function(e) {
        //        return e.name
        //    });
//
        //    this.setState({
        //        searchValue : searchValue,
        //        filteredPokemons : filteredPokemons,
        //        showPotentialPokemons: true,
        //    });
        //};

        ////wyszukiwanie cd
        //getPokemonPropositions = () => {
        //    if (this.state.searchValue.length >= 3 && this.state.potentialCountries.length > 0) {
        //        const pokemonPropositions = this.state.filteredPokemons.map((country, i, array) => {
        //            return <li
        //                onClick={event => this.handlePokemonClick(pokemon, i)}
        //                key={pokemon + i}>
        //                {pokemony}
        //            </li>;
        //        });
        //        return pokemonPropositions
        //    } else if (this.state.searchValue.length >= 3 && this.state.filteredPokemons.length < 1) {
        //        console.log("Nie ma takiego pokemona.");
        //        const noPokemon = (
        //            <li>
        //                Błędna nazwa!
        //            </li>
        //        );
        //        return noPokemon
        //    }
        //};


        pobierzPokemona = (url) => {
            this.setState({
                pokemon: {},
                showPopup: true,
            });
            fetch(url)
                .then(r => r.json())
                .then(data => {

                    const danePokemona =  {
                        name: data.name,
                        wagaPokemona: data.weight,
                        obrazek: data.sprites.front_shiny,
                        speedPoke: data.stats[0].base_stat,
                        defense: data.stats[3].base_stat,
                        attack: data.stats[4].base_stat,
                        healthPoints: data.stats[5].base_stat,
                        typesPokeFirst: data.types[0].type.name,
                        baseExp: data.base_experience,
                        pokeHeight: data.height,
                    };

                    this.setState({
                        pokemon: danePokemona,
                    });
                });
        };
        closePopup = () => {
            this.setState({
                showPopup: false,
            })
        };


        render() {
            return (
                <div>
                    <Header
                        handleSearchChange={event => this.handleSearchChange(event)}
                        filteredPokemons={this.state.filteredPokemons}
                        searchValue={this.state.searchValue}
                    />
                    <Pokemony
                        pokemon={this.state.pokemon}
                        getPokemon={this.pobierzPokemona}
                        pokemonyLista={this.state.pokemony}
                        showPopup={this.state.showPopup}
                        closePopup={this.closePopup}
                    />
                    <Footer />
                    <ScrollBtn/>
                </div>
            );
        }
    }

    ReactDOM.render(
        <App />,
        document.querySelector('#app'),
    );
});