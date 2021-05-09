import {
  GlobalOutlined,
  HomeOutlined,
  PhoneOutlined,
  SendOutlined,
  SolutionOutlined,
} from '@ant-design/icons'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { userIDSelector } from 'stores/moduleAuth/selectors'
import { infoCandidateSelector } from 'stores/moduleCandidate/selectors'
import { dispatchFetchInfoCandidateRequest } from 'stores/moduleCandidate/thunks'
import './style.scss'

export default function SibarMenu() {
  const userID = useSelector(userIDSelector)

  const infoCandidate = useSelector(infoCandidateSelector)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(dispatchFetchInfoCandidateRequest(userID))
  }, [dispatch])

  return (
    <div className="submenu">
      <div className="submenu__info">
        <img src={infoCandidate.avatar} alt="avatar" />
        <h5>{infoCandidate.name}</h5>
        <div>
          <p>
            <span>
              <SendOutlined />
            </span>
            Vị trí:
            {infoCandidate.position ? infoCandidate.position : 'Đang cập nhật'}
          </p>
          <p>
            <span>
              <GlobalOutlined />
            </span>
            Kinh nghiệm:
            {infoCandidate.experience ? infoCandidate.experience : 'Đang cập nhật'}
          </p>
          <p>
            <span>
              <PhoneOutlined />
            </span>
            Phone:
            {infoCandidate.phone ? infoCandidate.phone : 'Đang cập nhật'}
          </p>
        </div>
      </div>
      <div className="submenu__content">
        <ul>
          <li>
            <HomeOutlined />
            <Link to="/candidate-dashboard">Quản lý chung</Link>
          </li>
          <li>
            <SolutionOutlined />
            <Link to="/candidate-dashboard/list-job">Tin Ứng tuyển</Link>
          </li>
          <li>
            <SolutionOutlined />
            <Link to="/candidate-dashboard/list-cv">Quản lý CV</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
