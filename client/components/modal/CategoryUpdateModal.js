import React, { useState } from 'react'
import { Modal, Form, Input, Button } from 'antd'
import { EditOutlined } from '@ant-design/icons';

export const CategoryUpdateModal = ({ visible, setVisible , handleUpdate, updatingCategory }) => {
   
    
    return (
    
    <Modal title="Update Category"  open={visible} footer={null} onCancel={()=> setVisible(false)}>
       
        <Form onFinish={handleUpdate} fields={[{ name: ['name'], value: updatingCategory.name}]}>
            <Form.Item
            name="name"
            rules={[{ required: true, message: 'Please input Category!'}]}
            >
            <Input prefix={<EditOutlined className="site-form-item-icon"/>} placeholder="Edit Category" />
            </Form.Item>
            <Form.Item>
                <Button type="dashed" htmlType="submit" className="login-form-button" >
                    Edit Category
                </Button><br />
            </Form.Item>
        </Form>
    </Modal>
  )
}
