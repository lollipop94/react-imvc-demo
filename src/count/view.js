import React from 'react';

export default function View({ state, handlers }) {
    const { handleChange, handleInput } = handlers;
    const { cur, num } = state;
    return (
        <div>
            <div>
                <span>Count: </span>
                <span>{cur}</span>
            </div>
            <div>
                <button onClick={() => { handleChange(-1) }}>click-1</button>
                <button onClick={() => { handleChange(1) }}>click+1</button>
            </div>
            <div>
                Enter a number: <input type="number" value={num} onChange={handleInput} />
                <button onClick={() => { handleChange(num) }}>click</button>
            </div>
        </div>
    )
}