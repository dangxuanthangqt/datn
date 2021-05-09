import { CloseSquareOutlined, UserAddOutlined } from '@ant-design/icons'
import { Col, Row } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userIDSelector } from 'stores/moduleAuth/selectors'
import { dashboardCandidateSelector } from 'stores/moduleCandidate/selectors'
import { dispatchFetchDashboardCandidateRequest } from 'stores/moduleCandidate/thunks'
import InforCandidate from '../InforCandidate'
import './style.scss'

export default function MainDashBroad() {
  const UserID = useSelector(userIDSelector)
  const dispatch = useDispatch()
  const dashboardCandidate = useSelector(dashboardCandidateSelector)

  useEffect(() => {
    dispatch(dispatchFetchDashboardCandidateRequest(UserID))
  }, [dispatch])

  return (
    <>
      <div className="maindb">
        <div className="maindb__cover" />
        <div className="maindb__info">
          <div className="maindb__info-item">
            <h3>{dashboardCandidate.job}</h3>
            <h5>
              <CloseSquareOutlined />
              Việc làm đã Apply
            </h5>
          </div>
          <div className="maindb__info-item">
            <h3>{dashboardCandidate.cv}</h3>
            <h5>
              <UserAddOutlined />
              CV đã tạo
            </h5>
          </div>
        </div>
      </div>
      <div className="info-detail">
        <Row>
          <Col span={24}>
            <InforCandidate />
          </Col>
        </Row>
      </div>
    </>
  )
}
