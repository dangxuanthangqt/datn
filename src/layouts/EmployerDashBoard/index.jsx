import React, { Suspense } from 'react'
import 'antd/dist/antd.css'
import { Skeleton, Row, Col } from 'antd'
import Container from 'react-bootstrap/Container'

import Header from 'layouts/ClientLayout/components/Header/Header'
import SideBarMenu from './SidebarMenu'

function EmployerDashBroad({ children }) {
  return (
    <>
      <Header />
      <Container style={{ padding: '15px 0' }}>
        <Row>
          <Col span={6}>
            <SideBarMenu />
          </Col>
          <Col span={18}>
            <Suspense fallback={<Skeleton active />}>{children}</Suspense>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default EmployerDashBroad
