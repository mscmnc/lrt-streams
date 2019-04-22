import * as actionTypes from '../actions/actionTypes';

const initialState = {
    error: null,
    loading: false,
    data: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_LIVE_VIDEO_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.GET_LIVE_VIDEO_SUCESSS:
            return {
                ...state,
                data: action.data,
                error: null,
                loading: false
            };
        case actionTypes.GET_LIVE_VIDEO_FAIL:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        default:
            return state;
    }
}

export default reducer;