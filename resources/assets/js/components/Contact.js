import React, {Component} from 'react';
import {browserHistory} from 'react-router';

class Contact extends Component {
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
    		<form className="form">
    			<div className="form_contact">
    			<div className="lf_contact">
	    			<input className="input_contact" type="text" required placeholder="Name"/>
	    			<input className="input_contact" type="email" required placeholder="Email"/>
	    			<input className="input_contact" type="telephone" required placeholder="Telephone"/>
	    			<input className="input_contact" type="text" required placeholder="Location"/>
	    		</div>
	    		<div className="rg_contact">
    				<textarea className="input_textarea" placeholder="Message"></textarea>
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