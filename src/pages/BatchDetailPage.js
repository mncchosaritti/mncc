import { Card, CardImg, CardText, CardBody, Container, Col, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { SelectById } from '../features/mncc/batchSlice';
import React from 'react';
import CommentList from '../features/comments/CommentList'

const BatchDetailPage = () => {
    const { batchId } = useParams()
    const selectedBatchById = SelectById(batchId)
    return (
        <div key={selectedBatchById.id} md='12' className='m-4'>
            <Card>
                <CardImg top src={selectedBatchById.image} alt={selectedBatchById.name} />
                <CardBody>
                    <CardText>{selectedBatchById.description}</CardText>
                </CardBody>
            </Card>
            <CommentList batchId={batchId} />
        </div>
    )

}

export default BatchDetailPage