import React from 'react';
import ClassicLogo from '../../assets/img/LRT_Classic.png';
import LituanicaLogo from '../../assets/img/LRT_Lituanica.png';
import MainLRTLogo from '../../assets/img/LRT_Main.png';
import OpusLogo from '../../assets/img/LRT_OPUS.png';
import RadioLogo from '../../assets/img/LRT_RADIO.png';
import LRTLogo from '../../assets/img/LRT_TV.png';
import LRTPLIUSLogo from '../../assets/img/LRT_PLIUS.png';

import styles from './LogoButton.module.scss';

const LogoButton = props => {
    let img = null;
    if(props.logo === 'lrtClassic'){
        img = ClassicLogo;
    } else if (props.logo === 'lrtLituanica' ){
        img = LituanicaLogo;
    } else if (props.logo === 'lrtMain' ){
        img = MainLRTLogo;
    } else if (props.logo === 'lrtOpus' ){
        img = OpusLogo    
    } else if (props.logo === 'lrtRadio' ){
        img = RadioLogo;
    } else if (props.logo === 'lrtTv' ){
        img = LRTLogo;
    } else if (props.logo === 'lrtPlius' ){
        img = LRTPLIUSLogo;
    }

    return (
        <div className={props.className}>
            <div className={styles.logoButton}>
                <img id={props.id} src={img} alt={props.alt ? props.alt : 'logo'} onClick={props.onClick}/>
            </div>     
        </div>
    );
}

export default LogoButton;



