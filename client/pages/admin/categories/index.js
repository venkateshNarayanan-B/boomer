import React, { useEffect, useState } from 'react'
import AdminLayout from '../../../components/layout/AdminLayout'
import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Form, Input, Row, Col, Button, List, Modal } from 'antd';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { CategoryUpdateModal } from '../../../components/modal/CategoryUpdateModal';

const Categories = () => {
const [loading, setLoading] = useState(false);
const [ form ]  =   Form.useForm();
const [categories, setCategories] = useState([]);
const [update, setUpdate] = useState({});
const [visible, setVisible] = useState(false);

useEffect(()=>{
    getCategories();
}, []);

const getCategories = async ()=>{
    try {
        await axios.get('/categories')
        .then(response => {
            const { data } = response;
            setCategories(data);
        })
        .catch(error => {
            console.log(error);
        });
    } catch (error) {
        console.log(error);
    }
}

  const onFinish = async (values) =>{
    try {
        setLoading(true);
        await axios
        .post('/category', values)
        .then(response => {
            const { data } = response;
            //console.log(data);
            toast.success('Category created successfully !');
            form.resetFields(['name']);
            getCategories();
        })
        .catch(error => {
            //console.log(error);
            toast.error('Create Category Failed!');
            toast.error(error.response.data);
        })
        setLoading(false);
    } catch (error) {
        console.log(error);
        toast.error(error);
        setLoading(false);
    }
  }

  const handleDelete = async (slug)=>{
    try {
        setLoading(true);
        await axios.delete(`/category/${slug}`)
        .then(response =>{
            toast.success('Category deleted successfully!');
            getCategories();
        })
        .catch(error =>{
            console.log(error);
            toast.error('Category Delete Failed');
        });
        setLoading(false);
    } catch (error) {
        console.log(error);
        toast.error('Category Delete Failed');
    }
  };

  const handleEdit = async(item) =>{
    setUpdate(item);
    setVisible(true);
  }

  const handleUpdate = async (values)=>{
    try {
        await axios.put(`/category/${update.slug}`, values)
        .then(response =>{
            toast.success('Category Updated Successfully!');
            getCategories();
        }).catch(error =>{
            toast.error('Category Update Failed!');
        });
        setVisible(false);
    } catch (error) {
        toast.error('Category Update Failed!');
        console.log(error);
        setVisible(false);
    }
    
  }
  
    return (
    <AdminLayout>
        <Row style={{height: '100vh'}}>
        <Col offset={1} lg={10} sm={22} xs={22}>
                <h1>Categoties</h1>
                <p>Add new category</p>
                <Form onFinish={onFinish} form={form}>
                    <Form.Item
                    name="name"
                    rules={[{ required: true, message: 'Please input Category!'}]}
                    >
                    <Input prefix={<EditOutlined className="site-form-item-icon"/>} placeholder="Enter Category" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="dashed" htmlType="submit" className="login-form-button" icon={<PlusOutlined />} loading={loading}>
                            Add Category
                        </Button><br />
                    </Form.Item>
                </Form>
            </Col>
            <Col offset={1} lg={10} sm={22} xs={22}>
                
                <List dataSource={categories} renderItem={(item) => 
                <List.Item actions={[<a onClick={()=> handleEdit(item)}>Edit</a>, 
                <a onClick={()=> handleDelete(item.slug)}>Delete</a>]}>
                <List.Item.Meta title={item.name} /></List.Item>} >

                </List>
            </Col>
            
            <CategoryUpdateModal 
            visible={visible} 
            setVisible={setVisible}
            handleUpdate={handleUpdate}
            updatingCategory={update}
            />
        </Row>
        
    </AdminLayout>
  )
}

export default Categories