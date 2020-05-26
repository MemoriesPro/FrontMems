import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {login} from './actions/index';



const Login = (props) => {
    const {id} = props
    useEffect(() => {
        if(id){
            props.history.push('/memories')
        }
    }, [id])

    const [login, setLogin] = useState({username: '', password: ''});
    
    const changeHandler = (event) => {
        event.preventDefault();
        setLogin({
            ...login,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.login(login)
    };

    return (
        <div className = 'main-wrapper'>
            <div className = 'container'>
                <h1>Memories ScrapBook</h1>


                <div className = 'form-wrapper'>
                    <form onSubmit = {handleSubmit}>
                        <input 
                        className = 'username'
                        placeholder = 'username'
                        type = 'text'
                        value = {login.username}
                        name = 'username'
                        onChange = {changeHandler}
                        />
                        <input 
                        className = 'password'
                        placeholder = 'password'
                        type = 'text'
                        value = {login.password}
                        name = 'password'
                        onChange = {changeHandler}
                        />
                        <div className = 'button-wrapper'>
                            <button type = 'submit'>
                                Login
                            </button>
                        </div>
                        <span>
                            Or Sign Up Here! <Link to ='./Register'> Register </Link>
                        </span>
                    </form>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {...state}
}

export default connect(mapStateToProps, {login})(Login);