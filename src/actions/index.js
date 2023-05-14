export const ADD_ONE = "ADD_ONE";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY"
export const SAVE_TO_MEMORY = "SAVE_TO_MEMORY"
export const MEMORY_RECALL = 'RECALL_MEMORY'


export const recallMemo = () => {

    return({type:MEMORY_RECALL})
}

export const addOne = () => {
    
    return({type:ADD_ONE});
}

export const save2memo = () => {
    return({type: SAVE_TO_MEMORY})
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const clearDisplay = () => {
    return ({type: CLEAR_DISPLAY})
}

export const changeOperation = (operator) => {
    return ({type: CHANGE_OPERATION, payload: operator})
} 