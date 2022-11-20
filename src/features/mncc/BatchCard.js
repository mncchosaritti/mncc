import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const BatchCard = ({ batch }) => {
    const { id, image, name } = batch // Object de-structuring.
    return (
        <Link to={`${id}`}>
            <Card id={id} className="image-card">
                <CardImg
                    width="100%"
                    src={image}
                    alt={name}
                />
                <CardImgOverlay>
                    <CardTitle className="cardTitle">
                        <p className='text-black'> {batch.name} </p>
                    </CardTitle>
                </CardImgOverlay>
            </Card>
        </Link>
    )
}

export default BatchCard