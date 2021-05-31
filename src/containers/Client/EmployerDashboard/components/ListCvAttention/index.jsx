import { ExclamationCircleOutlined } from '@ant-design/icons'
import {
  Button,
  Col,
  Drawer,

  Modal,
  Row,
  Skeleton,
} from 'antd'
import { DataNull } from 'components/DataNull'
import DetailCv from 'containers/Client/CandidateDashboard/components/ListCv/DetailCv'
import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import { useDispatch, useSelector } from 'react-redux'
import { userIDSelector } from 'stores/moduleAuth/selectors'
import { dispatchRejectEmployerAttention } from 'stores/moduleCandidate/thunks'
import { detailCVSelector } from 'stores/moduleCv/selectors'
import { dispatchFetchDetailCvRequest } from 'stores/moduleCv/thunks'
import { listCvAttentionSelector } from 'stores/moduleEmployer/selectors'
import { getAttentionCV } from 'stores/moduleEmployer/thunks'
import { v4 } from 'uuid'
import '../ListJobEmployer/style.scss'
import './style.scss'

export default function ListCandidateDB() {
  const userID = useSelector(userIDSelector)
  const dispatch = useDispatch()
  const listCvAttention = useSelector(listCvAttentionSelector)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    dispatch(getAttentionCV(userID))
  }, [dispatch])

  const data = listCvAttention?.[0] || []
  const showDrawer = (value) => {
    dispatch(dispatchFetchDetailCvRequest(value.cv_id))
    setVisible(true)
  }
  const onClose = () => {
    setVisible(false)
  }

  const detailCV = useSelector(detailCVSelector)

  const title = detailCV.title
    ? `Chi tiết CV: ${detailCV.title}`
    : ''

  const onReject = (cvID) => {
    dispatch(dispatchRejectEmployerAttention({ cvID, userID }))
  }

  const handleReject = (payload) => {
    Modal.confirm({
      title: 'Thông báo',
      icon: <ExclamationCircleOutlined />,
      content: 'Từ chối',
      okText: 'Xác nhận',
      onOk: () => onReject(payload.cv_id),
      cancelText: 'Hủy',
    })
  }

  const renderData = () => {
    let jsx = []
    jsx = data.map((value) => (
      <div key={v4()} className="listCandidatesDb">
        <Row className="listCandidatesDb__content">
          <Col className="listCandidatesDb__content-avatar" span={5}>
            <img src={value.avatar} alt="avatar" />
          </Col>
          <Col className="listCandidatesDb__content-title" span={15}>
            <h5>{value.name}</h5>
            <Row>
              <Col span={12}>
                <p>
                  SĐT:
                  {value.phone}
                </p>
                <p>
                  Địa chỉ:
                  {value.address}
                </p>
              </Col>
              <Col span={12}>
                <p>
                  Kinh Nghiệm:
                  {value.experience}
                </p>
                <p>
                  Vị trí:
                  {value.position}
                </p>
                <p>
                  Tên job:
                  {value.vacancy}
                </p>
              </Col>
            </Row>
          </Col>
          <Col className="listCandidatesDb__content-button" span={4}>
            <Button type="primary" onClick={() => showDrawer(value)}>
              Xem CV
            </Button>
            <Button
              type="primary"
              onClick={() => handleReject(value)}
            >
              Từ chối
            </Button>
          </Col>
        </Row>
      </div>
    ))
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
    <Container>
      <div className="list-employer-db__search">
        <Drawer
          title={title}
          width={1100}
          closable
          onClose={onClose}
          visible={visible}
          className="drawer-cv"
          footer={(
            <div
              style={{
                textAlign: 'right',
              }}
            >
              <Button onClick={onClose} style={{ marginRight: 8 }}>
                Hủy
              </Button>
              {/* <Button type="primary">Tải xuống</Button> */}
            </div>
          )}
        >
          <DetailCv detailCV={detailCV} />
        </Drawer>

      </div>
      { data.length ? renderData() : <DataNull />}

    </Container>
  )
}
