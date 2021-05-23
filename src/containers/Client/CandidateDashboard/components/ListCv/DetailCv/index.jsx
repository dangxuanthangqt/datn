import {
  Col, Row, Timeline, Rate,
} from 'antd'
import React from 'react'
import Container from 'react-bootstrap/Container'
import PropTypes from 'prop-types'
import './style.scss'
import { v4 } from 'uuid'
import { get } from 'lodash'
import moment from 'moment'

export default function DetailCv(props) {
  const { detailCV } = props

  const dataCV = get(detailCV, 'object.dataCV', [])
  const dataUser = get(detailCV, 'object.dataUser', {})

  const renderEducation = () => {
    const jsx = []
    if (dataCV[0]?.check === true) {
      return (
        <div>
          <h2 style={{ marginBottom: '20px' }}>
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-briefcase"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6h-1v6a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-6H0v6z"
              />
              <path
                fillRule="evenodd"
                d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5v2.384l-7.614 2.03a1.5 1.5 0 0 1-.772 0L0 6.884V4.5zM1.5 4a.5.5 0 0 0-.5.5v1.616l6.871 1.832a.5.5 0 0 0 .258 0L15 6.116V4.5a.5.5 0 0 0-.5-.5h-13zM5 2.5A1.5 1.5 0 0 1 6.5 1h3A1.5 1.5 0 0 1 11 2.5V3h-1v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V3H5v-.5z"
              />
            </svg>
            HỌC VẤN
          </h2>
          {
          dataCV[0].divisions.map((item) => (
            <Timeline key={v4()} mode="left" className="time-line-detail">
              <Timeline.Item label={`${item?.timeRange?.[0] || '--/--'} - ${item?.timeRange?.[1] || '--/--'}`}>
                {item.description}
                <p>
                  {item.detailInfo}
                  <br />
                  {item.subdesc}
                </p>
              </Timeline.Item>
            </Timeline>
          ))
          }
        </div>
      )
    }
    return jsx
  }

  const renderExperience = () => {
    const jsx = []
    if (dataCV[1]?.check === true) {
      return (
        <div>
          <h2>
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-code-square"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
              />
              <path
                fillRule="evenodd"
                d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z"
              />
            </svg>
            {' '}
            KINH NGHIỆM
          </h2>
          {
          dataCV[1].divisions.map((item) => (
            <Timeline key={v4()} mode="left" className="time-line-detail">
              <Timeline.Item label={`${item?.timeRange?.[0] || '--/--'} - ${item?.timeRange?.[1] || '--/--'}`}>
                {item.description}
                <p>
                  {item.detailInfo}
                  <br />
                  {item.subdesc}
                </p>
              </Timeline.Item>
            </Timeline>
          ))
          }
        </div>
      )
    }
    return jsx
  }

  const renderSkill = () => {
    const jsx = []
    if (dataCV[2]?.check === true) {
      return (
        <div>
          <h2>
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-code-square"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
              />
              <path
                fillRule="evenodd"
                d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z"
              />
            </svg>
            {' '}
            KỸ NĂNG
          </h2>
          {dataCV[2]?.divisions.map((item) => (
            <div key={v4()} style={{ padding: '10px 80px' }}>
              <p>{item.nameSkill}</p>
              <Rate
                style={{ margin: '5px' }}
                allowHalf
                value={item.rate}
                disabled
              />
            </div>
          ))}
        </div>
      )
    }
    return jsx
  }

  const renderActivate = () => {
    const jsx = []
    if (dataCV[3]?.check === true) {
      return (
        <div>
          <h2>
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-code-square"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
              />
              <path
                fillRule="evenodd"
                d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z"
              />
            </svg>
            HOẠT ĐỘNG
          </h2>
          {dataCV[3]?.divisions.map((item) => (
            <div key={v4()} style={{ padding: '10px 80px' }}>
              <p>{item.description}</p>
              <p>{item.detailInfo}</p>
            </div>
          ))}
        </div>
      )
    }
    return jsx
  }

  const renderLanguage = () => {
    const jsx = []
    if (dataCV[4]?.check === true) {
      return (
        <div>
          <h2>
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-code-square"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
              />
              <path
                fillRule="evenodd"
                d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z"
              />
            </svg>
            NGÔN NGỮ
          </h2>
          {dataCV[4]?.divisions.map((item) => (
            <div
              key={v4()}
              style={{ padding: '10px 80px', display: 'flex' }}
            >
              {item.detailInfo}
            </div>
          ))}
        </div>
      )
    }
    return jsx
  }

  const renderInterests = () => {
    const jsx = []
    if (dataCV[5]?.check === true) {
      return (
        <div>
          <h2>
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-code-square"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
              />
              <path
                fillRule="evenodd"
                d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z"
              />
            </svg>
            {' '}
            SỞ THÍCH
          </h2>
          {dataCV[5]?.divisions.map((item) => (
            <div
              key={v4()}
              style={{ padding: '10px 80px', display: 'flex' }}
            >
              {item.description}
            </div>
          ))}
        </div>
      )
    }
    return jsx
  }

  return (
    <div>
      <Container fluid className="candidates_img">
        <img src="https://static-cse.canva.com/image/96990/create-youtubethumbnails.jpg" alt="avatar" />
      </Container>
      <Container className="candidates_content">
        <Row style={{ height: '100%' }}>
          <Col span={4} className="candidates_content-avatar">
            <div>
              <img src={detailCV.avatar} alt="avatar" />
            </div>
          </Col>
          <Col span={8} className="candidates_content-dep custom-line">
            <h4>{dataUser?.fullName}</h4>
            <p>{dataUser?.position}</p>
          </Col>
          <Col span={6} className="candidates_content-dep custom-line">
            <span>EMAIL</span>
            <p>{dataUser.email}</p>
            <span>PHONE</span>
            <p>0347971116</p>
          </Col>
          <Col span={6} className="candidates_content-dep">
            <span>BIRTHDAY</span>
            <p>{ moment(dataUser.birthday).format('dd-MM-YYYY')}</p>
            <span>LOCATION</span>
            <p>{dataUser.location}</p>
          </Col>
        </Row>
      </Container>
      <Container className="candidates_detail">
        <div className="candidates_detail-title">
          {renderEducation()}
          {renderExperience()}
          {renderSkill()}
          {renderActivate()}
          {renderLanguage()}
          {renderInterests()}
        </div>
      </Container>
    </div>
  )
}
DetailCv.propTypes = {
  detailCV: PropTypes.object,
}
