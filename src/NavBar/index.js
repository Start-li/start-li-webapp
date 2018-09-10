import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button
} from 'reactstrap';

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
            <Navbar className="bar" expand="md">
                <NavbarBrand href="/">Start-li</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="#"><Button>Services</Button></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink><Button>Login</Button></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink><Button color="warning">Sign Up</Button></NavLink>
                    </NavItem>
                </Nav>
                </Collapse>
            </Navbar>
            </div>
        );
    }
}

export default NavBar;