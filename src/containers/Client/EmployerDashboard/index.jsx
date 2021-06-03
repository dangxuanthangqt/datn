import useDocumentTitle from 'hooks/useDocumentTitle'
import React from 'react'
import Container from 'react-bootstrap/Container'
import MainDashBroad from './components/MainDashboard'

export default function EmployerDashbroad() {
  useDocumentTitle('DashBroad Nhà tuyển dụng')
  return (
    <div>
      <Container>
        <MainDashBroad />
      </Container>
    </div>
  )
}
