import { Col, Row } from 'antd'
import React from 'react'
import AdminLayout from '../../../components/layout/AdminLayout'

const index = () => {
  return (
    <AdminLayout>
        <Row style={{height: '100vh'}}>
            <Col offset={1}span={22}>
                <h1>Users List</h1>
            </Col>
        </Row>
    </AdminLayout>
  )
}

export default index