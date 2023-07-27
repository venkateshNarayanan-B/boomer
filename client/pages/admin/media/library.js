import React from 'react';
import AdminLayout from '../../../components/layout/AdminLayout';
import { Col, Row } from 'antd';
import MediaLibrary from '../../../components/media/MediaLibrary';


const Library = () => {
  return (
    <AdminLayout>
        <Row style={{height: '100%'}}>
            <Col>
                <h1>Media Library</h1>
                <div style={{padding: '100px', textAlign: 'center'}}>
                    <MediaLibrary previewForAdmin ={true} />
                </div>
            </Col>
        </Row>
    </AdminLayout>
  )
}

export default Library