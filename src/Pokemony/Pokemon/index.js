import React from 'react';

class Pokemon extends React.Component {

    render() {
        if (this.props.showPopup === false) {
            return null;
        }

        return (
            <div className="pokemonContainer">
                <span style={{color: 'white', fontWeight: 'bold', textShadow: '3px 1px 9px #000'}} onClick={this.props.closePopup}>X</span>
                {!this.props.pokemonInfo.obrazek && <h4>Prosimy o cierpliwość...</h4>}
                {this.props.pokemonInfo.obrazek &&
                <div>
                    <h2 style={{margin: '0', color: 'white', textShadow: '3px 1px 9px #000'}}>Informacje:</h2>
                    <img style={{height: '200px', marginLeft: '22px'}} src={this.props.pokemonInfo.obrazek} />
                    <ul>
                        <li>Nazwa: <a className="pokeName">{this.props.pokemonInfo.name}</a></li>
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
                }
            </div>
        );
    }
}

export default Pokemon;