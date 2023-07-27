import React from 'react';
import AdminLayout from '../../../components/layout/AdminLayout';
import { Col, Row } from 'antd';
import UploadFile from '../../../components/media/UploadFile';


const New = () => {
  return (
    <AdminLayout>
        <Row style={{height: '100vh'}}>
            <Col span={24}>
                <h1>Add New Media</h1>
                <div style={{padding: '100px', textAlign: 'center'}}>
                    <UploadFile redirectToLibrary={true}/>
                </div>
            </Col>
        </Row>
    </AdminLayout>
  )
}

export default New