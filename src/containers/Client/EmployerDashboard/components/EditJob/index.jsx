import {
  Button, Col, DatePicker, Form, Input, InputNumber, Row, Select,
} from 'antd'
import { UploadImage } from 'components/UploadImage'
import moment from 'moment'
import React, { useEffect } from 'react'
import Container from 'react-bootstrap/esm/Container'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
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
import { infoEditRecruitmentSelector } from 'stores/moduleRecruitment/selectors'
import { dispatchFetchInfoEditRecruitment, dispatchUpdateRecruitmentRequest } from 'stores/moduleRecruitment/thunks'
import { v4 } from 'uuid'
import './style.scss'

export default function EditJob() {
  const { id } = useParams()
  const { Option } = Select
  const { TextArea } = Input

  const userID = useSelector(userIDSelector)
  const city = useSelector(listCitySelector)
  const rank = useSelector(listRankSelector)
  const career = useSelector(listCareerSelector)
  const salary = useSelector(listSalarySelector)
  const typeofwork = useSelector(listTypeOfWorkSelector)

  const infoEdit = useSelector(infoEditRecruitmentSelector)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(dispatchFetchListCity())
    dispatch(dispatchFetchListRank())
    dispatch(dispatchFetchListCareer())
    dispatch(dispatchFetchListSalary())
    dispatch(dispatchFetchListTypeOfWork())
    dispatch(dispatchFetchInfoEditRecruitment(id))
  }, [dispatch])

  const onFinish = (value) => {
    const newValue = {
      ...value,
      photo: value?.photo?.fileList?.[0].thumbUrl || value.photo,
    }
    dispatch(dispatchUpdateRecruitmentRequest(newValue.id, newValue))
  }

  const [form] = Form.useForm()
  const { setFieldsValue } = form

  useEffect(() => {
    if (infoEdit) {
      setFieldsValue({ id: infoEdit.id })
      setFieldsValue({ vacancy: infoEdit.vacancy })
      setFieldsValue({ photo: infoEdit.photo })
      setFieldsValue({ quantity: infoEdit.quantity })
      setFieldsValue({ rank_id: infoEdit.rank_id })
      setFieldsValue({ city_id: infoEdit.city_id })
      setFieldsValue({ type_of_work_id: infoEdit.type_of_work_id })
      setFieldsValue({ career_id: infoEdit.career_id })
      setFieldsValue({ salary_id: infoEdit.salary_id })
      setFieldsValue({ end_date: moment(infoEdit.end_date) })
      setFieldsValue({ description: infoEdit.description })
      setFieldsValue({ entitlements: infoEdit.entitlements })
      setFieldsValue({ job_requirements: infoEdit.job_requirements })
      setFieldsValue({
        requested_documents: infoEdit.requested_documents,
      })
    }
    return setFieldsValue({})
  }, [infoEdit])

  return (
    <Container>
      <div className="addJob__title">
        <h2>Sửa tin tuyển dụng</h2>
      </div>
      <div className="addJob__form">
        <div className="addJob__form-dep">
          <h4>Bạn vui lòng hoàn thiện các thông tin dưới đây</h4>
          <p>(*) Các thông tin bắt buộc</p>
        </div>
        <Form form={form} onFinish={onFinish}>
          <Row>
            <Col span={24}>
              <h6>Ảnh Job (*)</h6>
              <UploadImage name="photo" url={infoEdit.photo} />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item name="id" style={{ display: 'none' }}>
                <Input className="addJob__form-input" />
              </Form.Item>
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
                  <DatePicker />
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
            Sửa tin
          </Button>
        </Form>
      </div>
    </Container>
  )
}
