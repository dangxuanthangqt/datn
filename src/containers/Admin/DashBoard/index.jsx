import {
  CheckSquareOutlined,
  CloseSquareOutlined,
  PieChartOutlined,
} from '@ant-design/icons'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dashBoardAdminSelector } from 'stores/moduleAdmin/selectors'
import { dispatchFetchDashBoardAdminRequest } from 'stores/moduleAdmin/thunks'
import './style.scss'

function Dashboard() {
  const dispatch = useDispatch()
  const dashboardAdmin = useSelector(dashBoardAdminSelector)

  useEffect(() => {
    dispatch(dispatchFetchDashBoardAdminRequest())
  }, [dispatch])

  return (
    <div className="mainAdmin">
      <div className="mainAdmin__cover" />
      <div className="mainAdmin__info">
        <div className="mainAdmin__info-item">
          <h3>{dashboardAdmin.recruitments}</h3>
          <h5>
            <PieChartOutlined />
            Việc làm đã duyệt
          </h5>
        </div>
        <div className="mainAdmin__info-item">
          <h3>{dashboardAdmin.employers}</h3>
          <h5>
            <CheckSquareOutlined />
            Nhà tuyển dụng đã duyệt
          </h5>
        </div>
        <div className="mainAdmin__info-item">
          <h3>{dashboardAdmin.candidates}</h3>
          <h5>
            <CloseSquareOutlined />
            Ứng viên đã duyệt
          </h5>
        </div>
      </div>
      <div className="mainAdmin__info" style={{ marginTop: '30px' }}>
        <div className="mainAdmin__info-item">
          <h3>{dashboardAdmin.recruitments_no_active}</h3>
          <h5>
            <PieChartOutlined />
            Việc làm chưa duyệt
          </h5>
        </div>
        <div className="mainAdmin__info-item">
          <h3>{dashboardAdmin.employers_no_active}</h3>
          <h5>
            <CheckSquareOutlined />
            Nhà tuyển dụng chưa duyệt
          </h5>
        </div>
        <div className="mainAdmin__info-item">
          <h3>{dashboardAdmin.candidates_no_active}</h3>
          <h5>
            <CloseSquareOutlined />
            Ứng viên chưa duyệt
          </h5>
        </div>
      </div>
    </div>
  )
}
export default Dashboard
