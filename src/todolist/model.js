export const initialState = {
    todoArr: [
        // 'eat',
        // 'sleep',
        // 'play'
    ], // 待办事项
    inputInfo: '' // 输入信息
}

export const DELETE_ITEM = (state, index) => {
    let todoArr = state.todoArr;
    todoArr.splice(index, 1);
    return {
        ...state,
        todoArr
    }
}

export const ADD_ITEM = (state) => {
    let todoArr = state.todoArr;
    todoArr.push(state.inputInfo);
    return {
        ...state,
        todoArr
    }
}

export const INPUT_CHANGE = (state, value) => {
    return {
        ...state,
        inputInfo: value
    }
}

export const CLEAR_INPUT = (state) => {
    return {
        ...state,
        inputInfo: ''
    }
}