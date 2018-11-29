import * as fromFetch from '../actions/index';


export const fetchUser = (name, password) => async (dispatch) => {

    dispatch(fromFetch.fetchUserStart(name, password));
    //let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
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