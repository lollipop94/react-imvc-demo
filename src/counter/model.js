export const initialState = {
    cur: 0, // 当前显示数值
    num: 0 // 输入数值
}

export const UPDATE_NUM = (state, { offset }) => {
    const newNum = state.cur + offset;
    return {
        ...state,
        cur: newNum
    }
}

export const INPUT_NUM = (state, num) => {
    if (state.num === Number(num)) {
        return state;
    }
    return {
        ...state,
        num: Number(num)
    }
}