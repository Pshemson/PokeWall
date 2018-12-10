import React from 'react';
import Search from './Search';

class Header extends React.Component {
    render() {
        return (
            <div className="headerContainer">
              {/*<img src="src/images/wallPoke2.png"/>*/}
              <div className="headerContent">
                <h1>PokeWall</h1>
                <p>Wyszukaj pokemona i dowiedz się o nim więcej!</p>
              </div>
              <Search searchValue={this.props.searchValue} searchPokemon={this.props.searchPokemon} />
            </div>
        );
    }
}

export default Header;
