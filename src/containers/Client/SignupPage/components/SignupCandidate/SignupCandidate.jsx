import {
  Button, Form, Input,
} from 'antd'
import { Regex } from 'constants/validation'
import React from 'react'
import { useDispatch } from 'react-redux'
import { dispatchRegisterCandidate } from 'stores/moduleAuth/thunks'

function SignupCandidate() {
  const dispatch = useDispatch()

  const onFinish = (value) => {
    dispatch(dispatchRegisterCandidate(value))
    // TODO: create
  }

  return (
    <div className="container-signup">

      <div className="form-Signup">
        <div className="form-Signup_title" style={{ textAlign: 'center', margin: '10px 0' }}>
          <h2>Đăng ký Ứng Viên</h2>
        </div>
        <Form
          className="register-candidate"
          name="register"
          scrollToFirstError
          onFinish={onFinish}
        >
          <h6>Họ và tên (*)</h6>
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                min: 6,
                max: 20,
                message: 'Tên từ 6-20 ký tự',
              },
            ]}
          >
            <Input
              className="login__form-input"
              placeholder="Nhập tên"
            />
          </Form.Item>

          <h6>Điện thoại (*)</h6>
          <Form.Item
            name="phone"
            rules={[
              {
                required: true,
                pattern: Regex.phoneNumber,
                message:
                      'Số điện thoại không đúng (Không có ký tự -  và hơn 6 số)',
              },
            ]}
          >
            <Input className="login__form-input" placeholder="0989679562" />
          </Form.Item>

          <h6>E-mail (*)</h6>
          <Form.Item
            name="email"
            rules={[
              {
                type: 'email',
                message: 'Nhập không đúng định đạng E-mail!',
              },
              {
                required: true,
                message: 'Vui lòng nhập E-mail!',
              },
            ]}
          >
            <Input
              className="login__form-input"
              placeholder="trankimhoang1998@gmail.com"
            />
          </Form.Item>

          <h6>Mật khẩu (*)</h6>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                pattern: Regex.password,
                message: 'Hơn 8 ký tự, 1 ký tự viết hoa, 1 ký tự đặc biệt',
              },
            ]}
            hasFeedback
          >
            <Input.Password
              className="login__form-input"
              placeholder="Hoang291198@"
            />
          </Form.Item>

          <h6>Xác nhận mật khẩu (*)</h6>
          <Form.Item
            name="password_confirmation"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập mật khẩu',
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  }

                  return Promise.reject('Mật khẩu không khớp!')
                },
              }),
            ]}
          >
            <Input.Password
              className="login__form-input"
              placeholder="Hoang291198@"
            />
          </Form.Item>

          <Form.Item
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button
              style={{ width: '100%' }}
              type="primary"
              htmlType="submit"
              className="login__form-btn align-btn"
            >
              Đăng Ký
            </Button>
          </Form.Item>
        </Form>
      </div>

    </div>
  )
}

export default SignupCandidate
