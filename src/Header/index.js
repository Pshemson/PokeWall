import React from 'react';
import Search from './Search';

class Header extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>PokeWall</h1>
                <Search />
            </div>
        );
    }
}

export default Header;
