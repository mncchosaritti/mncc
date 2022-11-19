import { Container, Row } from 'reactstrap';
import React from 'react';
import BatchList from '../features/mncc/BatchList';


const BatchPage = () => {

    return (
        <Container>
            <div className='batch-header'>
                <Row>
                    <h2 > ನಮ್ಮ ಹೆಮ್ಮೆಯ ವಿದ್ಯಾರ್ಥಿಗಳು  </h2>
                </Row>
            </div>
            <BatchList />
        </Container>
    )
}


export default BatchPage