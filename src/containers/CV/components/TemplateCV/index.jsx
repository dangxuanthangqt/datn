import {
  Col, DatePicker, Form, Input, Row,
} from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import { UploadImage } from 'components/UploadImage'
import moment from 'moment'
import React from 'react'
import PropTypes from 'prop-types'

import './style.scss'

export default function TemplateCV(props) {
  const { data } = props
  const [imgs, setImg] = React.useState('https://picsum.photos/900/300')
  const urlImg = 'https://picsum.photos/900/305'

  return (
    <>
      <div className="title-CV">
        <h2>Tiêu đề CV</h2>
        <Form.Item initialValue={data.title} name="title" className="title-CV-form">
          <Input
            autoComplete="off"
            className="text-area-input-cus-xs"
            placeholder="Tiêu đề CV..."
          />
        </Form.Item>
      </div>
      <div className="template_cv">
        <div className="template_cv__cover-img">
          <img src={imgs} alt="avatar" />
          <div className="template_cv__cover-overlay">
            <div className="template_cv__cover-overlay-edit">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-trash"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                <path
                  fillRule="evenodd"
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                />
              </svg>
              <svg
                onClick={() => setImg(urlImg)}
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-arrow-counterclockwise"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"
                />
                <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="template-cv_content">
          <Row style={{ height: '100%' }}>
            <Col span={4} className="template-cv_content-avatar">
              <div>
                <UploadImage name="avatar" url={data.avatar} />
              </div>
            </Col>
            <Col span={8} className="template-cv_content-dep custom-line">
              <Form.Item name="fullName" initialValue={data.name}>
                <TextArea
                  autoComplete="off"
                  className="text-area-input-cus-xs"
                />
              </Form.Item>
              <Form.Item name="potision" initialValue={data.position}>
                <TextArea className="text-area-input-cus-sm" />
              </Form.Item>
            </Col>
            <Col span={6} className="template-cv_content-dep custom-line">
              <span>EMAIL</span>
              <Form.Item name="email" initialValue={data.email}>
                <TextArea
                  className="text-area-input-cus-sm"
                  style={{ padding: 0, margin: 0, fontSize: '14px' }}
                />
              </Form.Item>
              <span>PHONE</span>
              <Form.Item name="phone" initialValue={data.phone}>
                <TextArea
                  className="text-area-input-cus-sm"
                  style={{ padding: 0, margin: 0, fontSize: '14px' }}
                />
              </Form.Item>
            </Col>
            <Col span={6} className="template-cv_content-dep">
              <span>BIRTHDAY</span>
              <Form.Item
                name="birthday"
                initialValue={moment(data.birthday, 'YYYY/MM/DD')}
              >
                <DatePicker className="text-area-input-cus-sm" />
              </Form.Item>
              <span style={{ marginTop: '15px' }}>LOCATION</span>
              <Form.Item name="location" initialValue={data.address}>
                <TextArea
                  className="text-area-input-cus-sm"
                  style={{ padding: 0, margin: 0, fontSize: '14px' }}
                />
              </Form.Item>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}
TemplateCV.propTypes = {
  data: PropTypes.object,
}
