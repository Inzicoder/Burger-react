import React, { Component } from 'react';
import "./sign-in.styles.scss";
import {auth, signInWithGoogle } from "../firebase.utils";


class SignIn extends Component {
   constructor(props) {
       super(props)
   
       this.state = {
        email:'inzi@gmail.com',
        password:'hey' 
       }
   }
   handleSubmit =async event => {
    event.preventDefault();

    const {email,password} =this.state

    try{
  await auth.signInWithEmailAndPassword(email,password);
  this.setState({ email: '', password: '' })
    }
catch(error){
console.log(this.error)
    }
 
}
   handleChange = event => {
    const { value, name } = event.target

    this.setState({ [name]: value })
}

    render() {
        return (
            <div className="sign-in">
                 <h2>I have already an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                <input type="email"
                value={this.state.email}
                label="email"
                name="email"
                handleChange={this.handleChange}
                required />
               
                
                  <input type="password"
                  value={this.state.password}
                  label="password"
                  name="password"
                  handleChange={this.handleChange}
                  required /> 

                  <button  className="buttons">SIGN IN </button>
                  <button className="buttons" onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</button>
                </form>
               </div>
        )
    }
}

export default SignIn
