export const addElem = (element) => {
    return {type: "ADD", element: element}
}

export const deleteElem = (element) => {
    return {type: "DELETE", element: element}
}

export const cleanElems = () => {
    return {type: "CLEAR"}
}
