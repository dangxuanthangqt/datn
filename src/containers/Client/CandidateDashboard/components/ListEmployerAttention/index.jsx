import {
  ExceptionOutlined,

  GlobalOutlined,
  HomeOutlined,
} from '@ant-design/icons'
import {
  Badge, Button, Col, Drawer, Row,
} from 'antd'
import { DataNull } from 'components/DataNull'
import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { userIDSelector } from 'stores/moduleAuth/selectors'
import { listEmployerAttentionSelector } from 'stores/moduleCandidate/selectors'
import { dispatchFetchListEmployerAttention } from 'stores/moduleCandidate/thunks'
import { detailCVSelector } from 'stores/moduleCv/selectors'
import { dispatchFetchDetailCvRequest } from 'stores/moduleCv/thunks'
import { v4 } from 'uuid'
import '../../../HomePage/components/ListNewEmployer/style.scss'
import DetailCv from '../ListCv/DetailCv'
import './style.scss'

export default function ListEmployerAttention() {
  const userID = useSelector(userIDSelector)
  const dispatch = useDispatch()
  const dataEmployer = useSelector(listEmployerAttentionSelector)
  useEffect(() => {
    dispatch(dispatchFetchListEmployerAttention(userID))
  }, [])
  const [visibleChilds, setVisibleChilds] = useState(false)
  const detailCV = useSelector(detailCVSelector)

  const onChildrensDrawerClose = () => {
    setVisibleChilds(false)
  }
  const openCV = (id) => {
    dispatch(dispatchFetchDetailCvRequest(id))
    setVisibleChilds(true)
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
                className="employer-container"

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
            className="employer-container"
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
            <Button onClick={() => openCV(item.cv_id)}>
              Xem CV được quan tâm
            </Button>
            <Drawer
              title="Chi tiết CV"
              width={1000}
              closable={false}
              onClose={onChildrensDrawerClose}
              visible={visibleChilds}
              className="drawer-recruitment"
              footer={(
                <div
                  style={{
                    textAlign: 'right',
                  }}
                >
                  <Button onClick={onChildrensDrawerClose} style={{ marginRight: 8 }}>
                    Hủy
                  </Button>
                </div>
              )}
            >
              <DetailCv
                detailCV={detailCV}
              />
            </Drawer>
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
        <div className="">
          {
           dataEmployer.length ? renderListEmployer() : <DataNull />
          }

        </div>

      </Container>
    </Container>
  )
}
