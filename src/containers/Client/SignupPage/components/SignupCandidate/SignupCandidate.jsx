import {
  Button, Col, Form, Input, Row,
} from 'antd'
import { Regex } from 'constants/validation'
import React from 'react'

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
}
// const tailFormItemLayout = {
//   wrapperCol: {
//     xs: {
//       span: 24,
//       offset: 0,
//     },
//     sm: {
//       span: 16,
//       offset: 8,
//     },
//   },
// }
// const tailFormItemLayoutH3 = {
//   wrapperCol: {
//     xs: {
//       span: 24,
//       offset: 0,
//     },
//     sm: {
//       span: 24,
//       offset: 8,
//     },
//     xl: {
//       span: 24,
//       offset: 11,
//     },
//   },
// }

function SignupCandidate() {
  // const dispatch = useDispatch()

  const onFinish = (value) => {
    // dispatch(registerCandidateRequest(value))
    console.log(value)
  }

  return (
    <div className="container-signup">
      <Row>
        <Col xl={24} md={16} xs={16}>
          <div className="form-Signup">
            <div className="form-Signup_title" style={{ textAlign: 'center', margin: '10px 0' }}>
              <h2>Đăng ký Ứng Viên</h2>
            </div>
            <Form
              className="register-candidate"
              {...formItemLayout}
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
                  placeholder="Trần Kim Hoàng"
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
        </Col>
        <Col xl={4} md={3} xs={0} />
      </Row>
    </div>
  )
}

export default SignupCandidate
