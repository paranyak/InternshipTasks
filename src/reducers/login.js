export default (state = {}, action) => {
    switch (action.type) {
        case 'SIMPLE_ACTION':
            console.log("SIMPLE ACTION LOGIN.JS", action.payload, action.type);
            return {
                result: action.payload
            }

        case 'FETCH_USER':
            console.log("FETCH USER", action);
            return state;
        default:
            console.log("default: ", action)
            return state
    }
}