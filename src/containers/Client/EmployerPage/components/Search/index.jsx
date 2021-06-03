import { SearchOutlined } from '@ant-design/icons'
import PropTypes from 'prop-types'
import {
  Button, Form, Input, Row,
} from 'antd'
import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import '../../../RecruitmentPage/Search/index.scss'
import './style.scss'

export default function Search(props) {
  const { handleCurrent } = props
  const { handleSubmit } = props

  const [formState, setFormState] = useState({
    company: '',
  })

  const handleChangeCompany = (event) => {
    const { value } = event.target
    setFormState(() => ({
      ...formState,
      company: value,
    }))
  }

  const onFinish = () => {
    handleSubmit(formState)
    handleCurrent(1)
  }

  return (
    <Container fluid id="search">
      <Container className="search">
        <div className="search__title">
          <h2>Tìm kiếm Nhà tuyển dụng</h2>
          <hr className="line-theme" />
        </div>
        <Row className="search__content">
          <Form onFinish={onFinish}>
            <Form.Item name="company" onChange={handleChangeCompany}>
              <Input
                placeholder="Nhập nhà tuyển dụng"
                className="search__input"
              />
            </Form.Item>
            <Form.Item>
              <Button
                className="search-btn"
                type="primary"
                htmlType="submit"
                icon={<SearchOutlined />}
              />
            </Form.Item>
          </Form>
        </Row>
      </Container>
    </Container>
  )
}
Search.propTypes = {
  handleCurrent: PropTypes.func,
  handleSubmit: PropTypes.func,
}
