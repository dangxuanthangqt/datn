import { SearchOutlined } from '@ant-design/icons'
import {
  Button, Form, Input, Row, Select,
} from 'antd'
import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import { useDispatch, useSelector } from 'react-redux'
import { listCareerSelector, listCitySelector, listRankSelector } from 'stores/moduleDataMaster/selectors'
import { dispatchFetchListCareer, dispatchFetchListCity, dispatchFetchListRank } from 'stores/moduleDataMaster/thunks'
import { v4 } from 'uuid'
import './index.scss'

export default function Search(props) {
  const [formState, setFormState] = useState({
    vacancy: '',
    city: '',
    rank: '',
    career: '',
  })

  const citys = useSelector(listCitySelector)
  const ranks = useSelector(listRankSelector)
  const careers = useSelector(listCareerSelector)

  // const citys = [
  //   {
  //     created_at: '2020-11-12 12:54:39',
  //     id: '',
  //     name: '',
  //     updated_at: '2020-11-12 12:54:39',
  //   },
  //   ...city.result,
  // ]

  // const ranks = [
  //   {
  //     created_at: '2020-11-12 12:54:39',
  //     id: '',
  //     name: '',
  //     updated_at: '2020-11-12 12:54:39',
  //   },
  //   ...rank.result,
  // ]

  // const careers = [
  //   {
  //     created_at: '2020-11-12 12:54:39',
  //     id: '',
  //     name: '',
  //     updated_at: '2020-11-12 12:54:39',
  //   },
  //   ...career.result,
  // ]

  const { handleCurrent } = props
  const { handleSubmit } = props

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(dispatchFetchListCity())
    dispatch(dispatchFetchListRank())
    dispatch(dispatchFetchListCareer())
  }, [dispatch])

  const { Option } = Select

  const handleChangeVacancy = (event) => {
    const { value } = event.target
    setFormState(() => ({
      ...formState,
      vacancy: value,
    }))
  }

  const handleChangeCity = (event) => {
    setFormState(() => ({
      ...formState,
      city: event,
    }))
  }

  const handleChangeRank = (event) => {
    setFormState(() => ({
      ...formState,
      rank: event,
    }))
  }

  const handleChangeCareer = (event) => {
    setFormState(() => ({
      ...formState,
      career: event,
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
          <h2>Tìm kiếm Việc làm</h2>
          <hr className="line-theme" />
        </div>
        <Row className="search__content">
          <Form onFinish={onFinish}>
            <Form.Item name="vacancy" onChange={handleChangeVacancy}>
              <Input placeholder="Tên công việc..." className="search__input" />
            </Form.Item>

            <Form.Item name="city">
              <Select
                placeholder="Thành Phố"
                className="search__input-select"
                onChange={handleChangeCity}
              >
                <Option key={v4()} value="">
                  Tất cả
                </Option>
                {citys.map((value) => (
                  <Option key={v4()} value={value.id}>
                    {value.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item name="rank">
              <Select
                placeholder="Chức vụ"
                className="search__input-select"
                onChange={handleChangeRank}
              >
                <Option key={v4()} value="">
                  Tất cả
                </Option>
                {ranks.map((value) => (
                  <Option key={v4()} value={value.id}>
                    {value.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item name="career">
              <Select
                placeholder="Vị Trí"
                className="search__input-select"
                onChange={handleChangeCareer}
              >
                <Option key={v4()} value="">
                  Tất cả
                </Option>
                {careers.map((value) => (
                  <Option key={v4()} value={value.id}>
                    {value.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item>
              <Button className="search-btn" type="primary" htmlType="submit">
                <SearchOutlined />
              </Button>
            </Form.Item>
          </Form>
        </Row>
      </Container>
    </Container>
  )
}
