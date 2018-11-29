export default (state = {}, action) => {
    switch (action.type) {
        case 'SIMPLE_ACTION':
            console.log("SIMPLE ACTION LOGIN.JS", action.payload, action.type);
            return {
                result: action.payload
            }
        default:
            return state
    }
}