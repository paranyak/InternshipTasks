export default (state, action) => {
    switch (action.type) {
        case "FETCH_LOGIN":
            let login = {...state.login, request: true};
            let newState = {
                ...state,
                login
            };
            return newState;
        case "FETCH_LOGIN_ERROR":
            login = {
                ...state.login, request: false,
                error: action.error,
                data: {username: action.name, password: action.password}
            };
            newState = {
                ...state,
                login
            };
            return newState;
        case "FETCH_LOGIN_SUCCESS":
            login = {
                request: false,
                error: false,
                data: {username: action.name, password: action.password, token: action.token}
            };
            newState = {
                ...state,
                login
            };
            return newState;
        case "FETCH_SIGN_IN":
            console.log("FETCH USER SIGN IN", action);
            let signin = {...state.signin, request: true};
            newState = {
                ...state,
                signin
            };
            return newState;
        case "FETCH_SIGN_IN_ERROR":
            console.log("FETCH SSS USER ERROR", action);
            signin = {
                ...state.signin, request: false,
                error: action.error,
                data: {username: action.name, password: action.password, email: action.email}
            };
            newState = {
                ...state,
                signin
            };
            return newState;
        case "FETCH_SIGN_IN_SUCCESS":
            console.log("FETCH SSS USER SUCCESS", action);
            signin = {
                ...state.signin, request: false,
                error: false,
                data: {username: action.name, password: action.password, token: action.token, email: action.email}
            };
            newState = {
                ...state,
                signin
            };
            return newState;
        default:
            newState = {
                ...state
            };
            return newState;
    }
};
