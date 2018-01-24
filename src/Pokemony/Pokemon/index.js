import React from 'react';

class Pokemon extends React.Component {
    constructor() {
        super();
        this.state = {
            showpopup: true,
        };
    }


    handleClick = (e) => {
        this.setState({
            showpopup: false,
        })
    }

    render() {

        if (!this.props.pokemonInfo.wagaPokemona) {
            return null;
        }

        const popap = {
            display: this.state.showpopup ? 'block' : 'none',
        }

        return (
            <div style={popap} className="pokemonContainer">
                <span onClick={this.handleClick}>X</span>
                <h2 style={{margin: '0'}}>Informacje:</h2>
                <img src={this.props.pokemonInfo.obrazek} />
                <ul>
                    <li>Nazwa: {this.props.pokemonInfo.name}</li>
                    <li>Szybkość: {this.props.pokemonInfo.speedPoke}</li>
                    <li>Ochrona: {this.props.pokemonInfo.defense}</li>
                    <li>Siła ataku: {this.props.pokemonInfo.attack}</li>
                    <li>Punkty zdrowia: {this.props.pokemonInfo.healthPoints}</li>
                    <li>Waga: {this.props.pokemonInfo.wagaPokemona}</li>
                    <li>Wielkość: {this.props.pokemonInfo.pokeHeight}</li>
                    <li>Doświadczenie początkowe: {this.props.pokemonInfo.baseExp}</li>
                    <li>Typ: {this.props.pokemonInfo.typesPokeFirst} {this.props.pokemonInfo.typesPokeSecond}</li>
                </ul>
            </div>
        );
    }
}

export default Pokemon;