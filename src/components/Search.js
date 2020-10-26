import React from 'react';

const search = (props) => {
    return(
        <div>
            <input 
                type="text" 
                placeholder="Search here"
                onKeyUp={props.onInput}
            />
            <input type="button" value="Search"/>
        </div>
    )
}

export default search;