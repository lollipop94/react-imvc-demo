import React from 'react';

export default ({ index, item, handlersDeleteItem }) => {
    return (
        <li>
            {item}
            <button onClick={() => { handlersDeleteItem(index) }}>delete</button>
        </li>
    )
}