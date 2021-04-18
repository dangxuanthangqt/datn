import React, { useEffect, useState } from 'react'
import './style.scss'
import { FacebookOutlined, GithubOutlined, SendOutlined } from '@ant-design/icons'
import { Link as RouterLink } from 'react-router-dom'
import {
  Modal, Form, Input, Button,
} from 'antd'
import Logo from 'asset/logo.png'
import 'containers/Client/LoginPage/style.scss'

export default function Footer() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    // setTimeout(() => {
    //   setVisible(true);
    // }, 5000);
  }, [])
  const handleCancel = () => {
    setVisible(false)
  }
  const handleScollToTop = () => {
    window.scrollTo({
      top: 0,

      behavior: 'smooth',
    })
  }
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-12 col-md-12 col-lg-4 img-footer">
              <img src={Logo} alt="logo" />
              <div className="img-footer-contact">
                <p>Liên hệ để đăng tin tuyển dụng:</p>
                <p>SDT: 0989679562</p>
                <p>Email: trankimhoang1998@gmail.com</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6  img-footer">
              <div className="img-footer-contact">
                <RouterLink onClick={handleScollToTop} to="/">
                  Trang chủ
                </RouterLink>
                <RouterLink onClick={handleScollToTop} to="/employer">
                  Nhà tuyển dụng
                </RouterLink>
                <RouterLink onClick={handleScollToTop} to="/candidate">
                  Ứng viên
                </RouterLink>

                <RouterLink onClick={handleScollToTop} to="/recruitments">
                  Việc làm
                </RouterLink>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6  img-footer">
              <h6>Về Chúng tôi</h6>
              <div className="img-footer-contact">
                <a href="/">
                  <span>
                    <FacebookOutlined />
                    {' '}
                    G-Technology
                  </span>
                </a>
                <span>
                  <a href="/">
                    <span>
                      <GithubOutlined />
                      {' '}
                      G-Technology
                    </span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="page-footer font-small">
        <div className="footer-copyright text-center">
          <h6>
            © 2020 Copyright: by
            {' '}
            <span>Trần Kim Hoàng 16T3</span>
          </h6>
        </div>
      </footer>
      <Modal
        width={700}
        style={{ marginTop: '80px' }}
        title="Nhận Thông Tin Về Việc làm mới nhất"
        visible={visible}
        footer={null}
        onCancel={handleCancel}
        onOk={false}
      >
        <Form>
          <h6 style={{ marginBottom: '10px' }}>Email của bạn</h6>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Vui lòng nhập email!' }]}
            >
              <Input
                style={{ width: '400px' }}
                className="login__form-input"
                placeholder="Đà Nẵng"
              />
            </Form.Item>
            <Form.Item>
              <Button
                style={{
                  width: '150px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                type="primary"
                htmlType="submit"
                className="login__form-btn"
                onClick={handleCancel}
              >
                <SendOutlined style={{ fontSize: '15px' }} />
                Gửi
              </Button>
            </Form.Item>
          </div>
        </Form>
      </Modal>
    </div>
  )
}
