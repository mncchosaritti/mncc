import React from "react";
import { Container, Col } from "reactstrap";
import { VisionContainer, MissionContainer } from '../features/home/Home'

const HomePage = () => {
    return (
        <Container>
            <Col >
                <VisionContainer />
            </Col>
            <Col>
                <MissionContainer />
            </Col>
        </Container>
    )
}

export default HomePage