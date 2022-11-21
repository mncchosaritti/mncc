import { Card, CardImg, CardText, CardBody, Container } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { SelectById } from '../features/mncc/batchSlice';
import React from 'react';
import CommentList from '../features/comments/CommentList'

const BatchDetailPage = () => {
    const { batchId } = useParams()
    const selectedBatchById = SelectById(batchId)
    return (
        <Container>
            <div className='batch-header'>
                <h3><b>ನಮ್ಮ {selectedBatchById.name} ರ ವಿದ್ಯಾರ್ಥಿಗಳು. </b></h3>
            </div>
            <Container key={selectedBatchById.id} >
                <Card>
                    <CardImg top src={selectedBatchById.image} alt={selectedBatchById.name} />
                    <CardBody>
                        <CardText>{selectedBatchById.description}</CardText>
                    </CardBody>
                </Card>
                <CommentList batchId={batchId} />
            </Container>
        </Container>
    )

}

export default BatchDetailPage