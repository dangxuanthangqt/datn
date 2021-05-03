import {
  ExceptionOutlined,
  GlobalOutlined,
  HomeOutlined,
} from '@ant-design/icons'
import {
  Badge, Col, Row, Skeleton,
} from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Link as RouterLink } from 'react-router-dom'
import './style.scss'
import { fetchListEmployerOrderRequest } from 'stores/moduleEmployer/thunks'
import { v4 } from 'uuid'
import { push } from 'connected-react-router'
import { listEmployerOrderSelector } from 'stores/moduleEmployer/selectors'

export default function ListNewEmployer() {
  const employerOrder = useSelector(listEmployerOrderSelector)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchListEmployerOrderRequest())
  }, [dispatch])

  const handleDeitalEmployer = (id) => {
    dispatch(push(`/employer/${id}`))
  }

  const renderListEmployer = () => {
    let jsx = []
    if (employerOrder.length > 0) {
      jsx = employerOrder.map((item) => (
        <Badge.Ribbon
          key={v4()}
          placement="end"
          text="Top"
          className="custom-notical"
        >
          <div
            className="employer-home"
            onClick={() => handleDeitalEmployer(item.id)}
          >
            <div className="employer-home__cover">
              <img src={item.photo} alt="cover" />
            </div>
            <Row className="employer-home__content">
              <Col className="employer-home__content-avatar">
                <img src={item.avatar} alt="avatar" />
              </Col>
              <Col className="employer-home__content-detail" span={14}>
                <h3>{item.company}</h3>
              </Col>
              <Col span={2}>
                <Badge
                  style={{ backgroundColor: '#108ee9' }}
                  className="btn-job-custom"
                  count={item.jobs}
                >
                  <Link href="/">Jobs</Link>
                </Badge>
              </Col>
            </Row>
            <Row>
              <Col className="employer-home__content-dep">
                <p>
                  <GlobalOutlined />
                  {' '}
                  {item.website}
                </p>
                <p>
                  <HomeOutlined />
                  {' '}
                  {item.address}
                </p>
                <p>
                  <ExceptionOutlined />
                  {item.description}
                </p>
              </Col>
            </Row>
          </div>
        </Badge.Ribbon>
      ))
    }
    return jsx
  }
  const dataNull = () => (
    <>
      <Skeleton active />
      <Skeleton active />
      <Skeleton active />
    </>
  )

  return (
    <section className="section" id="employerr">
      <div className="container">
        <Row className="job__title" style={{ backgroundColor: '#F7F7F7' }}>
          <h5>Danh sách nhà tuyển dụng mới nhất</h5>
          <hr className="line-theme" />
          <RouterLink to="/employer">
            <h5>Tất cả nhà tuyển dụng</h5>
          </RouterLink>
        </Row>
        <div className="home-emplyer">
          {employerOrder.length > 2 ? renderListEmployer() : dataNull()}
        </div>
      </div>
    </section>
  )
}
