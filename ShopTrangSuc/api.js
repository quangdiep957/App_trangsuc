let rootURL = 'http://shopson.somee.com/api/sanphams';
exports.all = () => {
    let url = `${rootURL}`;
    return fetch(url).then(
        (data)=>data.json()
        .catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
             // ADD THIS THROW error
              throw error;
            })
    )
}
exports.search = (q) => {
    let url = `${rootURL}?q=${q}`;
    return fetch(url).then(
        (data)=>data.json()
        .catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
             // ADD THIS THROW error
              throw error;
            })
    )
}
exports.searchloai = (q) => {
    let url = `http://shopson.somee.com/api/values?search=${q}`;
    return fetch(url).then(
        (data)=>data.json()
        .catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
             // ADD THIS THROW error
              throw error;
            })
    )
}
exports.detail = (id) => {
    let url = `${rootURL}/${id}`;
    return fetch(url).then(
        (data)=>data.json()
        .catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
             // ADD THIS THROW error
              throw error;
            })
    )
}
