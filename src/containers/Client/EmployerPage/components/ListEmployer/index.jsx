import {
  ExceptionOutlined,
  GlobalOutlined,
  HomeOutlined,
} from '@ant-design/icons'
import {
  Badge, Col, Pagination, Row,
} from 'antd'
import { push } from 'connected-react-router'
import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { dataListEmployerSelector, totalListEmployerSelector } from 'stores/moduleEmployer/selectors'
import { fetchListEmployerRequest } from 'stores/moduleEmployer/thunks'
import { v4 } from 'uuid'
import '../../../HomePage/components/ListNewEmployer/style.scss'
import './style.scss'

export default function ListEmployer(props) {
  const { formState, current, handleCurrent } = props
  const dispatch = useDispatch()
  const dataEmployer = useSelector(dataListEmployerSelector)
  const total = useSelector(totalListEmployerSelector)

  useEffect(() => {
    dispatch(fetchListEmployerRequest({ company: formState.company, limit: 9, page: 1 }))
  }, [formState])

  const handleChangePage = (value) => {
    handleCurrent(value)
    dispatch(fetchListEmployerRequest({ company: formState.company, limit: 9, page: value }))
    window.scrollTo({
      top: 200,

      behavior: 'smooth',
    })
  }

  const handleDeitalEmployer = (id) => {
    dispatch(push(`/employer/${id}`))
  }
  const renderListEmployer = () => {
    let jsx = []
    if (dataEmployer.length > 0) {
      jsx = dataEmployer.map((item) => {
        if (item.order) {
          return (
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
                  <img alt={item.company} src={item.photo} />
                </div>
                <Row className="employer-home__content">
                  <Col className="employer-home__content-avatar">
                    <img src={item.avatar} alt="avarta" />
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
                      <Link to="/">Jobs</Link>
                    </Badge>
                  </Col>
                </Row>
                <Row>
                  <Col className="employer-home__content-dep">
                    <p>
                      <GlobalOutlined />
                      {item.website}
                    </p>
                    <p>
                      <HomeOutlined />
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
          )
        }
        return (
          <div
            key={v4()}
            className="employer-home"
            onClick={() => handleDeitalEmployer(item.id)}
          >
            <div className="employer-home__cover">
              <img alt={item.company} src={item.photo} />
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
                  <Link to="/">Jobs</Link>
                </Badge>
              </Col>
            </Row>
            <Row>
              <Col className="employer-home__content-dep">
                <p>
                  <GlobalOutlined />
                  {item.website}
                </p>
                <p>
                  <HomeOutlined />
                  {item.address}
                </p>
                <p>
                  <ExceptionOutlined />
                  {item.description}
                </p>
              </Col>
            </Row>
          </div>
        )
      })
    }
    return jsx
  }

  // function isCheck(obj, key) {
  //   for (const i of obj) {
  //     if (!i[key]) return false
  //   }
  //   return true
  // }

  return (
    <Container fluid style={{ backgroundColor: '#F7F7F7', paddingTop: '20px' }}>
      <Container style={{ padding: 0 }}>
        <div>
          <Row className="job__title" style={{ backgroundColor: 'white' }}>
            <h5>Danh sách nhà tuyển dụng</h5>
            <hr className="line-theme" />
          </Row>
        </div>
        <div className="home-emplyer">
          {
           renderListEmployer()
          }

        </div>
        {dataEmployer.length === 0 ? (
          ''
        ) : (
          <Pagination
            style={{ paddingBottom: '15px' }}
            onChange={handleChangePage}
            className="pagination__employer"
            defaultCurrent={1}
            defaultPageSize={9}
            total={total}
            current={current}
          />
        )}
      </Container>
    </Container>
  )
}
