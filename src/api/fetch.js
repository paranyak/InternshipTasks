import * as fromFetch from '../actions/index';


export const fetchUser = (name, password) => async (dispatch) => {

    dispatch(fromFetch.fetchUserStart(name, password));
    //let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    let response_example = await fetch('http://127.0.0.1:3333/login', {
        method: 'POST',
        mode: 'cors',
        headers:{
            'Access-Control-Allow-Origin':'*',
            "Content-type": "application/json"
        },
        body: JSON.stringify({"username": name, "password": password})
    });
    let result_example = await response_example.json();
    console.log("TEMP: ",result_example);

    let response = {ok : true};
    if (!response.ok) {
        dispatch(fromFetch.fetchUserError(name, password));
        //діспатчити помилку
    } else {
        //let user = await (response).json();
        dispatch(fromFetch.fetchUserSuccess(name, password));
        //діспатчити юзера
    }
};