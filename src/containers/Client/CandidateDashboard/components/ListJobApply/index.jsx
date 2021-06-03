import { ExclamationCircleOutlined } from '@ant-design/icons'
import {
  Button,
  Col,
  Drawer,
  Form,
  Input,
  Modal,
  Pagination,
  Row,
} from 'antd'
import Avatar from 'antd/lib/avatar/avatar'
import { DataNull } from 'components/DataNull'
import { get } from 'lodash'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userIDSelector } from 'stores/moduleAuth/selectors'
import { recruitmentApplySelector } from 'stores/moduleCandidate/selectors'
import { dispatchDeleteApplyJobRequest, dispatchFetchListEmployerAttention, dispatchFetchListRecruitmentApply } from 'stores/moduleCandidate/thunks'
import { detailRecruimentSelector } from 'stores/moduleRecruitment/selectors'
import { dispatchfetchDetailRecruitment } from 'stores/moduleRecruitment/thunks'
import { v4 } from 'uuid'
import './style.scss'

function ListJobApply() {
  const userID = useSelector(userIDSelector)
  const dispatch = useDispatch()
  const [current, setCurrent] = useState(1)
  const recruitmentapplybyuserid = useSelector(recruitmentApplySelector)
  const detailRecruitment = useSelector(detailRecruimentSelector)

  useEffect(() => {
    dispatch(dispatchFetchListRecruitmentApply({
      id: userID, vacancy: '', limit: 5, page: 1,
    }))
  }, [dispatch])

  const [formState, setFormState] = useState({
    vacancy: '',
  })

  const handleChangeVacancy = (event) => {
    const { value } = event.target
    setFormState(() => ({
      ...formState,
      vacancy: value,
    }))
  }

  const onFinish = () => {
    setCurrent(1)
    dispatch(dispatchFetchListRecruitmentApply({
      id: userID, vacancy: formState.vacancy, limit: 5, page: 1,
    }))
  }

  const handleChangePage = (value) => {
    setCurrent(value)
    dispatch(dispatchFetchListRecruitmentApply({
      id: userID, vacancy: formState.vacancy, limit: 5, page: value,
    }))
  }

  const [visible, setVisible] = useState(false)

  const onClose = () => {
    setVisible(false)
  }

  const handleDeitalRecruitment = (id) => {
    setVisible(true)
    dispatch(dispatchfetchDetailRecruitment(id))
  }

  const datas = detailRecruitment

  const data = get(recruitmentapplybyuserid, 'data', [])

  const handelDelete = (id) => {
    setCurrent(1)
    dispatch(dispatchDeleteApplyJobRequest(id))
  }

  const handleDeleteApplyJob = (event) => {
    Modal.confirm({
      title: 'Thông báo',
      icon: <ExclamationCircleOutlined />,
      content: `Bạn có muốn hũy apply job ${event.vacancy}`,
      okText: 'Xóa',
      onOk: () => handelDelete(event.ids),
      cancelText: 'Hủy',
    })
  }

  const renderData = () => {
    let jsx = []
    jsx = data.map((value) => (
      <div key={v4()}>
        <Row className="list-employers-content">
          <Col className="list-employers-content-avatar" span={5}>
            <img src={value.photo} alt="avatar" />
          </Col>
          <Col className="list-employers-content-title" span={15}>
            <h5>{value.vacancy}</h5>
            <Row className="list-employers-content-title-dung">
              <Col span={12}>
                <p>
                  Số lượng:
                  {value.quantity}
                </p>
                <p>
                  Vị trí:
                  {value.career}
                </p>
                <p>
                  Địa chỉ:
                  {value.city}
                </p>
              </Col>
              <Col span={12}>
                <p>
                  Hạn nộp:
                  {value.end_date}
                </p>
                <p>
                  Mức lương:
                  {value.salary}
                </p>
                <p>
                  Hình thức:
                  {value.type_of_work}
                </p>
              </Col>
            </Row>
          </Col>
          <Col className="list-employers-content-button" span={4}>
            <Button
              type="primary"
              onClick={() => handleDeitalRecruitment(value.id)}
            >
              Chi tiết
            </Button>

            <Button
              type="primary"
              onClick={() => handleDeleteApplyJob(value)}
            >
              Hủy ứng tuyển
            </Button>
          </Col>
        </Row>
      </div>
    ))
    return jsx
  }

  return (
    <div className="list-employer-db">
      <div className="list-employer-db__search">
        <Form
          onFinish={onFinish}
          className="list-employer-db__search-form"
          style={{ height: '32px' }}
        >
          <Form.Item
            name="vacancy"
            className="list-employer-db__search-form-input"
            onChange={handleChangeVacancy}
          >
            <Input placeholder="Tìm kiếm tin tuyển dụng" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Tìm kiếm
            </Button>
          </Form.Item>
        </Form>
        <Drawer
          title="Chi tiết việc làm"
          width={720}
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
            <Avatar shape="square" size={100} src={datas.photo} />
            <h5>{datas.vacancy}</h5>
          </Row>
          <Row>
            <Col span={12}>
              <p>
                Số lượng:
                {' '}
                {datas.quantity}
              </p>
              <p>
                Vị trị:
                {' '}
                {datas.rank}
              </p>
              <p>
                Hình thức:
                {' '}
                {datas.type_of_work}
              </p>
            </Col>
            <Col span={12}>
              <p>
                Mức lương:
                {' '}
                {datas.salary}
              </p>
              <p>
                Hạn nộp:
                {' '}
                {datas.end_date}
              </p>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <p>
                Mô tả:
                {' '}
                {datas.description}
              </p>
              <p>
                Quyền lợi được hưởng:
                {' '}
                {datas.entitlements}
              </p>
              <p>
                Yêu cầu công việc:
                {' '}
                {datas.job_requirements}
              </p>
              <p>
                Yêu cầu hồ sơ:
                {' '}
                {datas.requested_documents}
              </p>
              <p>
                Địa chỉ:
                {' '}
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
                {' '}
                {datas.website}
              </p>
              <p>
                Người liên hệ:
                {' '}
                {datas.contact}
              </p>
              <p>
                Địa chỉ công ty:
                {' '}
                {datas.address}
              </p>
            </Col>
          </Row>
        </Drawer>
      </div>
      <div className="list-employers">
        {
          data.length ? renderData() : DataNull()
        }

        {data.length === 0 ? (
          ''
        ) : (
          <div className="custom-pagination">
            <Pagination
              onChange={handleChangePage}
              defaultCurrent={1}
              defaultPageSize={5}
              total={recruitmentapplybyuserid.total}
              current={current}
            />
          </div>
        )}
      </div>
    </div>
  )
}
export default ListJobApply
