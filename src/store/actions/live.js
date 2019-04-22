import * as actionTypes from './actionTypes';
import axios from 'axios';

export const liveVideoSuccess = (data) => {
    return {
        type: actionTypes.GET_LIVE_VIDEO_SUCESSS,
        data: data
    }
}

export const liveVideoFail = (error) => {
    return {
        type: actionTypes.GET_LIVE_VIDEO_FAIL,
        error: error
    }
}

export const getLiveVideo = (channel) => {
    return dispatch => {
        dispatch({
            type: actionTypes.GET_LIVE_VIDEO_START
        });
        axios({ 
            method: 'GET',
            url: `https://lrt-api.herokuapp.com/live/${channel}`,
        }).then(function(response) {
            dispatch(liveVideoSuccess(response.data.response.data));
        }).catch(error => {
            dispatch(liveVideoFail(error));
        });
    }
}