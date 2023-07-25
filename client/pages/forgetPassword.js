import React, { useContext, useState } from 'react';
import { MailOutlined, LoginOutlined } from '@ant-design/icons';
import { Button, Form, Input, Col, Row } from 'antd';
import Link from 'next/link';
import { AuthContext } from '../context/auth';
import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast';
import axios from 'axios';

const ForgetPassword = () => {
  const [loading, setLoading] = useState(false);
  const [auth, setAuth] = useContext(AuthContext);
  const router  = useRouter();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const { data }  = await axios.post('/forgot-password', values);
      if(data?.error){
        toast.error(data.error);
        setLoading(false);
      }else{
        toast.success('Check your Email. Reset code has been sent!');
        setAuth(data);
        setLoading(false);
        localStorage.setItem('auth', JSON.stringify(data));
        router.push('/resetPassword');
      }
    } catch (error) {
      toast.error(error);
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div>
    <Row style={{paddingTop: '100px'}}>
      <Col span={6} offset={8}>
        <h1>Forgot Password</h1>
        <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please input your Email!', type: 'email' }]}
      >
        <Input prefix={<MailOutlined className="site-form-item-icon"/>} placeholder="Email" />
      </Form.Item>
      
      <Form.Item>
        <Link href={'/resetPassword'} className="login-form-forgot">Reset password</Link>
        
      </Form.Item>

      <Form.Item>
        <Button type="dashed" htmlType="submit" className="login-form-button" icon={<LoginOutlined />} loading={loading}>
          Submit
        </Button><br />
        Or <Link href={'/signin'}>Signin!</Link>
      </Form.Item>
    </Form>
    </Col>
  </Row>
    
    </div>
  );
};

export default ForgetPassword;