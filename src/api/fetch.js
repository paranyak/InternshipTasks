export const fetchUser = async (name, password) => {
    let response = await fetch("http://127.0.0.1:3333/login", {
        method: "POST",
        mode: "cors",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-type": "application/json"
        },
        body: JSON.stringify({"username": name, "password": password})
    });
    return response;
};
export const fetchSignin = async (name, password, email) => {
    let response = await fetch("http://127.0.0.1:3333/registration", {
        method: "POST",
        mode: "cors",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-type": "application/json"
        },
        body: JSON.stringify({"username": name, "password": password, "email": email})
    });
    console.log("RESP:", response);
    return response;
};
