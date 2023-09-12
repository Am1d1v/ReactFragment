import React from "react";

const Card = ({firstname}) => {

    return (
        <React.Fragment>
            <h1>{firstname}</h1>
            <h3>Text</h3>
            <button>Click</button>
        </React.Fragment>
    )
}

export default Card;