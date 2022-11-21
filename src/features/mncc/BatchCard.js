import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardImgOverlay, CardTitle, Container } from 'reactstrap';

const BatchCard = ({ batch }) => {
    const { id, image, name } = batch // Object de-structuring.
    return (
        <Link to={`${id}`}>
            <Container className='general-card'>
                <Card id={id} className="image-card">
                    <CardImg
                        width="auto"
                        src={image}
                        alt={name}
                    />
                    <CardImgOverlay>
                        <CardTitle className="cardTitle">
                            <p className='text-black'> {batch.name} </p>
                        </CardTitle>
                    </CardImgOverlay>
                </Card>
            </Container>
        </Link>
    )
}

export default BatchCard