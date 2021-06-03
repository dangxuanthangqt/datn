import React from 'react'
import './style.scss'
import { Button, Form } from 'antd'
import { CheckOutlined } from '@ant-design/icons'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { userIDSelector } from 'stores/moduleAuth/selectors'
import { dispatchAddCVRequest, dispatchUpdateCVRequest } from 'stores/moduleCv/thunks'
import { toastWarning } from 'helpers/toastify'
import { isArray, isEmpty } from 'lodash'

export default function TipsCV(props) {
  const userId = useSelector(userIDSelector)
  const { getValues, form, detailCV } = props

  const dispatch = useDispatch()
  const onSubmit = () => {
    const data = getValues().dataCV
    const {
      birthday, email, fullName, location, phone, position, title, avatar,
    } = form.getFieldValue()
    const dataUser = {
      birthday,
      email,
      fullName,
      location,
      phone,
      position,
    }
    const newData = { dataUser, dataCV: data }

    if (!title) {
      toastWarning('Nhập tiêu đề CV')
      return
    }
    // if (typeof avatar === 'string') {
    //   toastWarning('Vui lòng tải ảnh mới lên')
    //   return
    // }
    if (isArray(avatar?.fileList)) {
      if (!avatar?.fileList?.length) {
        toastWarning('Không để trống ảnh')
        return
      }
    }
    const value = {
      user_id: userId,
      title,
      avatar: isArray(avatar.fileList) ? avatar.fileList[0].thumbUrl : avatar,
      object: newData,
    }
    if (isEmpty(detailCV)) {
      dispatch(dispatchAddCVRequest(value))
    } else dispatch(dispatchUpdateCVRequest(detailCV.id, value))
  }

  return (
    <div className="tipsCV">
      <div className="tipsCV__content">
        <h2>Tips: </h2>
        <div className="tipsCV__content-des">
          <p>
            <CheckOutlined />
            Lưu ý Chỉnh sửa thông tin công việc mong muốn.
          </p>
          <p>
            <CheckOutlined />
            Ấn trực tiếp vào các phần thông tin để chỉnh sửa.
          </p>
          <p>
            <CheckOutlined />
            Nhập đầy đủ các thông tin hiển thị trong hồ sơ.
          </p>
          <p>
            <CheckOutlined />
            Bấm nút “ Lưu hồ sơ ” để lưu thông tin hồ sơ.
          </p>
          {/* <p>
            <CheckOutlined /> Hoặc bấm nút “ Tải xuống hồ sơ ” để tải về file hồ
            sơ có định dạng PDF.
          </p> */}
        </div>
      </div>

      <div className="tipsCV__btn">
        <Form.Item>
          <Button onClick={onSubmit} type="primary" className="tipsCV__btn-cus">
            Lưu hồ sơ
          </Button>
        </Form.Item>
        {/* <Button type="primary" className="tipsCV__btn-cus">
          Tải xuống hồ sơ
        </Button> */}
      </div>
    </div>
  )
}
TipsCV.propTypes = {
  getValues: PropTypes.func,
  form: PropTypes.object,
  detailCV: PropTypes.object,
}
