var get_query = function() {
    let uri = window.location.search.substring(1);
    let params = new URLSearchParams(uri);
    return params;
}