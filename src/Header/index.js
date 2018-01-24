import React from 'react';
import Search from './Search';

class Header extends React.Component {
    render() {
        return (
            <div className="headerContainer">
                <h1>PokeWall</h1>
                <p>Wyszukaj pokemona i dowiedz się o nim więcej!</p>
                <Search />
            </div>
        );
    }
}

export default Header;
