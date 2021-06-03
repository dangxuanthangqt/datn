import React, { Suspense } from 'react'
import PropTypes from 'prop-types'
import 'antd/dist/antd.css'
import { Skeleton, Row, Col } from 'antd'
import Container from 'react-bootstrap/Container'
import Header from 'layouts/ClientLayout/components/Header/Header'
import SideBarMenu from './components/SideBarMenu'

function CandidateDashBroad(props) {
  const { children } = props
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
CandidateDashBroad.propTypes = {
  children: PropTypes.element,
}
export default CandidateDashBroad
