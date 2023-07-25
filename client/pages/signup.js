import React, { useContext, useState, useEffect } from 'react';
import { LockOutlined, UserOutlined, MailOutlined, KeyOutlined } from '@ant-design/icons';
import { Button, Form, Input, Col, Row } from 'antd';
import Link from 'next/link';
import axios from 'axios';
import toast from 'react-hot-toast';
import { AuthContext } from '../context/auth';
import { useRouter } from 'next/router';


const Signup = () => {
  const[loading, setLoading] =  useState(false);
  const[auth, setAuth]       =  useContext(AuthContext);
  const router               =  useRouter();

  useEffect(()=>{
    if(auth?.token){
      router.push('/');
    }
  }, [auth]);
  
  const onFinish = async (values) => {
    setLoading(true);
    try {
      const { data } = await axios.post('/signup', values);
      //console.log(data);
      if(data?.error){
        toast.error(data.error);
        setLoading(false);
      }else{
        toast.success('Successfully signed up!');
        setAuth(data);
        localStorage.setItem('auth', JSON.stringify(data));
        setLoading(false);
        router.push('/signin');
      }
    } catch (error) {
      toast.error('Signup failed. Try again later!');
      console.log(error);
      setLoading(false);
    }
    //console.log('Received values of form: ', values);
  };


  return (
    <div>
     
    <Row style={{paddingTop: '100px'}}>
      
      <Col span={6} offset={8}>
        <h1>Signup</h1>
        <Form
        name="normal_login"
        className="login-form"
        //initialValues={{ name: 'Venki', username: 'venki@venki.com' }}
        onFinish={onFinish}
      >
        <Form.Item
          name="name"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your Email!', type: 'email' }]}
        >
          <Input prefix={<MailOutlined className="site-form-item-icon"/>} placeholder="Email" />
        </Form.Item>
        
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please enter your password',
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          dependencies={['password']}
          rules={[
            {
              required: true,
              message: 'Please confirm your password',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                const password = getFieldValue('password');
                if (value && value !== password) {
                  return Promise.reject('Passwords do not match');
                }
                return Promise.resolve();
              },
            }),
          ]}
        >
          
          <Input.Password
            prefix={<KeyOutlined className="site-form-item-icon" />}
            placeholder="Confirm Password"
          />
        </Form.Item>
        

        <Form.Item>
          <Button type="dashed" htmlType="submit" className="login-form-button" loading={loading}>
            Register
          </Button><br />
          Or <Link href={'/signin'}>Signin</Link>
        </Form.Item>
      </Form>
    </Col>
  </Row>
    
    </div>
  );
};

export default Signup;