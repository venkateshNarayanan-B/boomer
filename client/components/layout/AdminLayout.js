import React, { useContext, useEffect, useState } from 'react';
import { Layout } from 'antd';
import AdminNav from '../nav/AdminNav';
import { AuthContext } from '../../context/auth';
import { useRouter } from 'next/router';
import { LoadingOutlined} from '@ant-design/icons';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const { Content } = Layout;

const AdminLayout = (props) => {
  const[auth, setAuth]  = useContext(AuthContext);
  const[loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(()=>{
   if(auth.token){
    getCurrentAdmin();
   }
   
  }, [auth?.token]);

  const getCurrentAdmin = async () =>{
    
      await axios.post('/current-admin')
      .then(response => {
          setLoading(false);
        })
        .catch(error => {
          console.log(error.response.data);
          router.push('/');
          //toast.error(error.response.data);
        });  
    

  }

  if(loading){
    return <LoadingOutlined style={{display: 'flex',justifyContent: 'center',height: '100vh', fontSize:'50px', alignItems: 'center'}}/>;
  }
    return (
        <Layout>
          <AdminNav />
          <Layout>
            <Content style={{padding: '10px'}}>{props.children}</Content>
          </Layout>
        </Layout>
      )
}

export default AdminLayout