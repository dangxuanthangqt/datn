import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import {
  Input, Row, Select, Button, Form,
} from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import '../../../RecruitmentPage/Search/index'
import { dispatchFetchListCareer } from 'stores/moduleDataMaster/thunks'

import { useDispatch, useSelector } from 'react-redux'
import { v4 } from 'uuid'
import { listCareerSelector } from 'stores/moduleDataMaster/selectors'

export default function Search(props) {
  const { Option } = Select

  const career = useSelector(listCareerSelector)

  const careers = [
    {
      created_at: '2020-11-12 12:54:39',
      id: 1,
      name: '',
      updated_at: '2020-11-12 12:54:39',
    },
    ...career,
  ]

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(dispatchFetchListCareer())
  }, [dispatch])

  const { handleCurrent } = props
  const { handleSubmit } = props

  const [formState, setFormState] = useState({
    name: '',
    position: '',
  })

  const handleChangeName = (event) => {
    const { value } = event.target
    setFormState(() => ({
      ...formState,
      name: value,
    }))
  }

  const onFinish = () => {
    handleSubmit(formState)
    handleCurrent(1)
  }

  const handleChangePosition = (event) => {
    setFormState(() => ({
      ...formState,
      position: event,
    }))
  }

  return (
    <Container fluid id="search">
      <Container className="search">
        <div className="search__title">
          <h2>Tìm kiếm ứng viên</h2>
          <hr className="line-theme" />
        </div>
        <Row className="search__content">
          <Form onFinish={onFinish}>
            <Form.Item name="name" onChange={handleChangeName}>
              <Input
                placeholder="Nhập tên ứng viên"
                className="search__input"
              />
            </Form.Item>
            <Form.Item name="position">
              <Select
                placeholder="Vị Trí"
                className="search__input-select"
                onChange={handleChangePosition}
              >
                {careers.map((value) => {
                  if (value.name === '') {
                    return (
                      <Option key={v4()} value={value.name}>
                        Tất cả
                      </Option>
                    )
                  }
                  return (
                    <Option key={v4()} value={value.name}>
                      {value.name}
                    </Option>
                  )
                })}
              </Select>
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
