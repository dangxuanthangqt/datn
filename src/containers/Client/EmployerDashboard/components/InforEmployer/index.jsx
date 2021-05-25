import {
  Button, Col, Form, Input, Row,
} from 'antd'
import { UploadImage } from 'components/UploadImage'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userIDSelector } from 'stores/moduleAuth/selectors'
import { infoEmployerSelector } from 'stores/moduleEmployer/selectors'
import { dispatchUpdateInfoEmployerRequest, fetchInfoEmployerRequest } from 'stores/moduleEmployer/thunks'

import './style.scss'

export default function InforEmployer() {
  const userID = useSelector(userIDSelector)

  const infoEmployer = useSelector(infoEmployerSelector)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchInfoEmployerRequest(userID))
  }, [dispatch])

  const onFinish = (value) => {
    const newValue = {
      ...value,
      avatar: value.avatar.fileList?.[0].thumbUrl || value.avatar,
      photo: value.photo.fileList?.[0].thumbUrl || value.photo,
    }

    dispatch(dispatchUpdateInfoEmployerRequest({ id: infoEmployer.id, data: newValue }))
  }

  const [form] = Form.useForm()
  const { setFieldsValue } = form

  useEffect(() => {
    if (infoEmployer) {
      setFieldsValue({
        company: infoEmployer.company
          ? infoEmployer.company
          : 'Đang cập nhật',
      })
      setFieldsValue({
        contact: infoEmployer.contact
          ? infoEmployer.contact
          : 'Đang cập nhật',
      })
      setFieldsValue({
        address: infoEmployer.address
          ? infoEmployer.address
          : 'Đang cập nhật',
      })
      setFieldsValue({
        phone: infoEmployer.phone
          ? infoEmployer.phone
          : 'Đang cập nhật',
      })
      setFieldsValue({
        website: infoEmployer.website
          ? infoEmployer.website
          : 'Đang cập nhật',
      })
      setFieldsValue({
        description: infoEmployer.description
          ? infoEmployer.description
          : 'Đang cập nhật',
      })
    }
    return setFieldsValue({})
  }, [infoEmployer])

  return (
    <Form form={form} onFinish={onFinish}>
      <div className="info__employers">
        <div className="info__employers-avatar">
          <div>
            <h6>Ảnh đại diện</h6>
            <UploadImage name="avatar" url={infoEmployer.avatar} />
          </div>
          <div>
            <h6>Ảnh bìa</h6>
            <UploadImage name="photo" url={infoEmployer.photo} />
          </div>
        </div>
        <h6>Tên công ty</h6>
        <Form.Item
          name="company"
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập tên công ty',
            },
          ]}
        >
          <Input
            className="info__employers-input"
            placeholder="Axon Acitve Viet Nam"
          />
        </Form.Item>
        <h6>Tên liên hệ</h6>
        <Form.Item
          name="contact"
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập tên liên hệ',
            },
          ]}
        >
          <Input
            className="info__employers-input"
            placeholder="Trần Kim Hoàng"
          />
        </Form.Item>
        <Row>
          <Col span={12}>
            <div>
              <h6>Địa chỉ</h6>
              <Form.Item
                name="address"
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập địa chỉ',
                  },
                ]}
              >
                <Input
                  className="info__employers-input"
                  placeholder="Đà Nẵng"
                />
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
              <h6>website</h6>
              <Form.Item
                name="website"
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập địa chỉ website',
                  },
                ]}
              >
                <Input
                  className="info__employers-input"
                  placeholder="axon.vn"
                />
              </Form.Item>
              <h6>Mô Tả</h6>
              <Form.Item
                name="description"
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập mô tả',
                  },
                ]}
              >
                <Input
                  className="info__employers-input"
                  placeholder="Gia công phần mềm"
                />
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
