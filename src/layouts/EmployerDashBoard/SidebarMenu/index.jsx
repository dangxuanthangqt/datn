import {
  FormOutlined, GlobalOutlined,

  HomeOutlined, PhoneOutlined, SendOutlined,

  SolutionOutlined,

  UserOutlined,
} from '@ant-design/icons'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { userIDSelector } from 'stores/moduleAuth/selectors'
import { infoEmployerSelector } from 'stores/moduleEmployer/selectors'
import { fetchInfoEmployerByUserIDRequest } from 'stores/moduleEmployer/thunks'
import './style.scss'

export default function SideBarMenu() {
  const userID = useSelector(userIDSelector)

  const infoEmployer = useSelector(infoEmployerSelector)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchInfoEmployerByUserIDRequest(userID))
  }, [dispatch])

  return (
    <div className="submenu">
      <div className="submenu__info">
        <img src={infoEmployer.avatar} alt="avatar" />
        <h5>{infoEmployer.company}</h5>
        <div>
          <p>
            <span>
              <SendOutlined />
            </span>
            Địa chỉ:
            {' '}
            {infoEmployer.address ? infoEmployer.address : 'Đang cập nhật'}
          </p>
          <p>
            <span>
              <GlobalOutlined />
            </span>
            Website:
            {' '}
            {infoEmployer.website ? infoEmployer.website : 'Đang cập nhật'}
          </p>
          <p>
            <span>
              <PhoneOutlined />
            </span>
            Số điện thoại:
            {' '}
            {infoEmployer.phone ? infoEmployer.phone : 'Đang cập nhật'}
          </p>
        </div>
      </div>
      <div className="submenu__content">
        <ul>
          <li>
            <HomeOutlined />
            <Link to="/employer-dashboard">Quản lý chung</Link>
          </li>
          <li>
            <SolutionOutlined />
            <Link to="/employer-dashboard/list-job">Tin tuyển dụng</Link>
          </li>
          <li>
            <FormOutlined />
            <Link to="/employer-dashboard/add-recruitment">
              Đăng tin tuyển dụng
            </Link>
          </li>
          <li>
            <UserOutlined />
            <Link to="/employer-dashboard/list-candidate">
              Danh sách ứng viên ứng tuyển
            </Link>
          </li>
          <li>
            <UserOutlined />
            <Link to="/employer-dashboard/list-cv-attention">
              Danh sách ứng viên quan tâm
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
