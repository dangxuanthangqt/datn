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
// const tailFormItemLayouth2 = {
//   wrapperCol: {
//     xs: {
//       span: 24,
//       offset: 0,
//     },
//     sm: {
//       span: 22,
//       offset: 5,
//     },
//     xl: {
//       span: 16,
//       offset: 9,
//     },
//   },
// }
function SignupEmployer() {
  // const dispatch = useDispatch()

  const onFinish = (value) => {
    // dispatch(registerEmployerRequest(value))
    console.log(value)
  }

  return (
    <div className="container-signup">
      <Row>
        <Col xl={24} md={20} xs={20}>
          <div className="form-Signup-Employer">
            <div className="form-Signup_title" style={{ textAlign: 'center', margin: '10px 0' }}>
              <h2>Đăng ký Nhà Tuyển Dụng</h2>
            </div>
            <Form
              {...formItemLayout}
              className="register-candidate"
              name="register"
              onFinish={onFinish}
              scrollToFirstError
            >
              <h6>Tên liên hệ (*)</h6>
              <Form.Item
                name="contact"
                rules={[
                  {
                    required: true,
                    min: 2,
                    max: 200,
                    message: 'Tên của bạn nên từ 2 tới 200 ký tự',
                  },
                ]}
              >
                <Input
                  className="login__form-input"
                  placeholder="Trần Kim Hoàng"
                />
              </Form.Item>
              <h6>Số điện thoại (*)</h6>
              <Form.Item
                name="phone"
                rules={[
                  {
                    required: true,
                    pattern: Regex.phoneNumber,
                    message: 'Số điện thoại nên trên 6 số và không chứ "-"',
                  },
                ]}
              >
                <Input className="login__form-input" placeholder="0989679562" />
              </Form.Item>
              <h6>E-Mail (*)</h6>
              <Form.Item
                name="email"
                rules={[
                  {
                    type: 'email',
                    message: 'Xin hãy nhập đúng emai',
                  },
                  {
                    required: true,
                    message: 'Vui lòng nhập',
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
                    message:
                      'Mật khẩu phải bao gồm 8 ký tự cho chữ in hoa, chữ thường và ký tự đặc biệt',
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
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng xác nhận mật khẩu!',
                  },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve()
                      }

                      return Promise.reject(
                        'Hai mật khẩu chưa trùng khớp, vui lòng kiểm tra lại!',
                      )
                    },
                  }),
                ]}
                hasFeedback
              >
                <Input.Password
                  className="login__form-input"
                  placeholder="Hoang291198@"
                />
              </Form.Item>
              <h6>Tên công ty (*)</h6>
              <Form.Item
                name="company"
                rules={[
                  {
                    required: true,
                    min: 2,
                    message: 'Vui lòng nhập tên công ty!',
                    whitespace: true,
                  },
                ]}
              >
                <Input
                  className="login__form-input"
                  placeholder="Công ty TNHH 1 thành viên HoangDepTrai"
                />
              </Form.Item>
              <h6>Địa chỉ công ty (*)</h6>
              <Form.Item
                name="address"
                rules={[
                  {
                    required: true,
                    min: 2,
                    message: 'Vui lòng nhập địa chỉ công ty!',
                    whitespace: true,
                  },
                ]}
              >
                <Input
                  className="login__form-input"
                  placeholder="Quế Trung - Nông Sơn - Quảng Nam"
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
                  Đăng ký
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

export default SignupEmployer
