import React, {Component} from 'react';
import {browserHistory} from 'react-router';

class Contact extends React.Component {
  constructor(props){
    super(props);
    this.state = {Name: '', Email: '', Telephone: '', Location: '', Message: ''};

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeTelephone = this.handleChangeTelephone.bind(this);
    this.handleChangeLocation = this.handleChangeLocation.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChangeName(e){
    this.setState({
      name: e.target.value
    })
  }
  handleChangeEmail(e){
    this.setState({
      email: e.target.value
    })
  }
  handleChangeTelephone(e){
    this.setState({
      telephone: e.target.value
    })
  }
  handleChangeLocation(e){
    this.setState({
      location: e.target.value
    })
  }
  handleChangeMessage(e){
    this.setState({
      message: e.target.value
    })
  }
  handleSubmit(e){
    e.preventDefault();
    const contact = {
      name: this.state.name,
      email: this.state.email,
      telephone: this.state.telephone,
      location: this.state.location,
      message: this.state.message,
    }
    let uri = '/sendMail';
    let token = document.head.querySelector('meta[name="csrf-token"]');
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
    axios.post(uri, contact)
    .then(function (response) {
      console.log(response.data);
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.headers);
      console.log(response.config);
    })
    .catch(function (error) {
    console.log(error);
    });
  }
  render(){
    return (
      <div className="container standart contact">
      	<h1 className="title1">
        	GET IN TOUCH
    	</h1>
    	<p className="standart_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
        </p>
    	<div className="wrapper_input row standart">
    		<form className="form" onSubmit={this.handleSubmit}>
    			<div className="form_contact">
    			<div className="lf_contact">
	    			<input className="input_contact" type="text" required placeholder="Name" onChange={this.handleChangeName}/>
	    			<input className="input_contact" type="email" required placeholder="Email" onChange={this.handleChangeEmail}/>
	    			<input className="input_contact" type="telephone" required placeholder="Telephone" onChange={this.handleChangeTelephone}/>
	    			<input className="input_contact" type="text" required placeholder="Location" onChange={this.handleChangeLocation}/>
	    		</div>
	    		<div className="rg_contact">
    				<textarea className="input_textarea" placeholder="Message" onChange={this.handleChangeMessage}></textarea>
    			</div>
    			</div>
    			<input className="btn_submit" type="submit" value="SEND"/>
		    </form>
    	</div>
    	<h4>
    		FOLLOW US ON INSTAGRAM
    	</h4>
    	<h5>
			<a href="https://www.instagram.com/olena.varchuk/">@olena.varchuk</a>
      	</h5>
      </div>
    )
  }
}



export default Contact;
