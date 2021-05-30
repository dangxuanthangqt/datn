import { ExclamationCircleOutlined } from '@ant-design/icons'
import { Modal } from 'antd'
import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link as RouterLink } from 'react-router-dom'
import Logo from 'asset/logo.png'
import './style.scss'
import { permissionSelector, userSelector } from 'stores/moduleAuth/selectors'
import { useSelector, useDispatch } from 'react-redux'
import { includes, isEmpty } from 'lodash-es'
import roles from 'constants/roles'
import { logoutSuccess } from 'stores/moduleAuth/slices'
import { push } from 'connected-react-router'
import { resetDetailCV } from 'stores/moduleCv/slices'

function Header() {
  const dispatch = useDispatch()
  const dataUser = useSelector(userSelector)
  const permission = useSelector(permissionSelector)
  const handleLogout = () => {
    dispatch(logoutSuccess())
    dispatch(push('/'))
  }

  function confirm() {
    Modal.confirm({
      className: 'modal__confirm-custom',
      title: 'Bạn có muốn đăng xuất không',
      icon: <ExclamationCircleOutlined />,
      okText: 'Đăng xuất',
      cancelText: 'Huỷ',
      onOk: handleLogout,
      centered: true,
    })
  }

  // eslint-disable-next-line react/prop-types
  const ActiveUser = ({ user }) => (
    <NavDropdown
      // eslint-disable-next-line react/prop-types
      title={user.name ? user.name : ''}
      className="dropdow__custom"
      id="collasible-nav-dropdown"
    >
      <RouterLink
        className="dropdown-item"
        to={includes(permission, roles.Candidate) ? '/candidate-dashboard' : '/employer-dashboard'}
      >
        Quản lý thông tin
      </RouterLink>
      {
        includes(permission, roles.Candidate) && (
        <RouterLink onClick={() => dispatch(resetDetailCV())} className="dropdown-item" to="/cv">
          Tạo nhanh CV
        </RouterLink>
        )
      }
      <RouterLink className="dropdown-item" onClick={confirm}>
        Đăng xuất
      </RouterLink>
    </NavDropdown>
  )

  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" className="header">
      <Container>
        <Navbar.Brand href="">
          <RouterLink to="/">
            <img src={Logo} alt="logo" />
          </RouterLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="header__content">
          <Nav className="mr-auto">
            <RouterLink className="nav-link" to="/">
              Trang chủ
            </RouterLink>
            {/* <RouterLink className="nav-link" to="/news">
              Tin tức
            </RouterLink> */}
            <RouterLink className="nav-link" to="/recruitments">
              Việc làm
            </RouterLink>
            <RouterLink className="nav-link" to="/employer">
              Nhà tuyển dụng
            </RouterLink>
            {
              includes(permission, roles.Employer) && (
              <RouterLink className="nav-link" to="/candidate">
                Ứng viên
              </RouterLink>
              )
            }

          </Nav>
          <Nav>
            { !isEmpty(dataUser) ? (
              <ActiveUser user={dataUser} />
            ) : (
              <>
                <RouterLink className="nav-link" to="/signup">
                  Đăng ký
                </RouterLink>
                <RouterLink className="nav-link" to="/login">
                  Đăng nhập
                </RouterLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default Header
