import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header';
import Pokemony from '../Pokemony';
import Footer from '../Footer';

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
            };
        }

        componentDidMount() {
            fetch(`https://pokeapi.co/api/v2/pokemon/?limit=100`)
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
                    />
                    <Pokemony
                        pokemon={this.state.pokemon}
                        getPokemon={this.pobierzPokemona}
                        pokemonyLista={this.state.pokemony}
                        showPopup={this.state.showPopup}
                        closePopup={this.closePopup}
                    />
                    <Footer />
                </div>
            );
        }
    }

    ReactDOM.render(
        <App />,
        document.querySelector('#app'),
    );
});