export default (state, action) => {
    switch (action.type) {
        case 'FETCH_USER':
            console.log("FETCH USER", action, state);
            let newState = {
                ...state,
                request : true
            };
            return newState;
        case 'FETCH_USER_ERROR':
            console.log("FETCH USER ERROR", action);
            newState = {
                ...state,
                request : false,
                error: action.error,
                data : {username : action.name, password : action.password}
            };
            return newState;
        case 'FETCH_USER_SUCCESS':
            console.log("FETCH USER SUCCESS", action);
            newState = {
                ...state,
                request : false,
                error: false,
                data : {username : action.name, password : action.password, token: action.token}
            };
            return newState;
        default:
            console.log("default: ", action, state);
            newState = {
                ...state
            };
            return newState;
    }
}