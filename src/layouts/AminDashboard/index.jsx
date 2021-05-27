import { Col, Row, Skeleton } from 'antd'
import 'antd/dist/antd.css'
import useDocumentTitle from 'hooks/useDocumentTitle'
import Header from 'layouts/ClientLayout/components/Header/Header'
import React, { Suspense } from 'react'
import SibarMenu from './SideBarMenu'

function AdminDashboard({ children }) {
  useDocumentTitle('DashBroad Admin')
  return (
    <>
      <Header />
      <Row>
        <Col span={4}>
          <SibarMenu />
        </Col>
        <Col span={20}>
          <Suspense fallback={<Skeleton active />}>{children}</Suspense>
        </Col>
      </Row>
    </>
  )
}

export default AdminDashboard
