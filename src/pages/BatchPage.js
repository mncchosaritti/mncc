import { Container, Row } from 'reactstrap';
import React from 'react';
import BatchList from '../features/mncc/BatchList';


const BatchPage = () => {

    return (
        <div>
            <div className='batch-header'>
                <h2 > ನಮ್ಮ ಹೆಮ್ಮೆಯ ವಿದ್ಯಾರ್ಥಿಗಳು  </h2>
            </div>
            <BatchList />
        </div>
    )
}


export default BatchPage