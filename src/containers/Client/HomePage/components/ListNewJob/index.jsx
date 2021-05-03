import { SendOutlined } from '@ant-design/icons'
import {
  Avatar, Badge, Button, Col, Drawer, Row,
  Skeleton,
  Tag,
} from 'antd'
import roles from 'constants/roles'
import { format } from 'date-fns'
import { includes } from 'lodash'
// import JwtDecode from 'jwt-decode'
import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import { permissionSelector } from 'stores/moduleAuth/selectors'
// import { userIDSelector } from 'stores/moduleAuth/selectors'
import { listRecruitmentOrderSelector } from 'stores/moduleRecruitment/selectors'
import { fetchListRecruitmentOrderRequest } from 'stores/moduleRecruitment/thunks'
import { v4 } from 'uuid'
// import { checkRole } from '../../../../../../helper/checkRole'
// import { getAccessToken } from '../../../../../../helper/localStorage'
// import {
//   getCvByIdRequest,
//   getCvByUserIdRequest,
// } from '../../../../../../redux/actionCreators/cvActionCreator'
// import {
//   applyJobRequest,
//   getDetailRecruitmentRequest,
// } from '../../../../../../redux/actionCreators/recruitmentActionCreator'
// import DetailCv from '../../../CandidateDashbroad/component/ListCv/DetailCv'
import './style.scss'

// import history from '../../../../../../helper/history'

export default function ListNewJob() {
  const recruitmentOrder = useSelector(listRecruitmentOrderSelector)
  console.log('recruitmentOrder', recruitmentOrder)
  const permission = useSelector(permissionSelector)
  //  const userID = useSelector(userIDSelector)
  const dispatch = useDispatch()
  // detail
  // const detailRecruitment = useSelector(
  //   (state) => state.recruitment.detailRecruitment,
  // )
  // const datas = detailRecruitment.result[0]
  const datas = {}

  const [visible, setVisible] = useState(false)
  const [visibleChild, setVisibleChild] = useState(false)
  const [visibleChilds, setVisibleChilds] = useState(false)
  // const [recruitmentid, setRecruitmentid] = useState(1)

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

  // const showChildrensDrawer = () => {
  //   // dispatch(getCvByIdRequest(id))
  //   setVisibleChilds(true)
  // }

  // const handelApply = (id) => {
  //   // const data = { cv_id: id, recruitment_id: recruitmentid }
  //   console.log(id)
  //   // dispatch(applyJobRequest(data))
  // }

  useEffect(() => {
    dispatch(fetchListRecruitmentOrderRequest())
  }, [dispatch])

  // const addCv = () => {
  //   history.push('/cv')
  // }
  const handleDeitalRecruitment = () => {
    // setRecruitmentid(id)
    setVisible(true)
    // dispatch(getDetailRecruitmentRequest(id))

    // history.push(`/recruitments/${id}`);
  }
  const renderListRecruitments = () => {
    let jsx = []
    if (recruitmentOrder.length > 0) {
      jsx = recruitmentOrder.map((item) => (
        <Badge.Ribbon
          key={v4()}
          placement="start"
          text="Tin hot"
          className="custom-notical"
        >
          <Row
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
                    <Tag color="blue">JavaScript</Tag>
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
              <Button type="primary" onClick={() => handleDeitalRecruitment(item.id)}>Chi tiết</Button>
            </Col>
          </Row>
        </Badge.Ribbon>
      ))
    }
    return jsx
  }
  const dataNull = () => (
    <>
      <Skeleton avatar paragraph={{ rows: 4 }} />
      <Skeleton avatar paragraph={{ rows: 4 }} />
      <Skeleton avatar paragraph={{ rows: 4 }} />
      <Skeleton avatar paragraph={{ rows: 4 }} />
      <Skeleton avatar paragraph={{ rows: 4 }} />
    </>
  )

  // const handleApplyCV = (item) => {
  //   Modal.confirm({
  //     title: 'Thông báo',
  //     icon: <ExclamationCircleOutlined />,
  //     content: `Bạn có muốn apply CV ${item.title}`,
  //     okText: 'Xác Nhận',
  //     onOk: () => handelApply(item.id),
  //     cancelText: 'Hủy',
  //   })
  // }

  // const detailCv = useSelector((state) => state.cv.detailCv)
  // const dataUser = useSelector((state) => state.cv.dataUser)
  // const dataCV = useSelector((state) => state.cv.dataCV)

  // const token = getAccessToken()
  // if (token) {
  //   var id = JwtDecode(token).sub
  // }

  // const listCvByUserId = useSelector((state) => state.cv.listCvByUserId)

  const showChildrenDrawer = () => {
    // dispatch(getCvByUserIdRequest(id))
    setVisibleChild(true)
  }

  return (
    <div className="bg">
      <Container className="job">
        <Row className="job__title">
          <h5>Danh sách việc làm mới nhất</h5>
          <hr className="line-theme" />
          <RouterLink to="/recruitments">
            <h5>
              <SendOutlined />
              {' '}
              Tất cả việc làm
            </h5>
          </RouterLink>
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
              { includes(permission, roles.Candidate) ? (
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
            <Avatar shape="square" size={100} src={datas.photo} />
            <h5>{datas.vacancy}</h5>
          </Row>
          <Row>
            <Col span={12}>
              <p>
                Số lượng:
                {datas.quantity}
              </p>
              <p>
                Vị trị:
                {datas.rank}
              </p>
              <p>
                Hình thức:
                {datas.type_of_work}
              </p>
            </Col>
            <Col span={12}>
              <p>
                Mức lương:
                {datas.salary}
              </p>
              <p>
                Hạn nộp:
                {datas.end_date}
              </p>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <p>
                Mô tả:
                {datas.description}
              </p>
              <p>
                Quyền lợi được hưởng:
                {datas.entitlements}
              </p>
              <p>
                Yêu cầu công việc:
                {datas.job_requirements}
              </p>
              <p>
                Yêu cầu hồ sơ:
                {datas.requested_documents}
              </p>
              <p>
                Địa chỉ:
                {datas.city}
              </p>
            </Col>
          </Row>
          <div
            className="ant-divider ant-divider-horizontal"
            role="separator"
          />

          <Row className="detail-content">
            <Avatar shape="square" size={100} src={datas.avatar} />
            <h5>{datas.company}</h5>
          </Row>
          <Row>
            <Col span={24}>
              <p>
                Website:
                {datas.website}
              </p>
              <p>
                Người liên hệ:
                {datas.contact}
              </p>
              <p>
                Địa chỉ công ty:
                {datas.address}
              </p>
              <p>
                Mô tả công ty:
                {datas.employers_description}
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
                  Thêm CV
                </Button>
              </div>
            )}
          >
            {/* {listCvByUserId.result.map((item) => (
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
            ))} */}

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
              {/* <DetailCv
                dataUser={dataUser}
                detailCv={detailCv}
                dataCV={dataCV}
              /> */}
            </Drawer>
          </Drawer>
        </Drawer>

        {recruitmentOrder.length > 2 ? renderListRecruitments() : dataNull()}
      </Container>
    </div>
  )
}
