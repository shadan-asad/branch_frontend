
export const getData = async () => {
    let response = await fetch("http://localhost:8080/branch_backend/fetch");
    let data = await response.json();
    return data;
    //To get the data values
    // var obj = data[i];
        // for(var key in obj) {
        //     var msg = obj["msg"]
        //     var userId = obj["userId"]
        //     var timestamp = obj["timestamp"]
        //     break;
        // }
}

export const getUsers = async () => {
    let response = await fetch("http://localhost:8080/branch_backend/getUsers");
    let users = await response.json();
    return users;
}