import React from 'react';
import TodoItem from './components/TodoItem';
import InputTodo from './components/InputTodo';

export default function View({ state, handlers }) {
    const { inputInfo, todoArr = [] } = state;
    const { handlersDeleteItem } = handlers;

    let todo = todoArr.map((item, index) => {
        // console.log(item);
        return (
            <TodoItem
                key={index}
                index={index}
                item={item}
                handlersDeleteItem={handlersDeleteItem}
            />
        )
    })

    return (
        <div>
            <div>
                <h3>What do you want to do?</h3>
                <InputTodo
                    inputInfo={inputInfo}
                    handlers={handlers}
                />
            </div>
            <div>
                {todo}
            </div>
        </div>
    )
}