export default (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_SIGN_IN':
            console.log("FETCH USER SIGN IN", action);
            return state;

        case 'FETCH_SIGN_IN_ERROR':
            console.log("FETCH SSS USER ERROR", action);
            return {
                ...state,
                action
            };
        case 'FETCH_SIGN_IN_SUCCESS':
            console.log("FETCH SSS USER SUCCESS", action);
            return {
                ...state,
                action
            };
        default:
            console.log("default sign in: ", action, state);
            return {
                ...state
            };
    }
}