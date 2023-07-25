import React, { useEffect, useState } from 'react'
import AdminLayout from '../../../components/layout/AdminLayout'
import { Button, Col, List, Row } from 'antd'
import { PlusOutlined } from '@ant-design/icons';
import Link from 'next/link';
import axios from 'axios';

const post = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() =>{
    fetchPosts();
  }, []);
  //get all posts from server
  const fetchPosts = async () =>{
    try {
      await axios.get('/posts')
      .then(response =>{
       const { data } = response;
       setPosts(data);
      })
      .catch(error =>{
       console.log(error); 
      });
    } catch (error) {
      console.log(error);
    }
  }
  //use to edit post
  const handleEdit = async () =>{}
  //use to delete post
  const handleDelete = async () =>{}
  
  return (
    <AdminLayout>
        <Row style={{height: '100vh'}}>
        <Col offset={1} lg={22} sm={22} xs={22}>
            <h1>Post List</h1>
            <Button type='dashed' htmlType="submit"  icon={<PlusOutlined />}><Link href='/admin/posts/new'> Add New Post</Link></Button>
            <p>{posts.length} Posts</p>
            <List 
            itemLayout='horizontal'
            dataSource={posts}
            renderItem={(item) =>(
              <List.Item actions={[<a onClick={()=>handleEdit(item)}>Edit</a>, <a onClick={() => handleDelete(item)}>Delete</a>]}>
                <List.Item.Meta title={item.title} />
              </List.Item>
            )}
            />
        </Col>
        </Row>
        
    </AdminLayout>
  )
}

export default post