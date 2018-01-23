import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header';
import Map from '../Map';
import Pokemony from '../Pokemony';

document.addEventListener('DOMContentLoaded', () => {
    class App extends React.Component {
        constructor() {
            super();
            this.state = {
                pokemony: [],
            };
        }

        componentDidMount() {
            fetch(`https://pokeapi.co/api/v2/pokemon/?limit=1000`)
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

        render() {
            return (
                <div>
                    <Header />
                    <Pokemony pokemonyLista={this.state.pokemony} />
                    <Map />
                </div>
            );
        }
    }

    ReactDOM.render(
        <App />,
        document.querySelector('#app'),
    );
});