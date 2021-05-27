import { ExclamationCircleOutlined } from '@ant-design/icons'
import {
  Checkbox, Modal, Switch, Table,
} from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { recruitmentAdminSelector } from 'stores/moduleAdmin/selectors'
import {
  dispatchChangeActiveRequest,
  dispatchChangeOderRequest,
  dispatchFetchRecruitmentAdminRequest,
} from 'stores/moduleAdmin/thunks'

function ListRecruitment() {
  const dispatch = useDispatch()
  const recruitmentadmin = useSelector(recruitmentAdminSelector)

  useEffect(() => {
    dispatch(dispatchFetchRecruitmentAdminRequest())
  }, [dispatch])

  const data = recruitmentadmin

  const newData = data.map((item) => {
    const obj = { key: `${item.id}` }
    const result = { ...item, ...obj }
    return result
  })
  const SwitchChange = (id) => {
    dispatch(dispatchChangeActiveRequest(id))
  }

  const handleSwitchChange = (record) => {
    // dispatch(changeActiveRequest(record.id));
    if (record.active === 1) {
      Modal.confirm({
        title: 'Thông báo',
        icon: <ExclamationCircleOutlined />,
        content: `Hũy kích hoạt tin tuyển dụng ${record.vacancy}`,
        okText: 'Xác nhận',
        onOk: () => SwitchChange(record.id),
        cancelText: 'Hủy',
      })
    } else if (record.active === 0) {
      Modal.confirm({
        title: 'Thông báo',
        icon: <ExclamationCircleOutlined />,
        content: `Xác nhận kích hoạt tin tuyển dụng ${record.vacancy}`,
        okText: 'Xác nhận',
        onOk: () => SwitchChange(record.id),
        cancelText: 'Hủy',
      })
    }
  }
  const OrderChange = (id) => {
    dispatch(dispatchChangeOderRequest(id))
  }

  const handleOrderChange = (record) => {
    // dispatch(changeOrderRequest(record.id));
    if (record.order === 0) {
      Modal.confirm({
        title: 'Thông báo',
        icon: <ExclamationCircleOutlined />,
        content: `Thêm tin tuyển dụng ${record.company} vào tin tuyển dụng HOT`,
        okText: 'Xác nhận',
        onOk: () => OrderChange(record.id),
        cancelText: 'Hủy',
      })
    } else if (record.order === 1) {
      Modal.confirm({
        title: 'Thông báo',
        icon: <ExclamationCircleOutlined />,
        content: `Hũy thêm tin tuyển dụng ${record.company} vào tin tuyển dụng HOT`,
        okText: 'Xác nhận',
        onOk: () => OrderChange(record.id),
        cancelText: 'Hủy',
      })
    }
  }

  const columns = [
    {
      title: 'Ảnh job',
      dataIndex: 'photo',
      key: 'photo',
      render: (photo) => (
        <img style={{ height: '100px' }} alt={photo} src={photo} />
      ),
    },
    { title: 'Tên công ty', dataIndex: 'company', key: 'company' },
    { title: 'Tên công việc', dataIndex: 'vacancy', key: 'vacancy' },
    { title: 'Số lượng tuyển', dataIndex: 'quantity', key: 'quantity' },
    { title: 'Hạn nạp hồ sơ', dataIndex: 'end_date', key: 'end_date' },
    { title: 'Trình độ', dataIndex: 'rank', key: 'rank' },
    { title: 'Loại hình công việc', dataIndex: 'type_of_work', key: 'type_of_work' },
    { title: 'Địa chỉ', dataIndex: 'city', key: 'city' },
    { title: 'Vị trí', dataIndex: 'career', key: 'career' },
    { title: 'Mức lương', dataIndex: 'salary', key: 'salary' },
    {
      title: 'Action',
      dataIndex: 'active',
      key: 'active',
      render: (e, record) => (
        <Switch
          onChange={() => handleSwitchChange(record)}
          defaultChecked={e}
        />
      ),
    },
    {
      title: 'Order',
      dataIndex: 'order',
      key: 'order',
      render: (e, record) => (
        <Checkbox
          onChange={() => handleOrderChange(record)}
          defaultChecked={e}
        />
      ),
    },
  ]

  const expandedRowRender = (record) => {
    const columns1 = [
      { title: 'Mô tả', dataIndex: 'description', key: 'description' },
      { title: 'Quyển lợi', dataIndex: 'entitlements', key: 'entitlements' },
      {
        title: 'Yêu cầu công việc',
        dataIndex: 'job_requirements',
        key: 'job_requirements',
      },
      {
        title: 'Yêu cầu hồ sơ',
        dataIndex: 'requested_documents',
        key: 'requested_documents',
      },
    ]

    const data1 = []
    data1.push({
      key: record.address,
      description: record.description,
      entitlements: record.entitlements,
      job_requirements: record.job_requirements,
      requested_documents: record.requested_documents,
    })

    return <Table columns={columns1} dataSource={data1} pagination={false} />
  }
  return (
    <Table
      style={{ margin: '10px 10px 0 0' }}
      columns={columns}
      expandable={{
        expandedRowRender,
      }}
      dataSource={newData.sort((a, b) => b.order - a.order)}
      pagination={{ position: ['bottomCenter'], showSizeChanger: false }}
    />
  )
}
export default ListRecruitment
