import React from 'react';

export default ({ inputInfo, handlers }) => {
    const { handlerAddItem, handlerInput } = handlers;
    return (
        <div>
            <input
                type="text"
                value={inputInfo}
                placeholder="Enter an event"
                onChange={handlerInput} />
            <button onClick={handlerAddItem}>add</button>
        </div>
    )
}