export default (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_USER':
            console.log("FETCH USER", action);
            return state;
        case 'FETCH_USER_ERROR':
            console.log("FETCH USER ERROR", action);
            return {
                ...state,
                action
            };
        case 'FETCH_USER_SUCCESS':
            console.log("FETCH USER SUCCESS", action);
            return {
                ...state,
                action
            };
        default:
            console.log("default: ", action, state);
            return {
            ...state
        };
    }
}