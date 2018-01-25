import React from 'react';

class Search extends React.Component {

    render() {

        return (
            <div className="searchContainer">
                <input placeholder="Wpisz nazwę..."
                       value={this.props.searchValue}
                       type = "text"
                       onChange={event => this.props.searchPokemon(event)}
                />
            </div>
        );
    }
}

export default Search;
