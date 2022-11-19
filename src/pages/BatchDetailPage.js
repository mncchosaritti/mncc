import { Card, CardImg, CardText, CardBody, Container, Col } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { SelectById } from '../features/mncc/batchSlice';
import React from 'react';

const BatchDetailPage = () => {
    const { batchId } = useParams()
    const selectedBatchById = SelectById(batchId)

    return (
        <Container key={selectedBatchById.id} md='12' className='m-4'>
            <Col>
                <Card>
                    <CardImg top src={selectedBatchById.image} alt={selectedBatchById.name} />
                    <CardBody>
                        <CardText>{selectedBatchById.description}</CardText>
                    </CardBody>
                </Card>
            </Col>
        </Container>
    )

}

export default BatchDetailPage