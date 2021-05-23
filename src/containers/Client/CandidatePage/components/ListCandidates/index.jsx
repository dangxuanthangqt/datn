import { FrownOutlined } from '@ant-design/icons'
import {
  Avatar,
  Button,
  Col,
  Drawer,
  Pagination,
  Result,
  Row,
  Skeleton,
  Typography,
} from 'antd'
import { DataNull } from 'components/DataNull'
import DetailCv from 'containers/Client/CandidateDashboard/components/ListCv/DetailCv'
import { identity } from 'lodash'
import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import { useDispatch, useSelector } from 'react-redux'
import { detailCandidateSelector, listCandidateSelector } from 'stores/moduleCandidate/selectors'
import { dispatchFetchDetailCandidate, dispatchFetchListCandidate } from 'stores/moduleCandidate/thunks'
import { detailCVSelector, listCvByUserSelector } from 'stores/moduleCv/selectors'
import { dispatchFetchCvByUserIdRequest, dispatchFetchDetailCvRequest } from 'stores/moduleCv/thunks'
import { v4 } from 'uuid'

import './style.scss'

export default function ListCandidates(props) {
  const { formState, current, handleCurrent } = props
  const dispatch = useDispatch()
  const candidate = useSelector(listCandidateSelector)
  const listCvByUserId = useSelector(listCvByUserSelector)
  const detailCandidate = useSelector(detailCandidateSelector)
  const detailCV = useSelector(detailCVSelector)

  const [visibleChilds, setVisibleChilds] = useState(false)
  const onClosess = () => {
    setVisibleChilds(false)
  }

  useEffect(() => {
    dispatch(dispatchFetchListCandidate({
      name: formState.name, position: formState.position, limit: 9, page: 1,
    }))
  }, [formState])

  const showChildrensDrawer = (id) => {
    dispatch(dispatchFetchDetailCvRequest(id))
    setVisibleChilds(true)
  }
  const handleChangePage = (value) => {
    handleCurrent(value)
    dispatch(dispatchFetchListCandidate({
      name: formState.name, position: formState.position, limit: 9, page: value,
    }))
    window.scrollTo({
      top: 200,
      behavior: 'smooth',
    })
  }

  const { data = [], total } = candidate

  const [visible, setVisible] = useState(false)
  const onClose = () => {
    setVisible(false)
  }
  const onChildrensDrawerClose = () => {
    setVisibleChilds(false)
  }

  const handleDeitalCandidate = (item) => {
    setVisible(true)
    dispatch(dispatchFetchDetailCandidate(item.id))
    dispatch(dispatchFetchCvByUserIdRequest(item.user_id))
  }

  const datas = detailCandidate

  const renderListCandidate = () => {
    let jxs = []
    jxs = data.map((item) => (
      <div
        key={v4()}
        className="candidates__content-detail"
        onClick={() => handleDeitalCandidate(item)}
      >
        <Avatar size={150} src={item.avatar} />
        <h6>{item.name}</h6>
        <Row className="candidates__content-detail-dec">
          <p>
            Số điện thoại:
            {item.phone}
          </p>
          <p>
            Kinh nghiệm:
            {item.experience}
          </p>
          <p>
            Vị trị:
            {item.position}
          </p>

          <p>{item.address}</p>
        </Row>
      </div>
    ))
    return jxs
  }
  return (
    <Container fluid style={{ backgroundColor: '#F7F7F7' }}>
      <Container className="candidates">
        <Row className="candidates__title" style={{ backgroundColor: 'white' }}>
          <h5>Danh sách ứng viên</h5>
          <hr className="line-theme" />
        </Row>
        <Drawer
          title="Chi tiết ứng viên"
          width={700}
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
            </div>
          )}
        >
          <Row className="detail-content">
            <Avatar shape="square" size={100} src={datas.avatar} />
            <h5>{datas.name}</h5>
          </Row>
          <Row>
            <Col span={12} style={{ marginTop: '10px' }}>
              <p>
                Số điện thoại:
                {' '}
                {datas.phone ? datas.phone : 'Đang cập nhật'}
              </p>
              <p>
                Vị trị:
                {' '}
                {datas.position ? datas.position : 'Đang cập nhật'}
              </p>
              <p>
                Địa chỉ:
                {' '}
                {datas.address ? datas.address : 'Đang cập nhật'}
              </p>
            </Col>
            <Col span={12} style={{ marginTop: '10px' }}>
              <p>
                Kinh nghiệm:
                {' '}
                {datas.experience ? datas.experience : 'Đang cập nhật'}
              </p>
              <p>
                Ngày sinh:
                {' '}
                {datas.birthday ? datas.birthday : 'Đang cập nhật'}
              </p>
              <p>
                Email:
                {' '}
                {datas.email ? datas.email : 'Đang cập nhật'}
              </p>
            </Col>
          </Row>

          <div
            className="ant-divider ant-divider-horizontal"
            role="separator"
          />
          <Typography>DANH SÁCH CV:</Typography>
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
                >
                  Chon
                </Button>
                <Button
                  type="info"
                  onClick={() => showChildrensDrawer(item.id)}
                >
                  Xem
                </Button>
              </Col>
            </Row>
          ))}
        </Drawer>
        <Row className="candidates__content">
          { data.length
            ? renderListCandidate() : <DataNull />}
        </Row>
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
        {data.length === 0 ? (
          ''
        ) : (
          <Pagination
            onChange={handleChangePage}
            className="pagination__candidates"
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
