import { Card, Container, CardTitle, CardBody, CardText, CardSubtitle } from 'reactstrap';
import React from 'react';

const Teacher = ({ teacher }) => {
    const { id, description, education, image, name, title } = teacher
    return (
        <Container key={id} className="col" >
            <Card className="general-card border-0">
                <img
                    alt={name}
                    width="50%"
                    src={image}
                />
                <CardBody>
                    <CardTitle className='teacher-card-title'>
                        <h4>{name}-({education})</h4>
                    </CardTitle>
                    <CardSubtitle className='teacher-card-subtitle'>
                        <h6> {title} </h6>
                    </CardSubtitle>
                    <CardText>
                        {description}
                    </CardText>
                </CardBody>
            </Card>
        </Container>
    )

}

export default Teacher