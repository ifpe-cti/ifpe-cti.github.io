
export default (state = [], action) => {
    switch (action.type) {
        case 'GENERATE_LIST_REPOSITORY':
            return { ...state, list: action.payload }
        case 'asdasd':
            return { ...state, nameNew: " Henrique"}
        default:
            return state
    }
}