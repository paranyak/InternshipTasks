export const fetchUserStart = (name, password) => {
    console.log("Fetch start in action");
    return {
        type: 'FETCH_USER',
        name, password
    }
};


export const fetchUserError = (name, password) => {
    console.log("Fetch error in action");
    return {
        type: 'FETCH_USER_ERROR',
        name, password
    }
};


export const fetchUserSuccess = (name, password) => {
    console.log("Fetch success in action");
    return {
        type: 'FETCH_USER_SUCCESS',
        name, password
    }
};