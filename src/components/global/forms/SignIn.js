/**
 * Sign in form
 */
import React from 'react';

// Material ui
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import {login,currentUser} from '../../../firebase/auth';

export default class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           email:null,
           password:null
        };
     }

     handleChange=(e)=>{
         this.setState({
             [e.target.name]:e.target.value
         })
     }
     loginOp=()=>{
        login(this.state.email,this.state.password).catch(e=>alert(e.message))
        console.log(currentUser())
     }

    render() {
        return (
            <div>
                <h4>user sign in</h4>
                <form>
                    <div>
                        <TextField
                            required
                            id="standard-email"
                            value={this.state.email || ''}
                            name="email"
                            label="email"
                            className="iron-form-input-wrap"
                            type="email"
                            autoComplete="current-email"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="mb-15">
                        <TextField
                            required
                            id="standard-password-input"
                            value={this.state.password  || ''}
                            name="password"
                            label="Password"
                            className="iron-form-input-wrap"
                            type="password"
                            onChange={this.handleChange}
                        //autoComplete="current-password"
                        />
                    </div>
                    <div className="d-sm-flex justify-content-between align-items-center mb-sm-10 mb-20">
                        <span className="d-inline-block"><Link to="/forget-password">Forgot Password?</Link></span>
                    </div>
                    <Button type="submit" component={Link} to="/" className="button btn-active btn-lg mb-25"
                    onClick={this.loginOp}>
                        sign in
                    </Button>
                    <p className="mb-0">Don't have an account? <Link to="/sign-up">Click here to create one</Link></p>
                </form>
            </div>
        )
    }
}