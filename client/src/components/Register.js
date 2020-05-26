import React, { useState,useEffect } from "react";
import axios from "axios";
import {connect} from 'react-redux';
import {register} from './actions/index';


const size = {
  laptop: '1024px'
}
const device = {
  laptop: `(min-width: ${size.laptop})`
}



function Register(props) {
  const [register, setRegister] = useState({username: '', password: '' });
  const {id} = props
  useEffect(() => {
    if(id){
      props.history.push('/memories')
    }
  },[id])

  const handleSubmit = e => {
    e.preventDefault();
    props.register(register)
    
  };

  return (
    <div>
    <div>
    <h1>Register</h1>
      <div>
      
      <form className="formregister" onSubmit={handleSubmit}>
        
        <input className='inputregister'
          value={register.username}
          name="username"
          type="text"
          onChange={e => setRegister({...register, username: e.target.value})}
          placeholder="username"
        />
        <input className='inputregister'
          value={register.password}
          name="password"
          type="password"
          onChange={e => setRegister({...register, password: e.target.value})}
          placeholder="password"
        />
        <div>
        <button>
          Connect!
        </button>
        </div>
      </form>
    </div>
    </div>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {...state}
}
export default connect(mapStateToProps, {register})(Register);