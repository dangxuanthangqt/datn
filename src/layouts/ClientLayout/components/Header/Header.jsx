import { ExclamationCircleOutlined } from '@ant-design/icons'
import { Modal } from 'antd'
import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
// import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import Logo from 'asset/logo.png'
// import { checkRole } from '../../../../helper/checkRole'
// import history from '../../../../helper/history'
// import { clearUserData, getUserDatas } from '../../../../helper/localStorage'
// import { getUserData } from '../../../../redux/actionCreators/loginActionCreators'
import './style.scss'

function Header() {
  console.log('headr')
  // const dispatch = useDispatch()
  // function isEmpty(obj) {
  //   for (const prop in obj) {
  //     if (obj.hasOwnProperty(prop)) return false
  //   }
  //   return true
  // }
  // const dataUser = useSelector((state) => state.login.userData)
  const dataUser = {}
  // if (isEmpty(dataUser)) {
  //   dispatch(getUserData(getUserDatas()))
  // }
  const handleLogout = () => {
    // history.push('/login')
    // clearUserData()
    // dispatch(getUserData(getUserDatas()))
    console.log('logout')
  }
  function confirm() {
    Modal.confirm({
      className: 'modal__confirm-custom',
      title: 'Bạn có muốn đăng xuất không',
      icon: <ExclamationCircleOutlined />,
      okText: 'Đăng xuất',
      cancelText: 'Huỷ',
      onOk: handleLogout,
    })
  }

  const ActiveUser = () => (
    <>
      <NavDropdown
        title={dataUser.name ? dataUser.name : ''}
        className="dropdow__custom"
        id="collasible-nav-dropdown"
      >
        <RouterLink
          className="dropdown-item"
          to="/"
        >
          Quản lý thông tin
        </RouterLink>
        {/* {isCheckUser === "candidate" ? (
            <RouterLink className="dropdown-item" to="/cv">
              Tạo nhanh CV
            </RouterLink>
          ) : (
            ""
          )} */}
        <RouterLink className="dropdown-item" onClick={confirm}>
          Đăng xuất
        </RouterLink>
      </NavDropdown>
    </>
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
            <RouterLink className="nav-link" to="/candidate">
              Ứng viên
            </RouterLink>
          </Nav>
          <Nav>
            {dataUser ? (
              <ActiveUser />
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
