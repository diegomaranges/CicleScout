export const addGoal = (element) => {
    return {type: "ADDG", element: element}
}

export const deleteGoal = (element) => {
    return {type: "DELETEG", element: element}
}

export const cleanGoal = () => {
    return {type: "CLEARG"}
}
