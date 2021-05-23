/* eslint-disable no-unused-vars */
import { ExclamationCircleOutlined } from '@ant-design/icons'
import {
  Avatar,
  Badge,
  Button,
  Col,
  Drawer,
  Pagination,
  Row,
  Skeleton,
  Tag,
  Modal,
} from 'antd'

import { DataNull } from 'components/DataNull'
import DetailCv from 'containers/Client/CandidateDashboard/components/ListCv/DetailCv'
// import DetailCv from '../../../CandidateDashbroad/component/ListCv/DetailCv'
import 'containers/Client/HomePage/components/ListNewJob/style.scss'
import { format } from 'date-fns'
import { includes } from 'lodash'
import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import { useDispatch, useSelector } from 'react-redux'
import { permissionSelector, userIDSelector } from 'stores/moduleAuth/selectors'
import { detailCVSelector, listCvByUserSelector } from 'stores/moduleCv/selectors'
import { dispatchFetchCvByUserIdRequest, dispatchFetchDetailCvRequest } from 'stores/moduleCv/thunks'
import { dataListRecruitment, detailRecruimentSelector, totalSelector } from 'stores/moduleRecruitment/selectors'
import {
  dispatchApplyJob,
  dispatchfetchDetailRecruitment,
  dispatchfetchLitsRecruitmentByEmployerID, fetchListRecruitment,
} from 'stores/moduleRecruitment/thunks'
import { v4 } from 'uuid'
import './style.scss'

function ListRecruitment(props) {
  const { formState, handleCurrent, current } = props
  const dispatch = useDispatch()
  const detailCV = useSelector(detailCVSelector)
  const UserID = useSelector(userIDSelector)
  const permission = useSelector(permissionSelector)
  const listCvByUserId = useSelector(listCvByUserSelector)
  const dataRecruitment = useSelector(dataListRecruitment)

  const total = useSelector(totalSelector)
  const detailRecruitment = useSelector(detailRecruimentSelector)
  useEffect(() => {
    if (formState) {
      dispatch(
        fetchListRecruitment({
          ...formState,
        }),
      )
    }
  }, [formState])

  const handleChangePage = (value) => {
    handleCurrent(value)
    dispatch(
      fetchListRecruitment({
        ...formState,
        page: value,
      }),
    )
    window.scrollTo({
      top: 200,
      behavior: 'smooth',
    })
  }

  const [visible, setVisible] = useState(false)
  const [visibleChild, setVisibleChild] = useState(false)
  const [visibleChilds, setVisibleChilds] = useState(false)
  const [recruitmentid, setRecruitmentid] = useState(1)

  const onClose = () => {
    setVisible(false)
  }

  const onCloses = () => {
    setVisibleChild(false)
  }

  const onClosess = () => {
    setVisibleChilds(false)
  }

  const onChildrenDrawerClose = () => {
    setVisibleChild(false)
  }

  const onChildrensDrawerClose = () => {
    setVisibleChilds(false)
  }

  const showChildrensDrawer = (id) => {
    dispatch(dispatchFetchDetailCvRequest(id))
    setVisibleChilds(true)
  }
  const handelApply = (id) => {
    const data = { cv_id: id, recruitment_id: recruitmentid }
    dispatch(dispatchApplyJob(data))
  }

  const handleApplyCV = (item) => {
    Modal.confirm({
      title: 'Thông báo',
      icon: <ExclamationCircleOutlined />,
      content: `Bạn có muốn apply CV ${item.title}`,
      okText: 'Xác Nhận',
      onOk: () => handelApply(item.id),
      cancelText: 'Hủy',
    })
  }

  // const token = getAccessToken()
  // if (token) {
  //   var id = JwtDecode(token).sub
  // }

  // const listCvByUserId = useSelector((state) => state.cv.listCvByUserId)

  const showChildrenDrawer = () => {
    dispatch(dispatchFetchCvByUserIdRequest(UserID))
    setVisibleChild(true)
  }

  const handleDeitalRecruitment = (recruitmentID) => {
    setRecruitmentid(recruitmentID)
    setVisible(true)
    dispatch(dispatchfetchDetailRecruitment(recruitmentID))
    // dispatch(dispatchfetchLitsRecruitmentByEmployerID(recruitmentID))
  }

  // const detailRecruitment = detailRecruitment

  const renderListRecruitment = () => {
    let jsx = []
    if (dataRecruitment.length > 0) {
      jsx = dataRecruitment.map((item) => {
        if (item.order) {
          return (
            <Badge.Ribbon
              key={v4()}
              placement="start"
              text="Tin hot"
              className="custom-notical"
            >
              <Row
                className="list-employers-home"
                onClick={() => handleDeitalRecruitment(item.id)}
              >
                <Col
                  className="list-employers-home-avatar"
                  xs={4}
                  sm={4}
                  md={5}
                  lg={5}
                  xl={5}
                  span={5}
                >
                  <img src={item.photo} alt="avatar" />
                </Col>
                <Col
                  xs={19}
                  sm={19}
                  md={19}
                  lg={15}
                  xl={15}
                  className="list-employers-home-title"
                  span={15}
                >
                  <h5>
                    {item.vacancy}
                  </h5>
                  <Row className="list-employers-home-title-dung">
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} span={12}>
                      <p>
                        Mức lương:
                        {item.salary}
                      </p>
                      <p>
                        Số lượng:
                        {item.quantity}
                      </p>
                      <p>
                        Skill:
                        <Tag color="blue">{item.career}</Tag>
                      </p>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} span={12}>
                      <p>
                        Hạn nộp:
                        <span>
                          {format(new Date(item.end_date), 'dd-MM-yyyy')}
                        </span>
                      </p>
                      <p>
                        Thành phố:
                        {item.city}
                      </p>
                      <p>
                        Vị trí:
                        {item.rank}
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <p>
                      Mô tả:
                      {item.description}
                    </p>
                  </Row>
                </Col>
                <Col
                  className="list-employers-home-button"
                  xs={24}
                  sm={24}
                  md={24}
                  lg={4}
                  xl={4}
                  span={4}
                >
                  <Button
                    type="primary"
                    onClick={() => handleDeitalRecruitment(item.id)}
                  >
                    Chi tiết
                  </Button>
                </Col>
              </Row>
            </Badge.Ribbon>
          )
        }
        return (
          <Row
            key={v4()}
            className="list-employers-home"
          >
            <Col
              className="list-employers-home-avatar"
              xs={4}
              sm={4}
              md={5}
              lg={5}
              xl={5}
              span={5}
            >
              <img src={item.photo} alt="avatar" />
            </Col>
            <Col
              xs={19}
              sm={19}
              md={19}
              lg={15}
              xl={15}
              className="list-employers-home-title"
              span={15}
            >
              <h5>
                {item.vacancy}
              </h5>
              <Row className="list-employers-home-title-dung">
                <Col xs={12} sm={12} md={12} lg={12} xl={12} span={12}>
                  <p>
                    Mức lương:
                    {item.salary}
                  </p>
                  <p>
                    Số lượng:
                    {item.quantity}
                  </p>
                  <p>
                    Skill:
                    <Tag color="blue">{item.career}</Tag>
                  </p>
                </Col>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} span={12}>
                  <p>
                    Hạn nộp:
                    <span>
                      {format(new Date(item.end_date), 'dd-MM-yyyy')}
                    </span>
                  </p>
                  <p>
                    Thành phố:
                    {item.city}
                  </p>
                  <p>
                    Vị trí:
                    {item.rank}
                  </p>
                </Col>
              </Row>
              <Row>
                <p>
                  Mô tả:
                  {item.description}
                </p>
              </Row>
            </Col>
            <Col
              className="list-employers-home-button"
              xs={24}
              sm={24}
              md={24}
              lg={4}
              xl={4}
              span={4}
            >
              <Button
                type="primary"
                onClick={() => handleDeitalRecruitment(item.id)}
              >
                Chi tiết
              </Button>
            </Col>
          </Row>
        )
      })
    }
    return jsx
  }

  const lazyLoadingDataNull = () => (
    <>
      <Skeleton active />
      <Skeleton active />
      <Skeleton active />
    </>
  )

  return (
    <Container fluid style={{ backgroundColor: '#f7f7f7' }}>
      <Container className="recruitment">
        <Row className="job__title" style={{ backgroundColor: 'white' }}>
          <h5>Danh sách việc làm</h5>
          <hr className="line-theme" />
        </Row>
        <Drawer
          title="Chi tiết việc làm"
          width={1000}
          closable
          onClose={onClose}
          visible={visible}
          className="drawer-recruitment"
          footer={(
            <div
              style={{
                textAlign: 'right',
              }}
            >
              <Button onClick={onClose} style={{ marginRight: 8 }}>
                Hủy
              </Button>
              {includes(permission, 'candidate') ? (
                <Button type="primary" onClick={showChildrenDrawer}>
                  Ứng tuyển
                </Button>
              ) : (
                ''
              )}
            </div>
  )}
        >
          <Row className="detail-content">
            <Avatar shape="square" size={100} src={detailRecruitment.photo} />
            <h5>{detailRecruitment.vacancy}</h5>
          </Row>
          <Row>
            <Col className="info-recruitment" span={12}>
              <p>
                Số lượng:
                {detailRecruitment.quantity}
              </p>
              <p>
                Vị trị:
                {detailRecruitment.rank}
              </p>
              <p>
                Hình thức:
                {detailRecruitment.type_of_work}
              </p>
            </Col>
            <Col span={12}>
              <p>
                Mức lương:
                {detailRecruitment.salary}
              </p>
              <p>
                Hạn nộp:
                {detailRecruitment.end_date}
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="info-recruitment" span={24}>
              <p>
                Mô tả:
                {detailRecruitment.description}
              </p>
              <p>
                Quyền lợi được hưởng:
                {detailRecruitment.entitlements}
              </p>
              <p>
                Yêu cầu công việc:
                {detailRecruitment.job_requirements}
              </p>
              <p>
                Yêu cầu hồ sơ:
                {detailRecruitment.requested_documents}
              </p>
              <p>
                Địa chỉ:
                {detailRecruitment.city}
              </p>
            </Col>
          </Row>
          <div
            className="ant-divider ant-divider-horizontal"
            role="separator"
          />

          <Row className="detail-content">
            <Avatar shape="square" size={100} src={detailRecruitment.avatar} />
            <h5>{detailRecruitment.company}</h5>
          </Row>
          <Row>
            <Col className="info-recruitment" span={24}>
              <p>
                Website:
                {detailRecruitment.website}
              </p>
              <p>
                Người liên hệ:
                {detailRecruitment.contact}
              </p>
              <p>
                Địa chỉ công ty:
                {detailRecruitment.address}
              </p>
              <p>
                Mô tả công ty:
                {detailRecruitment.employers_description}
              </p>
            </Col>
          </Row>

          <Drawer
            title="Chọn CV"
            width={1000}
            closable={false}
            onClose={onChildrenDrawerClose}
            visible={visibleChild}
            className="drawer-recruitment"
            footer={(
              <div
                style={{
                  textAlign: 'right',
                }}
              >
                <Button onClick={onCloses} style={{ marginRight: 8 }}>
                  Hủy
                </Button>
                <Button type="primary">
                  Thêm Cv
                </Button>
              </div>
    )}
          >
            {listCvByUserId.map((item) => (
              <Row
                className="detail-content"
                key={v4()}
                style={{ margin: '10px 20px', alignItems: 'center' }}
              >
                <Col span={8}>
                  <Avatar shape="square" size={100} src={item.avatar} />
                </Col>
                <Col span={8}>
                  <h5>{item.title}</h5>
                </Col>

                <Col span={8}>
                  <Button
                    type="info"
                    style={{ display: 'inline', marginRight: '5px' }}
                    onClick={() => handleApplyCV(item)}
                  >
                    Chon
                  </Button>
                  <Button
                    type="info"
                    onClick={() => showChildrensDrawer(item.id)}
                  >
                    xem
                  </Button>
                </Col>
              </Row>
            ))}

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
                  <Button onClick={onClosess} style={{ marginRight: 8 }}>
                    Hủy
                  </Button>
                </div>
      )}
            >
              <DetailCv
                detailCV={detailCV}
              />
            </Drawer>
          </Drawer>
        </Drawer>

        <div>
          { dataRecruitment.length ? renderListRecruitment() : <DataNull />}
        </div>
        {(dataRecruitment.length > 0) && (
          <Pagination
            onChange={handleChangePage}
            className="pagination__recruitment"
            defaultCurrent={1}
            defaultPageSize={formState.limit}
            total={total}
            current={current}
            showSizeChanger={false}
          />
        )}
      </Container>
    </Container>
  )
}

export default ListRecruitment
