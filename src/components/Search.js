import React from 'react';

class Search extends React.Component {
    state = { 
        query: '',
    }

    search = () => {
        console.log(this.state.query)
    }

    handleChange = (event) => {
        this.setState({
            query: event.target.value
        })
    }

    render() {
        return (
            <div>
            <form onSubmit={this.search}>
                <input
                type='text'
                name='query'
                onChange={this.handleChange}
                value={this.state.query} />
                <input type='submit' value='Submit'/>
            </form>
            </div>
        )
    }
}


export default Search;