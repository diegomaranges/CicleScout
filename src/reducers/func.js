const initialArrG = [];
const initialAct = {};
const initialArrA = [];

export const arrayOfGoals = (state = initialArrG, action) => {
    console.log(state);
    switch (action.type) {
        case "ADDG":
            return state.concat(action.element);
        case "DELETEG":
            let index = state.findIndex(e => e.id === action.element)
            return state.length > 0 && index !== -1 ? state.filter(e => e.id !== action.element) : state;
        case "CLEARG":
            return [];
        default:
            return state;
    }
}

export const activities = (state = initialAct, action) => {
    console.log(state);
    switch (action.type) {
        case "SAVE":
            return state.concat(action.element);
        case "EDIT":
            let index = state.findIndex(e => e.id === action.element)
            return state.length > 0 && index !== -1 ? state.filter(e => e.id !== action.element) : state;
        case "CLEAN":
            return [];
        default:
            return state;
    }
}

export const arrayOfActivities = (state = initialArrA, action) => {
    console.log(state);
    switch (action.type) {
        case "ADDACT":
            return state.concat(action.element);
        case "DELETEACT":
            let index = state.findIndex(e => e.id === action.element)
            return state.length > 0 && index !== -1 ? state.filter(e => e.id !== action.element) : state;
        case "CLEARACT":
            return [];
        default:
            return state;
    }
}
