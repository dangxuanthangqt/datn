import {
  Button, Col, DatePicker, Form, Input, Row, Select,
} from 'antd'
import { UploadImage } from 'components/UploadImage'
import moment from 'moment'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userIDSelector } from 'stores/moduleAuth/selectors'
import { infoCandidateSelector } from 'stores/moduleCandidate/selectors'
import { dispatchFetchInfoCandidateRequest, dispatchUpdateInfoCandidateRequest } from 'stores/moduleCandidate/thunks'
import { listCareerSelector } from 'stores/moduleDataMaster/selectors'
import { dispatchFetchListCareer } from 'stores/moduleDataMaster/thunks'
import { v4 } from 'uuid'

import './style.scss'

export default function InforCandidate() {
  const { Option } = Select

  const userID = useSelector(userIDSelector)

  const infoCandidate = useSelector(infoCandidateSelector)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(dispatchFetchInfoCandidateRequest(userID))
    dispatch(dispatchFetchListCareer())
  }, [dispatch])

  const onFinish = (value) => {
    const newValue = {
      ...value,
      avatar: value.avatar.fileList[0].thumbUrl,
    }
    console.log('newValue', newValue)
    dispatch(dispatchUpdateInfoCandidateRequest(infoCandidate.id, newValue))
  }

  const [form] = Form.useForm()
  const { setFieldsValue } = form

  useEffect(() => {
    if (infoCandidate) {
      setFieldsValue({
        name: infoCandidate.name
          ? infoCandidate.name
          : 'Đang cập nhật',
      })
      setFieldsValue({
        address: infoCandidate.address
          ? infoCandidate.address
          : 'Đang cập nhật',
      })
      setFieldsValue({
        phone: infoCandidate.phone
          ? infoCandidate.phone
          : 'Đang cập nhật',
      })
      setFieldsValue({
        position: infoCandidate.position
          ? infoCandidate.position
          : 'Đang cập nhật',
      })
      setFieldsValue({
        experience: infoCandidate.experience
          ? infoCandidate.experience
          : 'Đang cập nhật',
      })
      setFieldsValue({
        birthday: moment(infoCandidate.birthday)
          ? moment(infoCandidate.birthday)
          : 'Đang cập nhật',
      })
    }
    return setFieldsValue({})
  }, [infoCandidate])

  const career = useSelector(listCareerSelector)

  return (
    <Form form={form} onFinish={onFinish}>
      <div className="info__employers">
        <h6>Avatar</h6>
        <UploadImage name="avatar" url={infoCandidate.avatar} />
        <h6>Tên ứng viên</h6>
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập tên ứng viên',
            },
          ]}
        >
          <Input
            className="info__employers-input"
            placeholder="Trần Kim Hoàng"
          />
        </Form.Item>
        <h6>Địa chỉ</h6>
        <Form.Item
          name="address"
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập địa chỉ',
            },
          ]}
        >
          <Input className="info__employers-input" placeholder="Đà Nẵng" />
        </Form.Item>
        <Row>
          <Col span={12}>
            <div>
              <h6>Ngày tháng năm sinh</h6>
              <Form.Item
                name="birthday"
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng chọn ngày sinh',
                  },
                ]}
              >
                <DatePicker />
              </Form.Item>
              <h6>Số điện thoại</h6>
              <Form.Item
                name="phone"
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập số điện thoại',
                  },
                ]}
              >
                <Input
                  className="info__employers-input"
                  placeholder="0347971116"
                />
              </Form.Item>
            </div>
          </Col>
          <Col span={12}>
            <div>
              <h6>Vị trí</h6>
              <Form.Item
                name="position"
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập ví trí',
                  },
                ]}
              >
                {/* <Input
                  className="info__employers-input"
                  placeholder="Internship"
                /> */}
                <Select
                  className="info__employers-input-select"
                  showSearch
                  style={{ width: 200 }}
                  optionFilterProp="children"
                  filterOption={(input, option) => option.children
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0}
                >
                  {career.map((value) => (
                    <Option key={v4()} value={value.name}>
                      {value.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              <h6>Kinh nghiệm </h6>
              <Form.Item
                name="experience"
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập kinh nghiệm',
                  },
                ]}
              >
                <Input className="info__employers-input" placeholder="1 năm" />
              </Form.Item>
            </div>
          </Col>
        </Row>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="info__employers-btn"
          >
            Cập nhật
          </Button>
        </Form.Item>
      </div>
    </Form>
  )
}
