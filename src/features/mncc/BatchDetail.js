import { Card, CardImg, CardText, CardBody, Col } from 'reactstrap';
import React from 'react';

const BatchDetail = ({ batch }) => {
    const { id, name, image, description } = batch

    return (
        <Col key={id} md='12' className='m-4'>
            <Card>
                <CardImg top src={image} alt={name} />
                <CardBody>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        </Col>
    )

}

export default BatchDetail