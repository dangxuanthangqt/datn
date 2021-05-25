import {
  CheckSquareOutlined,
  CloseSquareOutlined, PieChartOutlined,

  UserAddOutlined,
} from '@ant-design/icons'
import { Col, Row } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userIDSelector } from 'stores/moduleAuth/selectors'
import { dashboardEmployerSelector } from 'stores/moduleEmployer/selectors'
import { dispatchFetchDashboardEmployerRequest } from 'stores/moduleEmployer/thunks'
import InforEmployer from '../InforEmployer'
import './style.scss'

export default function MainDashBroad() {
  const userID = useSelector(userIDSelector)

  const dispatch = useDispatch()
  const dashboardEmployer = useSelector(dashboardEmployerSelector)

  useEffect(() => {
    dispatch(dispatchFetchDashboardEmployerRequest(userID))
  }, [dispatch])

  return (
    <>
      <div className="maindb">
        <div className="maindb__cover" />
        <div className="maindb__info">
          <div className="maindb__info-item">
            <h3>{dashboardEmployer.quantity_recruitment}</h3>

            <h5>
              <PieChartOutlined />
              Tổng số việc làm
            </h5>
          </div>
          <div className="maindb__info-item">
            <h3>{dashboardEmployer.quantity_recruitment_active}</h3>

            <h5>
              <CheckSquareOutlined />
              Việc đã duyệt
            </h5>
          </div>
          <div className="maindb__info-item">
            <h3>{dashboardEmployer.quantity_recruitment_no_active}</h3>

            <h5>
              <CloseSquareOutlined />
              Việc chưa duyệt
            </h5>
          </div>
          <div className="maindb__info-item">
            <h3>{dashboardEmployer.quantity_candidate}</h3>
            <h5>
              <UserAddOutlined />
              Ứng viên ứng tuyển
            </h5>
          </div>
        </div>
      </div>
      <div className="info-detail">
        <Row>
          <Col span={24}>
            <InforEmployer />
          </Col>
        </Row>
      </div>
    </>
  )
}
