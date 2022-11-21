import React from 'react';
import { Container, Row } from 'reactstrap';
import BatchList from '../features/mncc/BatchList';


const BatchPage = () => {

    return (
        <Container>
            <Row>
                <div className='batch-header'>
                    <h5> <b> ನಮ್ಮ ಹೆಮ್ಮೆಯ ವಿದ್ಯಾರ್ಥಿಗಳು</b>  </h5>
                </div>
            </Row>
            <Container >
                <BatchList />
            </Container>

        </Container>
    )
}


export default BatchPage