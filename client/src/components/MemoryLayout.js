import React from 'react';

const MemoryLayout = props => {
    return (
        <div>
            <img src={props.memory.img}>{props.memory.img}</img>
            <p>{props.memory.description}</p>
        </div>
    )
}

export default MemoryLayout;