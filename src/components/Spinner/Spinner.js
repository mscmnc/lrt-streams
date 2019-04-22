import React from 'react';
import styles from './Spinner.module.scss';

const Spinner = () => (
    <div className={styles.lds_dual_ring}></div>  
);

export default Spinner;