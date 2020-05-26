import axiosWithAuth from '../../utils/axiosWithAuth';
import axios from 'axios';


export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
///////
export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
///////
export const LOADMEMORIES_START = 'LOADMEMORIES_START';
export const LOADMEMORIES_SUCCESS = 'LOADMEMORIES_SUCCESS';
export const LOADMEMORIES_FAIL = 'LOADMEMORIES_FAIL';
//////
export const ADDMEMORIES_START = 'ADDMEMORIES_START';
export const ADDMEMORIES_SUCCESS = 'ADDMEMORIES_SUCCESS';
export const ADDMEMORIES_FAIL = 'ADDMEMORIES_FAIL';
//////
export const LOGOUT = 'LOGOUT';
///////
export const DELETE_START = 'DELETE_START';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const DELETE_FAIL = 'DELETE_FAIL';
//////
export const EDITMEMORIES_START = 'EDITMEMORIES_START';
export const EDITMEMORIES_SUCCESS = 'EDITMEMORIES_SUCCESS';
export const EDITMEMORIES_FAIL = 'EDITMEMORIES_FAIL';






export const login = (credentials) => dispatch => {
    dispatch({type: LOGIN_START});
    const baseURL = 'http://localhost:####/api/auth'
    axios
      .post(`${baseURL}/login`, credentials)
      .then(response => {
          localStorage.setItem('token', response.data.token)
          localStorage.setItem('user', response.data.id)
          dispatch({type: LOGIN_SUCCESS, payload: response.data.id})
      })
      .catch(err => {
          dispatch({type: LOGIN_FAIL, payload: err})
          console.log('error in handleSubmit', err.response)
      });

}

export const register = (credentials) => dispatch => {
    dispatch({type: REGISTER_START});
      const baseURL = "http://localhost:3300/api/auth";
      axios
        .post(`${baseURL}/register`, credentials)
        .then(response => {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem('user', response.data.id)
          dispatch({type: REGISTER_SUCCESS , payload: response.data.id})
        })
        .catch(err => {
          dispatch({type: REGISTER_FAIL, payload: err})
          console.log('register error', err.response);
        });
  }

export const logout = () => dispatch => {
    dispatch({type: LOGOUT});

    } 
    
export const deleteMemories = (user_id, memory_id) => dispatch => {
    dispatch({type: DELETE_START});
    axiosWithAuth()
    .delete(`/memories/${user_id}/${memory_id}`)
    .then(res => {
        dispatch({type: DELETE_SUCCESS, payload: res.data.memories})
    })
    .catch(err => {
        dispatch({type: DELETE_FAIL, paylaod: err})
    })
}
export const addMemories = (id,newMemory) => dispatch => {
    dispatch({type: ADDMEMORIES_START });
    axiosWithAuth()
    .post(`/memories/${id}`, newMemory)
    .then(res => {
      dispatch({type: ADDMEMORIES_SUCCESS, payload: res.data.memories})
    })
    .catch(err => {
      dispatch({type: ADDMEMORIES_FAIL, payload: err})
    })
  }
  export const loadMemories = (id) => dispatch => {
    dispatch({type: LOADMEMORIES_START});
    axiosWithAuth()
    .get(`/memories/${id}`)
    .then(res => {
      dispatch({type:LOADMEMORIES_SUCCESS, payload: res.data.memories})
    })
    .catch(err => {
      dispatch({type: LOADMEMORIES_FAIL, payload:err});
    })
  }
  export const updateMemories = (user_id, memory_id, memory) => dispatch => {
    dispatch({type: EDITMEMORIES_START});
    axiosWithAuth()
    .put(`/memories/${user_id}/${memory_id}`, memory)
    .then(res => {
      dispatch({type: EDITMEMORIES_SUCCESS, payload: res.data.memories})
    })
    .catch(err => {
      console.log('e',err.message, memory)
      dispatch({type: EDITMEMORIES_FAIL, payload: err})
    })
  }

