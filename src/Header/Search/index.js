import React from 'react';

class Search extends React.Component {

    render() {
        //Pokazuje się kiedy dane są ładowane
        //if (this.props.pokemony.length <= 1) {
        //    return <span>Ładowanie...</span>
        //}



        return (
            <div className="searchContainer">
                <input placeholder="Wpisz nazwę..."
                       value={this.props.searchValue}
                       type = "text"
                       onChange={this.props.handleSearchChange}
                />
                <ul>



                </ul>
            </div>
        );
    }
}

export default Search;
