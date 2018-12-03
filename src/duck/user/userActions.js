import { FETCH_USER, FETCH_USER_ERROR, FETCH_USER_SUCCESS, FETCH_SIGN_IN, FETCH_SIGN_IN_ERROR, FETCH_SIGN_IN_SUCCESS } from "../../actionTypes"


export const fetchUserStart = (name, password) => {
    console.log("Fetch start login");
    return {
        type: FETCH_USER,
        name,
        password
    };
};

export const fetchUserError = (name, password, error) => {
    console.log("Fetch error login", error);
    return {
        type: FETCH_USER_ERROR,
        name,
        password,
        error
    };
};

export const fetchUserSuccess = (name, password, token) => {
    console.log("Fetch success login", token);
    return {
        type: FETCH_USER_SUCCESS,
        name,
        password,
        token
    };
};

export const fetchSigninStart = (name, password, email) => {
    console.log("Fetch sign in start");
    return {
        type: FETCH_SIGN_IN,
        name,
        password,
        email
    };
};

export const fetchSigninError = (name, password, email, error) => {
    console.log("Fetch error in sign in");
    return {
        type: FETCH_SIGN_IN_ERROR,
        name,
        password,
        email,
        error
    };
};

export const fetchSigninSuccess = (name, password, email, token) => {
    console.log("Fetch success in sign in");
    return {
        type: FETCH_SIGN_IN_SUCCESS,
        name,
        password,
        email,
        token
    };
};