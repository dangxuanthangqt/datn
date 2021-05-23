import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import { Row, Col, Timeline } from 'antd'
import './style.scss'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { dispatchFetchDetailCandidate } from 'stores/moduleCandidate/thunks'

export default function CandidateDetail() {
  const { id } = useParams()

  const dispatch = useDispatch()
  const detailCandidate = useSelector(
    (state) => state.candidate.detailCandidate,
  )

  useEffect(() => {
    dispatch(dispatchFetchDetailCandidate(id))
  }, [])

  const data = detailCandidate.result[0]

  return (
    <div>
      <Container fluid className="candidates_img">
        <img src="https://static-cse.canva.com/image/96990/create-youtubethumbnails.jpg" alt="avatar" />
      </Container>
      <Container className="candidates_content">
        <Row style={{ height: '100%' }}>
          <Col span={4} className="candidates_content-avatar">
            <div>
              <img src={data.avatar} alt="avatar" />
            </div>
          </Col>
          <Col span={8} className="candidates_content-dep custom-line">
            <h4>{data.name}</h4>
            <p>{data.position}</p>
          </Col>
          <Col span={6} className="candidates_content-dep custom-line">
            <span>EMAIL</span>
            <p>{data.email}</p>
            <span>PHONE</span>
            <p>{data.phone}</p>
          </Col>
          <Col span={6} className="candidates_content-dep">
            <span>BIRTHDAY</span>
            <p>{data.birthday}</p>
            <span>LOCATION</span>
            <p>{data.address}</p>
          </Col>
        </Row>
      </Container>
      <Container className="candidates_detail">
        <div className="candidates_detail-title">
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
              EDUCATION
            </h2>
            <Timeline mode="left" className="time-line-detail">
              <Timeline.Item label="2007 — 2009">
                University School of the Arts
                <p>
                  Ratione voluptatem sequi nesciunt, facere quisquams facere
                  menda ossimus, omnis voluptas assumenda est omnis..
                </p>
              </Timeline.Item>
              <Timeline.Item label="2019-2020">
                New York Academy of Art
              </Timeline.Item>
            </Timeline>
          </div>
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
            MY SKILL
          </h2>
          <div className="candidates_detail-skill" />
          <h2>
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-bookmarks"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1H4z"
              />
              <path
                fillRule="evenodd"
                d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z"
              />
            </svg>
            ABOUT
          </h2>
          <p>
            My job is to build your website so that it is functional and
            user-friendly but at the same time attractive. Moreover, I add
            personal touch to your product and make sure that is eye-catching
            and easy to use. My aim is to bring across your message and identity
            in the most creative way. I created web design for many famous brand
            companies.
          </p>
        </div>
      </Container>
    </div>
  )
}
