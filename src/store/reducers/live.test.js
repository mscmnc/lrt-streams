import reducer from './live';
import * as actionTypes from '../actions/actionTypes';

describe('Get Reducer states', () => {
    it('it should get data after success request', () => {
        expect(reducer({
            error: null,
            loading: false,
            data: null
        }, {
            type: actionTypes.GET_LIVE_VIDEO_SUCESSS,
            data: { data: 'some data'},
        })).toEqual({
            error: null,
            loading: false,
            data: { data: 'some data'}
        });
    });
    
    it('it should set erorr if there is an error', () => {
        expect(reducer({
            error: null,
            loading: false,
            data: null
        }, {
            type: actionTypes.GET_LIVE_VIDEO_FAIL,
            error: { error: 'some error'}
        })).toEqual({
            loading: false,
            data: null,
            error: { error: 'some error'}
        });
    });

    it('it should change spinner state after request sent', () => {
        expect(reducer({
            error: null,
            loading: false,
            data: null
        }, {
            type: actionTypes.GET_LIVE_VIDEO_START
  
        })).toEqual({
            error: null,
            loading: true,
            data: null
        });
    });
});