
export const placeRequest = (url, responseCB) => {
    var responseData = {};
    fetch(url).then(function (response) {
        return response.json();
    }).then(function (myJson) {
        responseData['data'] = myJson;
        responseData['error'] = false;
        responseCB(responseData)
    }).catch(e => {
        console.log(e.message);
        responseData['error'] = true;
        responseData['message'] = e.message;
        responseCB(responseData)
    });
};