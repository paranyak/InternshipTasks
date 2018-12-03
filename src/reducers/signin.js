export default (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_SIGN_IN':
            console.log("FETCH USER SIGN IN", action);
            let newState = {
                ...state,
                request : true
            };
            return newState;
        case 'FETCH_SIGN_IN_ERROR':
            console.log("FETCH SSS USER ERROR", action);
            newState = {
                ...state,
                request : false,
                error: action.error,
                data : {username : action.name, password : action.password, email : action.email}
            };
            return newState;
        case 'FETCH_SIGN_IN_SUCCESS':
            console.log("FETCH SSS USER SUCCESS", action);
            newState = {
                ...state,
                request : false,
                error: false,
                data : {username : action.name, password : action.password, token: action.token, email : action.email}
            };
            return newState;
        default:
            console.log("default sign in: ", action, state);
            newState = {
                ...state
            };
            return newState;
    }
}