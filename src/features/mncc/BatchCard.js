import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const BatchCard = ({ batch }) => {

    const { id, image, name } = batch // Object de-structuring.
    return (
        <Card id={id} className="image-card">
            <CardImg
                width='100%'
                src={image}
                alt={name}
            />
            <CardImgOverlay>
                <CardTitle className="cardTitle">
                    <p className='text-black'> {batch.name} </p>
                </CardTitle>
            </CardImgOverlay>
        </Card>
    )
}

export default BatchCard