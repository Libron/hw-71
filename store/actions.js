import axios from '../axios-instance';

export const FETCH_GALLERY_REQUEST = 'FETCH_GALLERY_REQUEST';
export const FETCH_GALLERY_SUCCESS = 'FETCH_GALLERY_SUCCESS';
export const FETCH_GALLERY_FAILURE = 'FETCH_GALLERY_FAILURE';


export const fetchGalleryRequest = () => {
    return {type: FETCH_GALLERY_REQUEST};
};
export const fetchGallerySuccess = gallery => {
    return {type: FETCH_GALLERY_SUCCESS, gallery};
};
export const fetchGalleryFailure = error => {
    return {type: FETCH_GALLERY_FAILURE, error}
};

export const fetchGallery = () => {
    return (dispatch) => {
        dispatch(fetchGalleryRequest());
        axios.get('pics.json').then(response => {
            const children = response.data.data.children;
            const filteredData = children.map(item => ({id: item.data.id, thumbnail: item.data.thumbnail, title: item.data.title}));

            dispatch(fetchGallerySuccess(filteredData))
        }, error => {
           dispatch(fetchGalleryFailure(error));
        });
    }
};