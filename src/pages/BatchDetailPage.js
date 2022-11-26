import { Card, CardImg, CardText, CardBody, Container } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { SelectById } from '../features/mncc/batchSlice';
import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import CommentList from '../features/comments/CommentList'

const BatchDetailPage = () => {
    const { batchId } = useParams()
    const selectedBatchById = SelectById(batchId)

    const [toggle, setToggle] = useState(false);

    const animatedStyle = useSpring({
        opacity: toggle ? 1 : 0,
        transform: toggle ? 'scale(1,1)' : 'scale(1,0)',
        config: { duration: 500 }
    });

    useEffect(() => {
        setToggle(true)
    }, [toggle])

    return (
        <animated.div style={animatedStyle}>

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
        </animated.div>
    )

}

export default BatchDetailPage