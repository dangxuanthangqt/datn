import {
  ExclamationCircleOutlined,
  GlobalOutlined,
  HomeOutlined,
  IdcardOutlined, PhoneOutlined,
} from '@ant-design/icons'
import {
  Avatar, Badge, Button, Col, Drawer, Pagination, Row, Tag, Modal,
} from 'antd'
import { DataNull } from 'components/DataNull'
import roles from 'constants/roles'
import DetailCv from 'containers/Client/CandidateDashboard/components/ListCv/DetailCv'
import history from 'helpers/history'
import { includes } from 'lodash'
import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { permissionSelector, userIDSelector } from 'stores/moduleAuth/selectors'
import { detailCVSelector, listCvByUserSelector } from 'stores/moduleCv/selectors'
import { dispatchFetchCvByUserIdRequest, dispatchFetchDetailCvRequest } from 'stores/moduleCv/thunks'
import { infoEmployerSelector } from 'stores/moduleEmployer/selectors'
import { fetchInfoEmployerRequest } from 'stores/moduleEmployer/thunks'
import { detailRecruimentSelector, listRecruitmentByUserIDSelector } from 'stores/moduleRecruitment/selectors'
import { dispatchApplyJob, dispatchfetchDetailRecruitment, dispatchfetchLitsRecruitmentByEmployerID } from 'stores/moduleRecruitment/thunks'
import { v4 } from 'uuid'
import './style.scss'
import '../../../HomePage/components/ListNewJob/style.scss'

export default function EmployerDetail() {
  const { id } = useParams()

  const [current, setCurrent] = useState(1)
  const userId = useSelector(userIDSelector)
  const dispatch = useDispatch()
  const permission = useSelector(permissionSelector)
  const listCvByUserId = useSelector(listCvByUserSelector)
  const detailCV = useSelector(detailCVSelector)

  const inforDetailEmployer = useSelector(infoEmployerSelector)
  const listRecruitmentByEmployerId = useSelector(listRecruitmentByUserIDSelector)

  useEffect(() => {
    dispatch(fetchInfoEmployerRequest(id))
    setCurrent(1)
    dispatch(dispatchfetchLitsRecruitmentByEmployerID({ id, limit: 5, page: 1 }))
  }, [])

  const data = inforDetailEmployer
  const dataJob = listRecruitmentByEmployerId.data || []
  const { total } = listRecruitmentByEmployerId
  const [recruitmentid, setRecruitmentid] = useState(1)

  const handleChangePage = (value) => {
    setCurrent(value)
    dispatch(dispatchfetchLitsRecruitmentByEmployerID({ id, limit: 5, page: value }))
  }

  const [visible, setVisible] = useState(false)
  const [visibleChild, setVisibleChild] = useState(false)
  const [visibleChilds, setVisibleChilds] = useState(false)

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

  const handelApply = (cvID) => {
    const dataApply = { cv_id: cvID, recruitment_id: recruitmentid }
    dispatch(dispatchApplyJob(dataApply))
  }
  const handleApplyCV = (item) => {
    Modal.confirm({
      title: 'Th??ng b??o',
      icon: <ExclamationCircleOutlined />,
      content: `B???n c?? mu????n apply CV ${item.title}`,
      okText: 'Xa??c Nh????n',
      onOk: () => handelApply(item.id),
      cancelText: 'H???y',
    })
  }

  const showChildrensDrawer = (CVid) => {
    dispatch(dispatchFetchDetailCvRequest(CVid))
    setVisibleChilds(true)
  }

  const showChildrenDrawer = () => {
    dispatch(dispatchFetchCvByUserIdRequest(userId))
    setVisibleChild(true)
  }

  const handleDeitalRecruitment = (_id) => {
    setRecruitmentid(_id)
    setVisible(true)
    dispatch(dispatchfetchDetailRecruitment(_id))
  }

  const addCv = () => {
    history.push('/cv')
  }

  const detailRecruitment = useSelector(
    detailRecruimentSelector,
  )
  const datas = detailRecruitment

  const renderListRecruitment = () => {
    let jsx = []
    if (dataJob.length > 0) {
      jsx = dataJob.map((item) => {
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
                // onClick={() => handleDeitalRecruitment(item.id)}
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
                        M???c l????ng:
                        {item.salary}
                      </p>
                      <p>
                        S??? l?????ng:
                        {item.quantity}
                      </p>
                      <p>
                        Skill:
                        <Tag color="blue">{item.career}</Tag>
                      </p>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} span={12}>
                      <p>
                        H???n n???p:
                        <span>{item.end_date}</span>
                      </p>
                      <p>
                        Th??nh ph???:
                        {item.city}
                      </p>
                      <p>
                        V??? tr??:
                        {item.rank}
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <p>
                      M?? t???:
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
                  <Button type="primary">???ng tuy???n</Button>
                  <Button type="primary">Chi ti???t</Button>
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
                    M???c l????ng:
                    {item.salary}
                  </p>
                  <p>
                    S??? l?????ng:
                    {item.quantity}
                  </p>
                  <p>
                    Skill:
                    <Tag color="blue">{item.career}</Tag>
                  </p>
                </Col>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} span={12}>
                  <p>
                    H???n n???p:
                    <span>{item.end_date}</span>
                  </p>
                  <p>
                    Th??nh ph???:
                    {item.city}
                  </p>
                  <p>
                    V??? tr??:
                    {item.rank}
                  </p>
                </Col>
              </Row>
              <Row>
                <p>
                  M?? t???:
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
                Chi ti???t
              </Button>
            </Col>
          </Row>
        )
      })
    }
    return jsx
  }

  return (
    <>
      <Container>
        <div id="employerID">
          <div className="employerID">
            <div className="employerID-info">
              <h4>{data.company ? data.company : '??ang c????p nh????t'}</h4>
              <p>
                <PhoneOutlined />
                {data.phone ? data.phone : '??ang c????p nh????t'}
              </p>
              <p>
                <GlobalOutlined />
                {data.website ? data.website : '??ang c????p nh????t'}
              </p>
              <p>
                <HomeOutlined />
                {data.address ? data.address : '??ang c????p nh????t'}
              </p>
              <p>
                <IdcardOutlined />
                {data.description ? data.description : '??ang c????p nh????t'}
              </p>
            </div>
          </div>
          <div className="employerID__cover">
            <img src={data.photo} alt="avatar" />
          </div>
          <div className="employerID__avatar">
            <img src={data.avatar} alt="avatar" />
          </div>
        </div>
        <div className="recruitment">
          <Row
            className="job__title"
            style={{ backgroundColor: 'white', display: 'relative' }}
          >
            <h5>Danh s??ch vi???c l??m</h5>
            <hr className="line-theme" />
          </Row>
          <Drawer
            title="Chi ti???t vi???c l??m"
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
                  H???y
                </Button>
                {includes(permission, roles.Candidate) ? (
                  <Button type="primary" onClick={showChildrenDrawer}>
                    ???ng tuy???n
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
              <Col className="info-recruitment" span={12}>
                <p>
                  S??? l?????ng:
                  {datas.quantity}
                </p>
                <p>
                  V??? tr???:
                  {datas.rank}
                </p>
                <p>
                  H??nh th???c:
                  {datas.type_of_work}
                </p>
              </Col>
              <Col span={12}>
                <p>
                  M???c l????ng:
                  {datas.salary}
                </p>
                <p>
                  H???n n???p:
                  {datas.end_date}
                </p>
              </Col>
            </Row>
            <Row>
              <Col className="info-recruitment" span={24}>
                <p>
                  M?? t???:
                  {datas.description}
                </p>
                <p>
                  Quy???n l???i ???????c h?????ng:
                  {datas.entitlements}
                </p>
                <p>
                  Y??u c???u c??ng vi???c:
                  {datas.job_requirements}
                </p>
                <p>
                  Y??u c???u h??? s??:
                  {datas.requested_documents}
                </p>
                <p>
                  ?????a ch???:
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
              <Col className="info-recruitment" span={24}>
                <p>
                  Website:
                  {datas.website}
                </p>
                <p>
                  Ng?????i li??n h???:
                  {datas.contact}
                </p>
                <p>
                  ?????a ch??? c??ng ty:
                  {datas.address}
                </p>
                <p>
                  M?? t??? c??ng ty:
                  {datas.employers_description}
                </p>
              </Col>
            </Row>

            <Drawer
              title="Ch???n CV"
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
                    H???y
                  </Button>
                  {/* <Button type="primary">
                    Th??m CV
                  </Button> */}
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
                title="Chi ti????t CV"
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
                      H???y
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
            {dataJob.length === 0 ? DataNull() : renderListRecruitment()}
          </div>
          {dataJob.length === 0 ? (
            ''
          ) : (
            <Pagination
              onChange={handleChangePage}
              className="pagination__employer"
              defaultCurrent={1}
              defaultPageSize={5}
              total={total}
              current={current}
            />
          )}
        </div>
      </Container>
    </>
  )
}
