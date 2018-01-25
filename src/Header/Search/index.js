import React from 'react';

class Search extends React.Component {

    render() {
        return (
            <div className="searchContainer">
                <input
                    placeholder="Wpisz nazwę..."

                    // funkcja searchPokemon w App jest odpalana przy kazdej zmianie (onChange) w inpucie
                    // (ona tez generuje this.props.searchValue)
                    onChange={event => this.props.searchPokemon(event)}

                    // wartosc wpada tu ze state'a z App (przekazana w propsie najpierw do Header a potem do Search)
                    value={this.props.searchValue}
                    type = "text"

                />
            </div>
        );
    }
}

export default Search;
