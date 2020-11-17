import React from "react";
import Logo from "../../Images/Logo.jpg";
//import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";
import LogIn from "../Auth/LogIn";
//import SignUp from "../Auth/SignUp"

const ImgStyles = {
  height: "30px",
  width: "30px",
};
class PeLableNav extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      modalOpen: false,
    };
    this.handleModalOpen = this.handleModalOpen.bind(this);
  }
  handleModalOpen = () => {
    this.setState((prevState) => {
      return {
        modalOpen: !prevState.modalOpen,
      };
    });
  };
  render() {
    return (
      <div>
        <Navbar class="navbar navbar-expand-lg navbar-light bg-light">
          <Navbar.Brand href="#home">
            <img
              src={Logo}
              style={ImgStyles}
              alt="logo"
              className="d-inline-block align-top"
            />
            {"PeLableTeam"}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                {" "}
                <a
                  href="/login"
                  onClick={this.handleModalOpen}
                  className="nav-link"
                >
                  LogIn
                </a>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <a href="/signup" className="nav-link">
                  SignUp
                </a>
              </Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <LogIn
          modalOpen={this.state.modalOpen}
          handleModalOpen={this.handleModalOpen}
        />
      </div>
    );
  }
}

export default PeLableNav;
