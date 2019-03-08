import {FETCH_GALLERY_FAILURE, FETCH_GALLERY_REQUEST, FETCH_GALLERY_SUCCESS} from "./actions";

const initialState = {
    loading: false,
    error: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_GALLERY_REQUEST:
            return {...state, loading: true};
        case FETCH_GALLERY_SUCCESS:
            return {...state, loading: false, gallery: action.gallery};
        case FETCH_GALLERY_FAILURE:
            return {...state, loading: false, error: action.error};
        default:
            return state;
    }
};

export default reducer;