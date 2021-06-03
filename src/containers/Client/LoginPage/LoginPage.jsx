import React from 'react'
import {
  Button, Col, Form, Input, Row,
} from 'antd'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { loginUserRequest } from 'stores/moduleAuth/thunks'
import './style.scss'

export default function Login() {
  const dispatch = useDispatch()
  const onFinish = (data) => {
    dispatch(loginUserRequest(data))
  }
  return (
    <div>
      <Row className="login">
        <Col span={24}>
          <Form
            id="login"
            name="login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <h3 className="col-form-login">Đăng Nhập</h3>

            <Col span={24}>
              <h6>Email</h6>
              <Form.Item
                name="email"
                rules={[{ required: true, message: 'Vui lòng nhập email!' }]}
              >
                <Input className="login__form-input" placeholder="Nhập mật khẩu email của bạn" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <h6>Mật khẩu</h6>
              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
              >
                <Input
                  className="login__form-input"
                  type="password"
                  placeholder="Nhập mật khẩu của bạn"
                />
              </Form.Item>
            </Col>

            {/* <Form.Item name="remember" valuePropName="checked">
              <Checkbox className="login__form-input">Ghi Nhớ</Checkbox>
            </Form.Item> */}
            <Form.Item className="form-item_inputField">
              <Button
                type="primary"
                htmlType="submit"
                className="login__form-btn align-btn"
              >
                Đăng nhập
              </Button>
            </Form.Item>
            <Form.Item className="form-item_inputField align-btn">
              <p>
                Nếu bạn chưa có tài khoản?
                <Link to="/signup" className="login-form-register">
                  Đăng ký ngay!
                </Link>
              </p>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  )
}
