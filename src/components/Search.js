import React from 'react';

const Search = (props) => {
    return(
        <div>
            <input 
                type="text" 
                placeholder="Search here"
                onKeyUp={props.onInput}
            />
        </div>
    )
}

export default Search;