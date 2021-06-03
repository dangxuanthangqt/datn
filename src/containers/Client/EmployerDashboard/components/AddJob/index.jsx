import {
  Button, Col, DatePicker, Form, Input, InputNumber, Row, Select,
} from 'antd'
import { UploadImage } from 'components/UploadImage'
import React, { useEffect } from 'react'
import Container from 'react-bootstrap/esm/Container'
import { useDispatch, useSelector } from 'react-redux'
import { userIDSelector } from 'stores/moduleAuth/selectors'
import {
  listCareerSelector,
  listCitySelector,
  listRankSelector,
  listSalarySelector,
  listTypeOfWorkSelector,
} from 'stores/moduleDataMaster/selectors'
import {
  dispatchFetchListCareer,
  dispatchFetchListCity,
  dispatchFetchListRank,
  dispatchFetchListSalary,
  dispatchFetchListTypeOfWork,
} from 'stores/moduleDataMaster/thunks'
import { dispatchAddRecruitmentRequest } from 'stores/moduleRecruitment/thunks'
import { v4 } from 'uuid'
import './style.scss'

export default function AddJob() {
  const { Option } = Select
  const { TextArea } = Input

  const userID = useSelector(userIDSelector)
  const city = useSelector(listCitySelector)
  const rank = useSelector(listRankSelector)
  const career = useSelector(listCareerSelector)
  const salary = useSelector(listSalarySelector)
  const typeofwork = useSelector(listTypeOfWorkSelector)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(dispatchFetchListCity())
    dispatch(dispatchFetchListRank())
    dispatch(dispatchFetchListCareer())
    dispatch(dispatchFetchListSalary())
    dispatch(dispatchFetchListTypeOfWork())
  }, [dispatch])

  const onFinish = (value) => {
    const newValue = {
      ...value,
      photo: value.photo.fileList?.[0].thumbUrl || value.photo,
      user_id: userID,
    }

    dispatch(dispatchAddRecruitmentRequest(newValue))
  }

  const dateFormat = 'YYYY-MM-DD'

  return (
    <Container>
      <div className="addJob__title">
        <h2>Đăng tin tuyển dụng</h2>
      </div>
      <div className="addJob__form">
        <div className="addJob__form-dep">
          <h4>Bạn vui lòng hoàn thiện các thông tin dưới đây</h4>
          <p>(*) Các thông tin bắt buộc</p>
        </div>
        <Form onFinish={onFinish}>
          <Row>
            <Col span={24}>
              <h6>Ảnh Job (*)</h6>
              <UploadImage name="photo" url="/" />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <h6>Tiêu đề tin tuyển dụng (*)</h6>
              <Form.Item
                name="vacancy"
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập tiêu đề cho tin tuyển dụng',
                  },
                ]}
              >
                <Input className="addJob__form-input" />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <h6>Số lượng (*)</h6>
              <Form.Item
                name="quantity"
                rules={[
                  {
                    type: 'number',
                    message: 'Vui lòng chỉ nhập số',
                  },
                  {
                    required: true,
                    message: 'Vui lòng nhập số lượng người cần tuyển',
                  },
                ]}
              >
                <InputNumber min={1} className="addJob__form-input" />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <div>
                <h6>Chức vụ (*)</h6>
                <Form.Item
                  name="rank_id"
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng chọn',
                    },
                  ]}
                >
                  <Select
                    name="sadasd"
                    className="addJob__form-input-select"
                    showSearch
                    style={{ width: 200 }}
                    optionFilterProp="children"
                    filterOption={(input, option) => option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0}
                  >
                    {rank.map((value) => (
                      <Option key={v4()} value={value.id}>
                        {value.name}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>

                <h6>Địa điểm (*)</h6>
                <Form.Item
                  name="city_id"
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng chọn',
                    },
                  ]}
                >
                  <Select
                    name="sadasd"
                    className="addJob__form-input-select"
                    showSearch
                    style={{ width: 200 }}
                    optionFilterProp="children"
                    filterOption={(input, option) => option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0}
                  >
                    {city.map((value) => (
                      <Option key={v4()} value={value.id}>
                        {value.name}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
                <h6>Hình thức làm việc (*)</h6>
                <Form.Item
                  name="type_of_work_id"
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng chọn',
                    },
                  ]}
                >
                  <Select
                    name="sadasd"
                    className="addJob__form-input-select"
                    showSearch
                    style={{ width: 200 }}
                    optionFilterProp="children"
                    filterOption={(input, option) => option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0}
                  >
                    {typeofwork.map((value) => (
                      <Option key={v4()} value={value.id}>
                        {value.name}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </div>
            </Col>

            <Col span={12}>
              <div>
                <h6>Vị trí (*)</h6>
                <Form.Item
                  name="career_id"
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng chọn',
                    },
                  ]}
                >
                  <Select
                    name="sadasd"
                    className="addJob__form-input-select"
                    showSearch
                    style={{ width: 200 }}
                    optionFilterProp="children"
                    filterOption={(input, option) => option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0}
                  >
                    {career.map((value) => (
                      <Option key={v4()} value={value.id}>
                        {value.name}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
                <h6>Mức lương (*)</h6>
                <Form.Item
                  name="salary_id"
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng chọn',
                    },
                  ]}
                >
                  <Select
                    name="sadasd"
                    className="addJob__form-input-select"
                    showSearch
                    style={{ width: 200 }}
                    optionFilterProp="children"
                    filterOption={(input, option) => option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0}
                  >
                    {salary.map((value) => (
                      <Option key={v4()} value={value.id}>
                        {value.name}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
                <h6>Hạn nộp hồ sơ (*)</h6>
                <Form.Item
                  name="end_date"
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng chọn hạn nộp hồ sơ',
                    },
                  ]}
                >
                  <DatePicker format={dateFormat} />
                </Form.Item>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <h6>Mô tả công việc (*)</h6>
              <Form.Item
                name="description"
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng điền mô tả công việc',
                  },
                ]}
              >
                <TextArea rows={4} />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <h6>Quyền lợi được hưởng (*)</h6>
              <Form.Item
                name="entitlements"
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng điền quyền lợi thừa hưởng',
                  },
                ]}
              >
                <TextArea rows={4} />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <h6>Yêu cầu công việc (*)</h6>
              <Form.Item
                name="job_requirements"
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng điền yêu cầu công việc',
                  },
                ]}
              >
                <TextArea rows={4} />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <h6>Yêu cầu hồ sơ (*)</h6>
              <Form.Item
                name="requested_documents"
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng điền yêu cầu hồ sơ',
                  },
                ]}
              >
                <TextArea rows={4} />
              </Form.Item>
            </Col>
          </Row>
          <Button className="addJob__form-btn" type="primary" htmlType="submit">
            Đăng tin
          </Button>
        </Form>
      </div>
    </Container>
  )
}
