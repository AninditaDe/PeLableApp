import React from "react";
//import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Container, NavbarBrand } from "react-bootstrap";

class MyFooter extends React.Component {
  render() {
    return (
      <div className="fixed-bottom">
        <Navbar bg="light" variant="light">
          <Container>
            <NavbarBrand>Footer</NavbarBrand>
            <footer class="app-footer">
              <div>
                <a href="https://PeLable.com">PeLable</a>
                <span>&copy; 2018 PeLable.</span>
              </div>
              <div class="ml-auto">
                <span>Powered by</span>
                <a href="https://PeLable.com">PeLable</a>
              </div>
            </footer>
          </Container>
        </Navbar>
      </div>
    );
  }
}
export default MyFooter;
