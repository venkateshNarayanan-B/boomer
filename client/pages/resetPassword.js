import React, { useContext, useState } from 'react';
import { LockOutlined, MailOutlined, KeyOutlined } from '@ant-design/icons';
import { Button, Form, Input, Col, Row } from 'antd';
import Link from 'next/link';
import axios from 'axios';
import toast from 'react-hot-toast';
import { AuthContext } from '../context/auth';
import { useRouter } from 'next/router';


const ResetPassword = () => {
  const[loading, setLoading] =  useState(false);
  const[auth, setAuth]       =  useContext(AuthContext);
  const router               =  useRouter();
  
  const onFinish = async (values) => {
    setLoading(true);
    try {
      const { data } = await axios.post('/reset-password', values);
      //console.log(data);
      if(data?.error){
        toast.error(data.error);
        setLoading(false);
      }else{
        toast.success('Successfully changed your password!');
        setAuth({user:null,token:''});
        localStorage.removeItem('auth');
        setLoading(false);
        router.push('/signin');
      }
    } catch (error) {
      toast.error('Reset password failed. Try again later!');
      console.log(error);
      setLoading(false);
    }
    //console.log('Received values of form: ', values);
  };


  return (
    <div>
     
    <Row style={{paddingTop: '100px'}}>
      
      <Col span={6} offset={8}>
        <h1>Reset Password</h1>
        <Form
        name="normal_login"
        className="login-form"
        //initialValues={{ name: 'Venki', username: 'venki@venki.com' }}
        onFinish={onFinish}
      >
        <Form.Item
          name="resetCode"
          rules={[{ required: true, message: 'Please input your Reset Code!' }]}
        >
          <Input prefix={<KeyOutlined className="site-form-item-icon" />} placeholder="Reset Code" />
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
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Confirm Password"
          />
        </Form.Item>
        

        <Form.Item>
          <Button type="dashed" htmlType="submit" className="login-form-button" loading={loading}>
            Reset
          </Button><br />
          Or <Link href={'/signin'}>Signin</Link>
        </Form.Item>
      </Form>
    </Col>
  </Row>
    
    </div>
  );
};

export default ResetPassword;