import React from 'react'
import "../styles/RegisterStyle.css";
import {Form,Input,message} from 'antd';
import{useDispatch} from 'react-redux';
import { showLoading,hideLoading } from '../redux/features/alertSlice';
import {Link,useNavigate} from 'react-router-dom';
import axios from "axios";

const Login = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch();
  //form handler
  const onfinishHandler=async(values)=>{
    try{
        dispatch(showLoading());
       const res=await axios.post('/api/v1/user/login',values);
       window.location.reload();
       dispatch(hideLoading());
       if(res.data.success){
        localStorage.setItem("token",res.data.token);
        message.success('Login SUccessfully');
        navigate('/');
       }
      else{
        message.error(res.data.message);
      }
    }catch(error){
      dispatch(hideLoading());
      console.log(error);
      message.error('Something Went Wrong');
    }
    
  };


  return (
    <div className="form-container">
       <Form layout="vertical" onFinish={onfinishHandler} className="register-form">
        <h3 className='text-center'>Login Form</h3>
     

      <Form.Item label ="Email" name="email">
        <Input type="email" placeholder='enter email address' required/>
      </Form.Item>
      <Form.Item label ="Password" name="password">
        <Input type="password" placeholder='enter password' required/>
      </Form.Item>
      <Link to="/register" className='m-2'>Not a  user register here</Link>
      <button className='btn btn-primary' type="sumbit">Login</button>
       </Form>
  
  
   </div>
  )
}

export default Login