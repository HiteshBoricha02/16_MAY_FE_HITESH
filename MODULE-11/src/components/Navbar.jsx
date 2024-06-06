import React from "react";
import { Row, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

function NavbarApp() {
    return (
        <div className="navbarr">
            <Container>
                <Row>
                    <div className=' col-md-2 col-sm-4 frontbtn'>
                        <div className="bg-success rounded-3 mt-3 mb-3">
                            <i className="fa fa-th-large fs-5 bg-success text-white col-2 ps-2 pt-2"></i>
                            <select className='browserbtn btn btn-sm btn-success col-10 mb-1'>
                                <option>Browse All Categaries</option>
                                <option>Fruits</option>
                                <option>Vagetables</option>
                            </select>
                        </div>
                    </div>
                    <Navbar collapseOnSelect expand="lg" className="col-md-8 col-sm-8 navigation">
                        <Container>
                            <Navbar.Brand href="#home" className="ms-md-2"><i className="fa fa-fire"></i> &nbsp; Hot Deals</Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="#">Home</Nav.Link>
                                    <Nav.Link href="#">About</Nav.Link>
                                    <Nav.Link href="#">About</Nav.Link>
                                    <NavDropdown title="Shop" id="collasible-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Fruits</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Vagetables</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Grocery</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Vendors" id="collasible-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Mega menu" id="collasible-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Vagetables</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Pasta</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Fruits</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.4">Frozen Vagetables</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.4">Cheese</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.4">Potato</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.4">Milk</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.4">carrots</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.4">Dired Fruits</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.4">Canned beans</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Blog" id="collasible-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Pages" id="collasible-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link href="#">Contact</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    <div className='col-md-2 d-flex callanytime pt-md-2' align="end">
                        <div>
                            <i className='fa fa-headphones fs-1'></i>
                        </div>
                        <div>
                            <h4 className="m-0 text-success">1900 - 888</h4>
                            <p className="helptext">24x7 Service center</p>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
}

export default NavbarApp;