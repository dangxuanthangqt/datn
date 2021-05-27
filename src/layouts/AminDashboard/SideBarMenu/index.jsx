import {
  FormOutlined,
  HomeOutlined,
  SolutionOutlined,
  UserOutlined,
} from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

export default function SibarMenu() {
  return (
    <div className="admin-submenu">
      <div className="admin-submenu__content">
        <ul>
          <li>
            <HomeOutlined />
            <Link to="/admin-dashboard">Quản lý chung</Link>
          </li>
          <li>
            <SolutionOutlined />
            <Link to="/admin-dashboard/list-employer">Nhà tuyển dụng</Link>
          </li>
          <li>
            <FormOutlined />
            <Link to="/admin-dashboard/list-recruitment">Tin tuyển dụng</Link>
          </li>
          <li>
            <UserOutlined />
            <Link to="/admin-dashboard/list-candidate">Danh sách ứng viên</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
