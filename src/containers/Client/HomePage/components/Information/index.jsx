import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import CountUp from 'react-countup'
import { useDispatch, useSelector } from 'react-redux'
import { informationSelector } from 'stores/moduleRecruitment/selectors'
import { fetchInformationRequest } from 'stores/moduleRecruitment/thunks'
import './style.scss'

export default function Information() {
  const dispatch = useDispatch()
  const dashboardClient = { ...useSelector(informationSelector) }
  console.log('dashboardClient', dashboardClient)
  useEffect(() => {
    dispatch(fetchInformationRequest())
  }, [])

  return (
    <Container fluid className="main-infor-footer">
      <div className="info-item">
        <CountUp end={dashboardClient.recruitments} duration={5} />
        <p>Việc làm</p>
      </div>
      <div className="info-item">
        <CountUp end={dashboardClient.employers} duration={5} />
        <p>Nhà tuyển dụng</p>
      </div>
      <div className="info-item">
        <CountUp end={dashboardClient.candidates} duration={5} />
        <p>Ứng viên</p>
      </div>
    </Container>
  )
}
