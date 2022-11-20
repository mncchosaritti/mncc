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
                    {/* <Row>
                        <Col>
                            <img className='logo-image' src={Logo} alt='MNCC' />
                        </Col>
                        <Col className="header-content">
                            <h1>ಶ್ರೀ ಮೃತ್ಯುಂಜಯ ನವೋದಯ ಕೋಚಿಂಗ್ ಕ್ಲಾಸ್(ರಿ) - ಹೊಸರಿತ್ತಿ</h1>
                        </Col>
                    </Row> */}
                    {/* <div className="container">
                        <div className="col-2">
                            <img className='logo-image' src={Logo} alt='MNCC' />
                        </div>
                        <div className="col-10 header-content" ><h1 className="header-title">ಶ್ರೀ ಮೃತ್ಯುಂಜಯ ನವೋದಯ ಕೋಚಿಂಗ್ ಕ್ಲಾಸ್(ರಿ) - ಹೊಸರಿತ್ತಿ</h1></div>

                    </div> */}

                </NavbarBrand>
                <div className="container">
                    <div className="row">
                        <div className="col-1">
                            <img className='logo-image' src={Logo} alt='MNCC' />
                        </div>
                        <div className="col-11 header-content" ><h3 className="header-title">ಶ್ರೀ ಮೃತ್ಯುಂಜಯ ನವೋದಯ ಕೋಚಿಂಗ್ ಕ್ಲಾಸ್(ರಿ) - ಹೊಸರಿತ್ತಿ</h3></div>
                    </div>

                </div>
                <NavbarToggler onClick={() => setMenu(!menuOpen)} />
                <Collapse isOpen={menuOpen} navbar>
                    <Nav className="ms-auto col-12" navbar onClick={() => setMenu(false)}>
                        <NavItem >
                            <NavLink className="nav-link" to='/'>
                                <i className='fa fa-home fa-lg' /> ಪರಿಚಯ
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to='/batches'>
                                <i className='fa fa-graduation-cap fa-lg' />  ವಿದ್ಯಾರ್ಥಿಗಳು
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to='/teachers'>
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