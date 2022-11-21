import React from "react";
import { Container, Row, Col } from 'reactstrap';


const Footer = () => {
    return (
        <div className="footer">
            <Container >
                <Row>
                    <Col className='text-center footer-content'>
                        <h5>Social</h5>
                        <a
                            className='btn btn-social-icon btn-instagram'
                            href='http://instagram.com/'
                        >
                            <i className='fa fa-instagram' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-facebook'
                            href='https://www.facebook.com/profile.php?id=100087875831706'
                        >
                            <i className='fa fa-facebook' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-twitter'
                            href='http://twitter.com/'
                        >
                            <i className='fa fa-twitter' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-google'
                            href='https://www.youtube.com/channel/UCiY-IJZzMCSWCz2gvlbiMlQ'
                        >
                            <i className='fa fa-youtube' />
                        </a>
                    </Col>
                    {/* <Col  className='text-center'>
                        <a
                            role='button'
                            className='btn btn-link'
                            href='tel:+919743857309'
                        >
                            <i className='fa fa-phone' /> +919743857309
                        </a>
                        <br />
                        <a
                            role='button'
                            className='btn btn-link'
                            href='mailto:notreal@notreal.co'
                        >
                            <i className='fa fa-envelope-o' /> mncchosaritti@gmail.com
                        </a>
                    </Col> */}
                </Row>
            </Container>
        </div >
    )
}

export default Footer;