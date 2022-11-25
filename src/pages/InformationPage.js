import React from "react";
import { EnteranceExam, Facilities, ThingsToBring } from "../features/information/Information";
import { Container, Col, Row } from "reactstrap";

const InformationPage = () => {

    return (
        <Container>
            <Row>
                <Row>
                    <EnteranceExam />
                </Row>
                <Row >
                    <Facilities />
                </Row>
                <Row >
                    <ThingsToBring />
                </Row>
            </Row>
        </Container>
    )
}

export default InformationPage