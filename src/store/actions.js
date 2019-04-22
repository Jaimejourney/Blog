export const FETCH_DATA_BEGIN = 'FETCH_DATA_BEGIN';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const fetchDataBegin = () => ({type: FETCH_DATA_BEGIN});

export const fetchDataSuccess = products => ({type: FETCH_DATA_SUCCESS, payload: {
        products
    }});

export const fetchDataFailure = error => ({type: FETCH_DATA_FAILURE, payload: {
        error
    }});

export function fetchProducts() {
    return dispatch => {
        dispatch(fetchDataBegin());
        return fetch("https://blogarticle-a550e.firebaseio.com/article.json")
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                dispatch(fetchDataSuccess(json));
            })
            .catch(error => dispatch(fetchDataFailure(error)));
    };
}


// Handle HTTP errors since fetch won't.
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}