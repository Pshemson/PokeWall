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
            };
        }

        componentDidMount() {
            fetch(`https://pokeapi.co/api/v2/pokemon/?limit=200`)
                .then(r => r.json())
                .then(data => {
                    // tworze tablice z pobranych pokemonow (kazdy pokemon ma imie oraz url)
                    const pobranePokemony = data.results.map((e) => {
                        return {
                            name: e.name,
                            url: e.url,
                        }
                    });

                    // pobrane pokemony wrzucam do state'a
                    this.setState({
                        pokemony: pobranePokemony,
                        filteredPokemons: pobranePokemony,
                    });
                });
        }

        // po kliknieciu w pokemona na liscie odpala m.in fetcha z urlem tego pokemona (komponent Pokemony onlick na <li>)
        pobierzPokemona = (url) => {

            // czyscimy state pokemona oraz wlaczamy popupa
            this.setState({
                pokemon: {},
                showPopup: true,
            });

            // pobieramy dane pokemona
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

                    // wrzucamy danego pobranego popupa do state'a
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

        //Wyszukiwarka (funkcja odpalana onChange)
        searchPokemon = event => {
            // wartosc wpisywana w wyszukiwarce zapisuje do zmiennej
            const searchValue = event.target.value;

            // robie kopie wszystkich pokemonow i zapisuje do zmiennej
            const pokemony = this.state.pokemony.slice();

            // tworze zmienna (tablice) filteredPokemons w ktorej najpierw filtruje pokemony, ktorych nazwa jest zawarta w searchValue
            const filteredPokemons = pokemony.filter((pokemon) => {
                return pokemon.name.toLowerCase().includes(searchValue.toLowerCase());
                // a potem tworze z nich tablice
            }).map(function(pokemon) {
                return pokemon
            });

            // w state zapisuje wyszukiwana wartosc oraz aktualizuje filtrowane pokemony
            this.setState({
                searchValue : searchValue,
                filteredPokemons: filteredPokemons,
            });
        };

        render() {
            return (
                <div>
                    <Header
                        //przekazujemy do Headera  props o nazwie searchPokemon (do ktorego wrzucamy funkcje searchPokemon),
                        // w komponencie Header bedzie on dostepny pod nazwą: this.props.searchPokemon
                        searchPokemon={this.searchPokemon}

                        // do inputa searcha przekazujemy propsem wartość wygenerowaną w state (za pomoca funkcji searchPokemon)
                        searchValue={this.state.searchValue}
                    />

                    <Pokemony
                        pokemon={this.state.pokemon}
                        getPokemon={this.pobierzPokemona}
                        pokemonyLista={this.state.filteredPokemons}
                        showPopup={this.state.showPopup}
                        closePopup={this.closePopup}
                        searchValue={this.state.searchValue}
                    />
                    <Footer />
                    <ScrollBtn />
                </div>
            );
        }
    }

    ReactDOM.render(
        <App />,
        document.querySelector('#app'),
    );
});