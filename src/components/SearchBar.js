import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }
    render() {
        // Create a new input element and return value on every onChange event
        // Note: value of the input is this.state.term
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event => this.setState({ term: event.target.value })} />
            </div>
        );
    }
}

export default SearchBar;