import { UnorderedListOutlined } from '@ant-design/icons'
import {
  Button, Checkbox, Col, Form, Modal, Row,
} from 'antd'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { userIDSelector } from 'stores/moduleAuth/selectors'
import { infoCandidateSelector } from 'stores/moduleCandidate/selectors'
import { dispatchFetchInfoCandidateRequest } from 'stores/moduleCandidate/thunks'
import TemplateCV from './components/TemplateCV'
import './components/TemplateCV/style.scss'
import TipsCV from './components/TipsCV'
import { dataCV as dataCV1 } from './constant'
import './style.scss'
import MainForm from './components/MainForm'

function CV() {
  const defaultValues = { dataCV: dataCV1 }
  const {
    control,
    handleSubmit,
    getValues,
    setValue,
    register,
  } = useForm({
    mode: 'onSubmit',
    defaultValues,
  })
  const { fields } = useFieldArray({
    control,
    name: 'dataCV',
  })
  const dispatch = useDispatch()
  const [visible, setVisible] = useState(false)

  const [form] = Form.useForm()

  const infoCandidate = useSelector(infoCandidateSelector)
  const userID = useSelector(userIDSelector)

  useEffect(() => {
    dispatch(dispatchFetchInfoCandidateRequest(userID))
  }, [])

  useEffect(() => form.resetFields(), [infoCandidate]) // reset value init

  const renderCheckList = () => {
    let jsx = []
    jsx = fields.map((item, index) => (
      <Form.Item key={item.id} className="list-form-custom">
        <Controller
          name={`dataCV[${index}].check`}
          control={control}
          render={({ field: { value, onChange } }) => (
            <Checkbox
              className="list-form-custom-checked"
              checked={value}
              onChange={(e) => {
                onChange(e.target.checked)
              }}
            >
              <div className="list-form-custom-checked-content">
                <span>{item.title}</span>
              </div>
            </Checkbox>
          )}
        />
      </Form.Item>
    ))
    return jsx
  }
  return (
    <Container fluid>
      <Modal
        title="Thêm trường tùy chỉnh"
        visible={visible}
        onCancel={() => {
          setVisible(false)
        }}
        okText={() => <div />}
        cancelText="OK"
      >
        <Form>
          <div className="form-checked">{renderCheckList()}</div>
        </Form>
      </Modal>

      <Row>
        <Col span={16}>
          <Form form={form}>
            <TemplateCV data={infoCandidate} />
          </Form>

          <div className="main-info">
            <MainForm
              register={register}
              getValues={getValues}
              control={control}
              fields={[...fields]}
              setValue={setValue}

            />
            <Button
              type="primary"
              className="btn-form-check-list"
              onClick={() => setVisible(true)}
              icon={<UnorderedListOutlined />}
            />
          </div>
        </Col>
        <Col span={8}>
          <TipsCV form={form} getValues={getValues} />
        </Col>
      </Row>

    </Container>
  )
}

export default CV
