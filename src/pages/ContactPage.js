import React from "react"
import { Container, Row, Col } from 'reactstrap'
import { PhoneContact, EmailContact, PhysicalAddress } from '../features/contact/Contactus'

const ContactPage = () => {
    return (
        <Container>
            <Row>
                <div className='get-in-touch'>
                    <div className='row batch-header'>
                        <h5> <b> ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಲು ಬಯಸುವಿರಾ? </b>  </h5>
                    </div>
                    <div className='row get-in-touch-content general-card'>
                        <h6> ನಿಮಗೆ ಹೆಚ್ಚಿನ ಮಾಹಿತಿ ಬೇಕಾದಲ್ಲಿ. ನೀವು ನಮ್ಮನ್ನು ಹೇಗೆ ತಲುಪಬಹುದು ಎಂಬುದು ಇಲ್ಲಿದೆ...</h6>
                    </div>
                </div>
                <Col className='contact-us'>
                    <PhoneContact />
                </Col>
                <Col className='contact-us'>
                    <EmailContact />
                </Col>
                <Col className='contact-us'>
                    <PhysicalAddress />
                </Col>
            </Row>
        </Container>
    )
}

export default ContactPage