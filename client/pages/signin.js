import React, { useContext, useEffect, useState } from 'react';
import { LockOutlined, MailOutlined, LoginOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Col, Row } from 'antd';
import Link from 'next/link';
import { AuthContext } from '../context/auth';
import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast';
import axios from 'axios';

const Signin = () => {
  const [loading, setLoading] = useState(false);
  const [auth, setAuth] = useContext(AuthContext);
  const router  = useRouter();

  

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const { data }  = await axios.post('/signin', values);
      if(data?.error){
        toast.error(data.error);
        setLoading(false);
      }else{
        toast.success('Successfully Logged in!');
        setAuth(data);
        setLoading(false);
        localStorage.setItem('auth', JSON.stringify(data));
        if(data?.user?.role === "Admin"){
        router.push('/admin');
        }else if(data?.user?.role === "Author"){
        router.push('/author');
        }else{
        router.push('/subscriber');
        }
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
        <h1>Signin</h1>
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
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Link href={'/forgetPassword'} className="login-form-forgot">Forgot password</Link>
        
      </Form.Item>

      <Form.Item>
        <Button type="dashed" htmlType="submit" className="login-form-button" icon={<LoginOutlined />} loading={loading}>
          Login
        </Button><br />
        Or <Link href={'/signup'}>Register now!</Link>
      </Form.Item>
    </Form>
    </Col>
  </Row>
    
    </div>
  );
};

export default Signin;