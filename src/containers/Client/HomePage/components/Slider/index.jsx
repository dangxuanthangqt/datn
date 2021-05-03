import React, { useState, useRef } from 'react'
import Container from 'react-bootstrap/Container'
import Slider from 'react-slick'
import {
  Row, Col, Button, Tag, Typography,
} from 'antd'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './style.scss'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'

export default function Sliders() {
  const { Text } = Typography
  const [nav1, setNav1] = useState()
  const [nav2, setNav2] = useState()
  const [count, setCount] = useState(1)

  const ref = useRef({})
  const next = () => {
    ref.current.slickNext()
  }
  const previous = () => {
    ref.current.slickPrev()
  }
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: 'ondemand',
    beforeChange: (current, nextValue) => setCount(nextValue + 1),
  }

  return (
    <Container id="slider">
      {/* eslint-disable-next-line react/jsx-no-duplicate-props */}
      <Slider {...settings} asNavFor={nav2} ref={(c) => setNav1(c)} ref={ref}>
        <div className="slick-item">
          <Row className="slick-item__content">
            <Col span={12} className="slick-item__content-photo">
              <div className="slick-item__content-photo-img">
                <img src="https://topdev.vn/blog/wp-content/uploads/2020/11/resume-distribution-myths.gif" alt="baner" />
              </div>
            </Col>
            <Col span={12} className="slick-item__content-detail">
              <h4>
                Sơ yếu lý lịch cho IT là gì? Cách viết sơ yếu lý lịch IT siêu
                chuẩn
              </h4>
              <hr className="line" />
              <Text style={{ display: 'block', fontSize: '0.8rem' }} mark>
                Admin - 11h trước
              </Text>
              <span className="dec">
                Sơ yếu lý lịch cho IT là một yếu tố quan trọng trong bộ hồ sơ
                xin việc.
              </span>

              <div style={{ marginBottom: '10px' }}>
                <Tag>React JS</Tag>
                <Tag>JavaScrip</Tag>
              </div>
              <Button
                style={{ margin: '10px 0' }}
                size="large"
                className="btn-slider"
                type="primary"
                href="https://topdev.vn/blog/so-yeu-ly-lich-cho-it/"
                target="_blank"
              >
                Xem chi tiết
              </Button>
            </Col>
          </Row>
        </div>
        <div className="slick-item">
          <Row className="slick-item__content">
            <Col span={12} className="slick-item__content-photo">
              <div className="slick-item__content-photo-img">
                <img src="https://topdev.vn/blog/wp-content/uploads/2020/11/TUOI25.jpg" alt="baner" />
              </div>
            </Col>
            <Col span={12} className="slick-item__content-detail">
              <h4>Tuổi 25 – Bạn có suy ngẫm gì về hành trình ấy?</h4>
              <hr className="line" />
              <Text style={{ display: 'block', fontSize: '0.8rem' }} mark>
                Admin - 11h trước
              </Text>
              <span className="dec">
                Con số 25 nói lên được nhiều điều. Chắc chắn bạn đã trải qua
                nhiều vấp ngã đầu đời và các áp lực từ cuộc sống. Có khi nào bạn
                đã từng ngẫm lại những gì đã trôi qua hay chưa? Hay chỉ đơn
                thuần là mãi bị cuốn vào guồng quay của công việc. Nếu chưa thì
                có lẽ, bài viết này là dành các bạn đấy!
              </span>

              <div style={{ marginBottom: '10px' }}>
                <Tag>React JS</Tag>
                <Tag>JavaScrip</Tag>
              </div>
              <Button
                style={{ margin: '10px 0' }}
                size="large"
                className="btn-slider"
                type="primary"
                href="https://topdev.vn/blog/suy-ngam-tuoi-25/"
                target="_blank"
              >
                Xem chi tiết
              </Button>
            </Col>
          </Row>
        </div>

        <div className="slick-item">
          <Row className="slick-item__content">
            <Col span={12} className="slick-item__content-photo">
              <div className="slick-item__content-photo-img">
                <img src="https://topdev.vn/blog/wp-content/uploads/2020/10/giaotiep-1.png" alt="img" />
              </div>
            </Col>
            <Col span={12} className="slick-item__content-detail">
              <h4>5 kỹ năng quan trọng cho ngành Nhân sự</h4>
              <hr className="line" />
              <Text style={{ display: 'block', fontSize: '0.8rem' }} mark>
                Admin - 11h trước
              </Text>
              <span className="dec">
                Ngành nhân sự ngày nay đòi hỏi nhiều kỹ năng. Đó cũng là thách
                thức lớn đối với những ai lựa chọn theo đuổi ngành nghề này. Khi
                thế giới nhân sự phát triển, việc tìm kiếm những người có kỹ
                năng tốt để đáp ứng sự vận hành hiện đại là ưu tiên hàng đầu.
              </span>

              <div style={{ marginBottom: '10px' }}>
                <Tag>React JS</Tag>
                <Tag>JavaScrip</Tag>
              </div>
              <Button
                style={{ margin: '10px 0' }}
                size="large"
                className="btn-slider"
                type="primary"
                href="https://topdev.vn/blog/5-ky-nang-quan-trong-nganh-nhan-su/"
                target="_blank"
              >
                Xem chi tiết
              </Button>
            </Col>
          </Row>
        </div>

        <div className="slick-item">
          <Row className="slick-item__content">
            <Col span={12} className="slick-item__content-photo">
              <div className="slick-item__content-photo-img">
                <img src="https://topdev.vn/blog/wp-content/uploads/2020/11/1584679625941-recruitment-software-FB.png" alt="img" />
              </div>
            </Col>
            <Col span={12} className="slick-item__content-detail">
              <h4>Tại sao ứng viên của bạn “bốc hơi” trong buổi phỏng vấn?</h4>
              <hr className="line" />
              <Text style={{ display: 'block', fontSize: '0.8rem' }} mark>
                Admin - 11h trước
              </Text>
              <span className="dec">
                CV IT Administrator chưa hoàn hảo có phải là nguyên nhân khiến
                ứng viên e dè buổi interview?
              </span>

              <div style={{ marginBottom: '10px' }}>
                <Tag>React JS</Tag>
                <Tag>JavaScrip</Tag>
              </div>
              <Button
                style={{ margin: '10px 0' }}
                size="large"
                className="btn-slider"
                type="primary"
                href="https://topdev.vn/blog/ung-vien-boc-hoi-buoi-phong-van-cv-it-administrator/"
                target="_blank"
              >
                Xem chi tiết
              </Button>
            </Col>
          </Row>
        </div>

      </Slider>
      {/* slider 2  */}
      <Row id="slider2">
        <Col span={12}>
          <div className="btn-move">
            <Button
              onClick={previous}
              className="btn-move-slick"
              icon={<ArrowLeftOutlined />}
              type="text"
            />
            <Text style={{ paddingTop: '10px', color: '#1fbcdb' }}>
              {count}
              /4
            </Text>
            <Button
              onClick={next}
              className="btn-move-slick"
              icon={<ArrowRightOutlined />}
              type="text"
            />
          </div>
        </Col>
        <Col span={12}>
          <Slider
            asNavFor={nav1}
            ref={(c) => setNav2(c)}
            slidesToShow={3}
            swipeToSlide
            focusOnSelect
            arrows={false}
          >
            <div className="slick-item-child">
              <img src="https://topdev.vn/blog/wp-content/uploads/2020/11/resume-distribution-myths.gif" alt="img" />
              <p>
                Sơ yếu lý lịch cho IT là gì? Cách viết sơ yếu lý lịch IT siêu
                chuẩn
              </p>
            </div>
            <div className="slick-item-child">
              <img src="https://topdev.vn/blog/wp-content/uploads/2020/11/TUOI25.jpg" alt="img" />
              <p>Tuổi 25 – Bạn có suy ngẫm gì về hành trình ấy?</p>
            </div>
            <div className="slick-item-child">
              <img src="https://topdev.vn/blog/wp-content/uploads/2020/10/giaotiep-1.png" alt="img" />
              <p>5 kỹ năng quan trọng cho ngành Nhân sự</p>
            </div>
            <div className="slick-item-child">
              <img src="https://topdev.vn/blog/wp-content/uploads/2020/11/1584679625941-recruitment-software-FB.png" alt="img" />
              <p>Tại sao ứng viên của bạn “bốc hơi” trong buổi phỏng vấn?</p>
            </div>
          </Slider>
        </Col>
      </Row>
    </Container>
  )
}
