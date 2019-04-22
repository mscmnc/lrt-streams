import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ReactPlayer from 'react-player'
import PropTypes from 'prop-types';

import * as actions from '../../store/actions/index';
import LogoButton from '../../components/LogoButton/LogoButton';
import Error from '../../components/Error/Error';
import Spinner from '../../components/Spinner/Spinner';

import './LivePage.scss';

const LivePage = props => {  

    useEffect(() => {
        props.onGetLiveVideo('ltv')
    }, []);

    const getVideoHandler = e => {
       props.onGetLiveVideo(e.target.id);
    }
    
    let screen = null;

    if(props.error) {
        screen = (
            <Error className="livePage_error" />
        );
    }

    if(props.loading) {
        screen = (
            <Spinner />
        );
    }

    if(props.data !== null && props.loading === false) {
        screen = (
            <ReactPlayer url={props.data.content} playing controls/> 
        );
    }

    return (
        <section className="container livePage">
            <div className="row justify-content-center livePage_header">            
                <h2>LRT Channels in one place. Choose one!</h2>
            </div>
            <div className="row justify-content-center livePage_television">
                <LogoButton logo='lrtTv' className="livePage_television_button" id='ltv' onClick={getVideoHandler}/>
                <LogoButton logo='lrtPlius' className="livePage_television_button" id='ltv2' onClick={getVideoHandler}/>
                <LogoButton logo='lrtLituanica' className="livePage_television_button" id='world' onClick={getVideoHandler}/>
            </div>
            <div className="row justify-content-center livePage_radio">            
                <LogoButton logo='lrtClassic' className="livePage_radio_button" id='klasika' onClick={getVideoHandler}/>
                <LogoButton logo='lrtRadio' className="livePage_radio_button" id='lr' onClick={getVideoHandler}/>
                <LogoButton logo='lrtOpus' className="livePage_radio_button" id='opus' onClick={getVideoHandler}/>
            </div>
            <div className="row justify-content-center livePage_player">
                {screen}
            </div>
        </section>
    );
  
}

const mapStateToProps = state => {
    return {
        error: state.error,
        loading: state.loading,
        data: state.data
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGetLiveVideo: (channel) => dispatch(actions.getLiveVideo(channel))
    };
};

LivePage.propTypes = {
    error: PropTypes.object,
    loading: PropTypes.bool,
    data: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(LivePage);
