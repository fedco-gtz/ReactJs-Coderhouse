import React from 'react';
import '../../../styles/OfficialStore.css'
import nike from '../../../images/nike.png';

function OfficialStore() {
    return (
        <>
            <h3 className='store'>TIENDA OFICIAL</h3>
            <a className='store' href="https://www.nike.com.ar/" target="_blank"><img alt='Nike' src={nike} /></a>
        </>
    );
}

export default OfficialStore;