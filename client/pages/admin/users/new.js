import { Col, Row } from 'antd'
import React from 'react'
import AdminLayout from '../../../components/layout/AdminLayout'

const newUser = () => {
  return (
    <AdminLayout>
        <Row style={{height: '100vh'}}>
            <Col offset={1} span={22}>
                <h1>Create New User</h1>
            </Col>
        </Row>
    </AdminLayout>
  )
}

export default newUser;