import * as fromFetch from '../actions/index';


export const fetchUser = (name, password) => async (dispatch) => {

    dispatch(fromFetch.fetchUserStart(name, password));
    let response = await fetch('http://127.0.0.1:3333/login', {
        method: 'POST',
        mode: 'cors',
        headers:{
            'Access-Control-Allow-Origin':'*',
            "Content-type": "application/json"
        },
        body: JSON.stringify({"username": name, "password": password})
    });

    if (!response.ok) {
        dispatch(fromFetch.fetchUserError(name, password));
        //діспатчити помилку
    } else {
        let result = await response.json();
        console.log("RESULT OK: ",result);
        dispatch(fromFetch.fetchUserSuccess(name, password, result.token));
        //діспатчити усіх
    }
};