import React from "react"
import ForgotPswd from "../../Components/Pages/ForgotPswd";
import { Button, Modal } from "react-bootstrap"

class LogIn extends React.Component  {
  constructor(props){
  super(props)
  this.state={
    email : '',
    password : ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (e) =>{
    this.setState({
      [e.target.id] : e.target.value
    })
  }
  handleSubmit = (e) =>{
    e.preventDefault();
    console.log(this.state);
  }
  handle
  render(){
  return (
    <Modal show={this.props.modalOpen} onHide={this.props.handleModalOpen}>
      <form onSubmit = {this.handleSubmit}>
      <Modal.Header closeButton>
        <Modal.Title><h5>LogIn to your PeLable Account!</h5></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="form-group">
          <input type="text" id="email" className="form-control" placeholder="Email" onChange={this.propshandleChange} />
        </div>
        <div className="form-group">
          <input type="text" id="password" className="form-control" placeholder="password" onChange={this.handleChange} />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={this.props.handleModalOpen}>
          LogIn
        </Button>
        <div class="ml-auto"><a href="/forgetPassword" onClick={ForgotPswd}>Forgot Password</a></div>
      </Modal.Footer>
      </form>
    </Modal>
  );
}
}

export default LogIn