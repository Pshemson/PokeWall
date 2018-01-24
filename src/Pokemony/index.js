import React from 'react';
import Pokemon from './Pokemon';

class Pokemony extends React.Component {
    constructor() {
        super();
        this.state = {
            pokemon: {},
            showpopup: true,
        };
    }

    render() {
        const { pokemonyLista = [] } = this.props;

        const pobierzPokemona = (url) => {
            console.log(url);
            fetch(url)
                .then(r => r.json())
                .then(data => {

                    // fetch(data.game_indices[0].version.url)
                    //     .then(r => r.json())
                    //     .then(data => {
                    //         const nazwa =  data.names[0].name;
                    //         this.setState({nazwaChinska: nazwa});
                    //     });

                    const danePokemona =  {
                        name: data.name,
                        wagaPokemona: data.weight,
                        obrazek: data.sprites.front_shiny,
                        speedPoke: data.stats[0].base_stat,
                        defense: data.stats[3].base_stat,
                        attack: data.stats[4].base_stat,
                        healthPoints: data.stats[5].base_stat,
                        typesPokeFirst: data.types[0].type.name,
                        typesPokeSecond: data.types[1].type.name,
                        baseExp: data.base_experience,
                        pokeHeight: data.height,



                        // chinskaNazwa: this.state.nazwaChinska,
                    };
                    this.setState({
                        pokemon: danePokemona
                    });
                });
        };



        if (!pokemonyLista.length) {
            return <h1>Nie ma żadnych Pokemonów jeszcze, poczekaj...</h1>
        }


        const style = {
            cursor: 'pointer',
            border: '1px solid grey',
            display: 'block',
            height: '33px',
        }


        return (
            <div className="container">
                <h1>Lista Pokemonów</h1>
                <p>Kliknij na pokemona, aby uzyskać więcej informacji.</p>
               <Pokemon pokemonInfo={this.state.pokemon} />
                <ul style={{backgroundColor: '#69FF23'}}>
                    {pokemonyLista.map((ele, i) => {
                        return <li style={style}
                                   key={i} onClick={event => pobierzPokemona(ele.url)}>{ele.name}</li>;
                    })}
                </ul>
            </div>
        );
    }
}

export default Pokemony;