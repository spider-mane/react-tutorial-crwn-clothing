import React from "react";
import "./sign-in.scss";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import { signInWithGoogle, auth } from "../../firebase/utils";

class SignIn extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = e => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already got a gun</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            label='Email'
            name='email'
            handleChange={this.handleChange}
            required
            type='email'
            value={this.state.email}
          />

          <FormInput
            label='Password'
            name='password'
            handleChange={this.handleChange}
            required
            type='password'
            value={this.state.password}
          />

          <div className='buttons'>
            <CustomButton type='submit'>Sign in</CustomButton>

            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
