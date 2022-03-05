const initialState = [];

const change = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            return state.concat(action.element);
        case "DELETE":
            let index = state.findIndex(e => e.id === action.element)
            return state.length > 0 && index !== -1 ? state.filter(e => e.id !== action.element) : state;
        case "CLEAR":
            return [];
        default:
            return state;
    }
}

export default change;
