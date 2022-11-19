import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Container, Navbar, Nav, NavItem, NavbarBrand, Row, Col, NavbarToggler, Collapse } from "reactstrap";
import Logo from '../../app/assets/saraswati.png'

const Header = () => {
    const [menuOpen, setMenu] = useState(false)
    return (
        <Navbar dark className='navbar' sticky='top' expand='md'>
            <Container >
                <NavbarBrand href='/'>
                    <Row>
                        <Col>
                            <img className='logo-image' src={Logo} alt='MNCC' />
                        </Col>
                        <Col className="header-content">
                            <h1>ಶ್ರೀ ಮೃತ್ಯುಂಜಯ ನವೋದಯ ಕೋಚಿಂಗ್ ಕ್ಲಾಸ್(ರಿ) - ಹೊಸರಿತ್ತಿ</h1>
                        </Col>
                    </Row>
                </NavbarBrand>
                <NavbarToggler onClick={() => setMenu(!menuOpen)} />
                <Collapse isOpen={menuOpen} navbar>
                    <Nav className="ms-auto" navbar onClick={() => setMenu(false)}>
                        <NavItem >
                            <NavLink className="nav-link" to='/'>
                                <i className='fa fa-home fa-lg' /> ಪರಿಚಯ
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to='/batches'>
                                <i className='fa fa-graduation-cap fa-lg' /> ಹಳೆಯ ವಿದ್ಯಾರ್ಥಿಗಳು
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to='/'>
                                <i className='fa fa-users fa-lg' /> ಶಿಕ್ಷಕ ವೃಂದ
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to='/contact'>
                                <i className='fa fa-address-card fa-lg' /> ಸಂಪರ್ಕಿಸಿ
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;