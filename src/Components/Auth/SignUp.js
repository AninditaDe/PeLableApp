import React from "react"

import { Button, Modal } from "react-bootstrap"

class SignUP extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email : '',
            password : ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (e) => {
        this.setState({
               [e.target.id] : e.target.value
            })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    handle
    render() {
        return (
            <Modal show={this.props.modalOpen} onHide={this.props.handleModalOpen} onSubmit={this.handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title><h4>LogIn to your PeLable Account!</h4></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className="form-group">
                        <input type="text" id="firstName" className="form-control" placeholder="Enter your First Name here" onChange={this.propshandleChange} />
                    </div>
                    <div className="form-group">
                        <input type="text" id="email" className="form-control" placeholder="Email" onChange={this.propshandleChange} />
                    </div>
                    <div className="form-group">
                        <input type="text" id="password" className="form-control" placeholder="password" onChange={this.handleChange} />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={this.props.handleModalOpen}>
                        Submit
                </Button>
                    <div class="ml-auto">Already have an Account<a href="#LogIn">Sign In</a>here!</div>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default SignUP