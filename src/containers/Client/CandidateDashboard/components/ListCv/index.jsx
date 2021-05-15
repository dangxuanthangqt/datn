import React, { useEffect, useState } from 'react'
import {
  Row, Col, Button, Modal, Drawer,
} from 'antd'
import './style.scss'
import { PlusOutlined, ExclamationCircleOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import { userIDSelector } from 'stores/moduleAuth/selectors'
import {
  dispatchFetchCvByUserIdRequest,
  dispatchDeleteCvRequest, dispatchFetchDetailCvRequest,
} from 'stores/moduleCv/thunks'

import { v4 } from 'uuid'
import { detailCVSelector, listCvByUserSelector } from 'stores/moduleCv/selectors'
import DetailCv from './DetailCv'

function ListCv(props) {
  const [visible, setVisible] = useState(false)
  const userId = useSelector(userIDSelector)
  const detailCV = useSelector(detailCVSelector)

  const listCvByUserId = useSelector(listCvByUserSelector)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(dispatchFetchCvByUserIdRequest(userId))
  }, [dispatch])

  const handelDeleteCv = (id) => {
    dispatch(dispatchDeleteCvRequest(id))
  }

  function confirm(e) {
    const result = listCvByUserId.find((item) => {
      if (e === item.id) {
        return item
      }
      return {}
    })

    Modal.confirm({
      title: 'Thông báo',
      icon: <ExclamationCircleOutlined />,
      content: `Bạn có muốn xóa ${result.title}`,
      okText: 'Xóa',
      onOk: () => handelDeleteCv(result.id),
      cancelText: 'Hủy',
    })
  }

  const showDrawer = (value) => {
    dispatch(dispatchFetchDetailCvRequest(value.id))
    setVisible(true)
  }
  const onClose = () => {
    setVisible(false)
  }

  const title = detailCV.title
    ? `Chi tiết CV: ${detailCV.title}`
    : ''

  return (
    <>
      <Row className="CV__title">
        <h3>Danh sách CV</h3>
      </Row>
      <Row className="listCV">
        <Drawer
          title={title}
          width={1200}
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
        {listCvByUserId.map((item) => (
          <Col key={v4()} span={8} className="listCV__item">
            <div className="listCV__item-detail">
              <img src={item.avatar} alt="avatar" />
              <div className="listCV__item-detail-overlay">
                <Button
                  type="primary"
                  className="listCV__item-detail-overlay-btn"
                  onClick={() => showDrawer(item)}
                >
                  Xem CV
                </Button>
                <Button
                  type="primary"
                  className="listCV__item-detail-overlay-btn"
                  onClick={() => confirm(item.id)}
                >
                  Xóa
                </Button>
              </div>
              <h4>{item.title}</h4>
            </div>
          </Col>
        ))}
        <Col span={8} className="listCV__item">
          <div className="listCV__item-detail">
            <RouterLink to="/cv">
              <div className="listCV__item-detail-push">
                <PlusOutlined />
                <h4>Thêm cv mới</h4>
              </div>
            </RouterLink>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default ListCv
