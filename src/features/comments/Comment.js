import { CardHeader, Col, Card, CardBody, CardText } from 'reactstrap';
import React from 'react'

const Comment = ({ comment }) => {
    const { id, text, author } = comment
    return (
        <Col >
            <Card className="my-2" key={id}>
                <CardHeader>
                    <h5> <b> ವಿದ್ಯಾರ್ಥಿ/ಪೋಷಕರು  :</b> {author}</h5>
                </CardHeader>
                <CardBody>
                    <CardText>
                        <h6> <b> ಅನಿಸಿಕೆ : </b> {text} </h6>
                    </CardText>
                </CardBody>
            </Card>
        </Col>
    )
}

export default Comment