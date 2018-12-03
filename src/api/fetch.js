import * as fromFetch from '../actions/index';


export  const  fetchUser = async(name, password) =>{
    let response = await fetch('http://127.0.0.1:3333/login', {
        method: 'POST',
        mode: 'cors',
        headers:{
            'Access-Control-Allow-Origin':'*',
            "Content-type": "application/json"
        },
        body: JSON.stringify({"username": name, "password": password})
    });
    return response;
};





export const fetchSignin = (name, password, email) => async (dispatch) => {

    dispatch(fromFetch.fetchSigninStart(name, password, email));
    let response = await fetch('http://127.0.0.1:3333/registration', {
        method: 'POST',
        mode: 'cors',
        headers:{
            'Access-Control-Allow-Origin':'*',
            "Content-type": "application/json"
        },
        body: JSON.stringify({"username": name, "password": password, "email": email})
    });

    if (!response.ok) {

        //ERROR MESSAGE
        //let result = await response.json();
        //console.log("RESULT NOT OK: ",result[0].message);
        dispatch(fromFetch.fetchSigninError(name, password, email));
    } else {
        let result = await response.json();
        console.log("RESULT OK: ",result);
        dispatch(fromFetch.fetchSigninSuccess(name, password, email));
        //діспатчити успіх
    }
};